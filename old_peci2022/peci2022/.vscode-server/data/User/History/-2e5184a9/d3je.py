import paho.mqtt.client as mqtt
import pickle
from flask import Flask, request, jsonify
from threading import Thread
from apscheduler.schedulers.background import BackgroundScheduler
import time
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
data = {}


def loop():
	client.loop()

def on_message(client, userdata, message):
	global data
	data = json.loads(message.payload)
	print(data)

broker_address = "0.0.0.0"
client = mqtt.Client("ppg-client-sub")
client.on_message = on_message

client.connect(broker_address, port=1883, keepalive=60)

client.subscribe("counter")
client.subscribe("ppg")

scheduler = BackgroundScheduler()
scheduler.add_job(func=loop, trigger="interval", seconds=1)
scheduler.start()


@app.route('/counter', methods=['GET'])
@cross_origin()
def counter():
	global data
	data = jsonify(data)
	print(data)
	return data



if __name__ == '__main__':
	app.run(host="192.168.160.19", debug=True)

	



