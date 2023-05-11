from flask import Flask, render_template, jsonify
from kafka import KafkaConsumer
from kafka import KafkaProducer
import threading

app = Flask(__name__)
messages_topic1 = []
messages_topic2 = []
lock_topic1 = threading.Lock()
lock_topic2 = threading.Lock()

def consume_messages_topic1():
    global messages_topic1
    consumer_topic1 = KafkaConsumer('test-topic', bootstrap_servers='192.168.160.19:9092')
    producer = KafkaProducer(bootstrap_servers='192.168.160.19:9092')
    topic_name = 'admin-message'
    alert = "Alert: High BPM'S"
    alert1 = "Alert: Low BPM'S"
    for message in consumer_topic1:
        with lock_topic1:
            messages_topic1.append(message.value.decode('utf-8'))
            if(int(message.value.decode('utf-8')) >= 100):
                producer.send(topic_name, alert.encode('utf-8'))

            if(int(message.value.decode('utf-8')) <= 56 and int(message.value.decode('utf-8')) >= 5):
                producer.send(topic_name, alert1.encode('utf-8'))
                #print('Sent message: {}'.format("Alerta: RELAXA"))
            

                
                

            

def consume_messages_topic2():
    global messages_topic2
    consumer_topic2 = KafkaConsumer('ppg', bootstrap_servers='192.168.160.19:9092')
    for message in consumer_topic2:
        with lock_topic2:
            messages_topic2.append(message.value.decode('utf-8'))


@app.route('/')
def index():
    return render_template('index.html', messages_topic1=messages_topic1, messages_topic2=messages_topic2)

@app.route('/get_messages_topic1', methods=['GET'])
def get_messages_topic1():
    global messages_topic1
    with lock_topic1:
        latest_message = messages_topic1[-1] if messages_topic1 else ''
    return jsonify(latest_message=latest_message)

@app.route('/get_messages_topic2', methods=['GET'])
def get_messages_topic2():
    global messages_topic2
    with lock_topic2:
        latest_message = messages_topic2[-1] if messages_topic2 else ''
    return jsonify(latest_message=latest_message)

if __name__ == '__main__':
    consumer_thread_topic1 = threading.Thread(target=consume_messages_topic1)
    consumer_thread_topic1.start()

    consumer_thread_topic2 = threading.Thread(target=consume_messages_topic2)
    consumer_thread_topic2.start()

    app.run(debug=True)
