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
ppg_value = 0


def loop():
	client.loop()

def on_message(client, userdata, message):
	global data, ppg_value
	temp = json.loads(message.payload)
	try: 
		temp['value']
		ppg_value = temp['value']
		print(ppg_value)
	except:
		pass
	
	try: 
		temp['num_people']
		data = temp
		print("received counter")
	except:
		pass
	


broker_address = "0.0.0.0"
client = mqtt.Client("ppg-client-sub")
client.on_message = on_message

client.connect(broker_address, port=1883, keepalive=6000)

client.subscribe("counter")
client.subscribe("ppg")

scheduler = BackgroundScheduler()
scheduler.add_job(func=loop, trigger="interval", seconds=0.2)
scheduler.start()


@app.route('/counter', methods=['GET'])
@cross_origin()
def counter():
	global data, ppg_value
	data['value'] = ppg_value
	print(data)
	return jsonify(data)



if __name__ == '__main__':
	app.run(host="192.168.160.19", debug=True)

	



