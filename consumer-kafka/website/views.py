from flask import Blueprint, render_template
from confluent_kafka import Consumer

views = Blueprint('views', __name__)

messages = []

def handle_new_message(data):
    messages.append(data)
    #print('Number of messages:', len(messages))

@views.route('/')
def home():
    print('Messages:', messages)
    return render_template('home.html', messages=messages)

def kafka_consumer():
    c = Consumer({
        'bootstrap.servers': '192.168.160.19:9092',
        'group.id': 'mygroup',
        'auto.offset.reset': 'earliest'})
    c.subscribe(['test-topic'])

    print('Connected to Kafka broker:', c.bootstrap_connect())
    print('Subscribed to Kafka topic:', c.subscription())

    while True:
        msg = c.poll(1.0)
        if msg is None:
            continue
        if msg.error():
            print('Error: {}'.format(msg.error()))
            continue
        data = msg.value().decode('utf-8')
        handle_new_message({'data': data})
    c.close()

if __name__ == '__main__':
    kafka_consumer()
