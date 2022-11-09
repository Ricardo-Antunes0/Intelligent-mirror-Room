import paho.mqtt.client as mqtt
import pickle
from flask import Flask, request, jsonify
from threading import Thread
from apscheduler.schedulers.background import BackgroundScheduler
import time
import json
from flask_cors import CORS, cross_origin
from threading import *
import threading

app = Flask(__name__)
CORS(app)
data = {}
ppg_value = 0

broker_address = "0.0.0.0"


# def loop():
# 	client.loop()

def on_connect(client, 	userdata, rc):
	client.subscribe("counter")
	client.subscribe("ppg")

def on_message(client, userdata, message):
	global data, ppg_value
	temp = json.loads(message.payload)
	print(temp)
	try: 
		temp['value']
		ppg_value = temp['value']
	except:
		pass
	
	try: 
		temp['num_people']
		data = temp
	except:
		pass
	

@app.route('/counter', methods=['GET'])
@cross_origin()
def counter():
	global data, ppg_value
	data['value'] = ppg_value
	print("fetched")
	return jsonify(data)

if __name__=="__main__":
	client = mqtt.Client("ppg-client-sub")
	client.on_connect = on_connect
	client.on_message = on_message
	client.connect(broker_address, port=1883, keepalive=60)
	client.loop_start()
	app.run(host="192.168.160.19", debug=True)





	



