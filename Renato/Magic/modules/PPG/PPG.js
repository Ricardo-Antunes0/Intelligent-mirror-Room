Module.register("PPG", {
	defaults: {
	  message: "Connecting to the camera...",
	},
	
	start: function() {
	  // Send a socket notification to the node_helper to start listening to the Kafka topic
	  this.sendSocketNotification("START_CONSUMER");
	},
  
	getStyles: function () {
		return ["PPG_styles.css"];
	},
	socketNotificationReceived: function (notification, payload) {
	  if (notification === "MESSAGE_RECEIVED") {
		if(payload==0){
			this.config.message = "Look to the camera!";
		  }
		else{
			this.config.message = "BPM: " + payload;
		}

		this.updateDom();
	  }
	  
	},
	
	getDom: function () {
	  	const messageWrapper = document.createElement("div");
	  	const message = document.createTextNode(this.config.message);
		if(this.config.message==="Look to the camera!"){
			messageWrapper.className = "long-message";
		}
		else if(this.config.message==="Connecting to the camera..."){
			messageWrapper.className = "long-message1";
		}
		else{
			messageWrapper.className = "short-message";
		}
	  	messageWrapper.appendChild(message);
		return messageWrapper;
	},
  });
  