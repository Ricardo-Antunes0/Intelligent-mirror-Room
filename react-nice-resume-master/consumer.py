import paho.mqtt.client as mqtt
from confluent_kafka import Consumer
#import pickle
from flask import Flask, request, jsonify
from threading import Thread
from apscheduler.schedulers.background import BackgroundScheduler
import time
import json
from flask_cors import CORS, cross_origin
from threading import *
import threading
import kafka

app = Flask(__name__)
CORS(app)
data = {}
ppg_value = 0

broker_address = "192.168.160.19"

# def loop():
# 	client.loop()

def on_connect(client, 	userdata, flags, rc):
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
	return jsonify(data)


#def main():
#    while True:
#        msg=c.poll(1.0) #timeout
#        if msg is None:
#            continue
#        if msg.error():
#            print('Error: {}'.format(msg.error()))
#            continue
#        data=msg.value().decode('utf-8')
#        print(data)
#    c.close()
        

if __name__=="__main__":
	c=Consumer({'bootstrap.servers':'192.168.160.19:9092','group.id':'python-consumer','auto.offset.reset':'earliest'})
	print('Available topics to consume: ', c.list_topics().topics)
	c.subscribe(['test-topic'])

	c.on_connect = on_connect
	c.on_message = on_message
	c.connect(broker_address, port=9092, keepalive=60)
	c.loop_start()
	app.run(host="192.168.160.19", debug=True)



