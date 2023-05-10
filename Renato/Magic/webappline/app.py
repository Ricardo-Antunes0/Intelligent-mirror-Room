from flask import Flask, render_template, jsonify
from kafka import KafkaConsumer
import json
import threading

app = Flask(__name__)

# Initialize an empty array to store the data points
data_points = []

# Kafka consumer configuration
bootstrap_servers = '192.168.160.19:9092'
topic_name = 'test-topic'
consumer_group_id = 'group-id'

# Function to fetch data from Kafka topic
def fetch_data_from_kafka():
    consumer = KafkaConsumer(
        topic_name,
        bootstrap_servers=bootstrap_servers,
        group_id=consumer_group_id,
        value_deserializer=lambda x: json.loads(x.decode('utf-8'))
    )

    for message in consumer:
        data = message.value
        # Process the received data as per your requirement
        # For example, extract the desired values and append to the data_points array

        # Append the data to the data_points array
        data_points.append(data)

# Function to start fetching data from Kafka
def start_fetching_data():
    fetch_data_from_kafka()

# Create a background thread for fetching data
def start_background_thread():
    t = threading.Thread(target=start_fetching_data)
    t.daemon = True
    t.start()

# Route to render the home page
@app.route('/')
def index():
    return render_template('index.html')

# API endpoint to retrieve the data points
@app.route('/data')
def get_data():
    return jsonify(data_points)

if __name__ == '__main__':
    start_background_thread()
    app.run()
