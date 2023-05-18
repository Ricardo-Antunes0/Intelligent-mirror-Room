Module.register("admin", {
	defaults: {
	  message: "ALERT!!!!!!",
	},
	
	start: function() {
	  // Send a socket notification to the node_helper to start listening to the Kafka topic
	  this.sendSocketNotification("START_CONSUMER");
	},
  
	getStyles: function () {
		return ["admin.css"];
	},
	socketNotificationReceived: function (notification, payload) {
	  if (notification === "MESSAGE_RECEIVED") {
		this.config.message = payload;
		this.updateDom();
	  }
	  
	},
	
	getDom: function () {
	  	const messageWrapper = document.createElement("div");
		messageWrapper.className = "short-message";

		if (this.config.message !== this.defaults.message) {
			const iconElement = document.createElement("i");
    		iconElement.className = "fas fa-exclamation-triangle alert-icon";
			messageWrapper.appendChild(iconElement);
		}

	  	const message = document.createTextNode(this.config.message);
	  	messageWrapper.appendChild(message);
		return messageWrapper;
	},
  });