Module.register("admin", {
	defaults: {
	  message: "ALERT!!!!!!",
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
		this.config.message = payload;
		this.updateDom();
	  }
	  
	},
	
	getDom: function () {
	  	const messageWrapper = document.createElement("div");
	  	const message = document.createTextNode(this.config.message);
		
		messageWrapper.className = "short-message";
	
	  	messageWrapper.appendChild(message);
		return messageWrapper;
	},
  });
  