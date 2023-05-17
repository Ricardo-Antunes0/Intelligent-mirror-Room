Module.register("names", {
	defaults: {
	  message: "",
	  defaultImage: "./modules/names/images/unknown.jpg",
	  imagePath: "./modules/names/images/"
	},
	
	
	start: function() {
	  // Send a socket notification to the node_helper to start listening to the Kafka topic
	  	this.sendSocketNotification("START_CONSUMER");
	},
  
	getStyles: function () {
		return ["names.css"];
	},
	socketNotificationReceived: function (notification, payload) {
		if (notification === "MESSAGE_RECEIVED" && payload !== undefined && payload !== null && payload !== "") {
			if (payload === "unknown") {
			  this.config.message = "";
			  this.config.url = this.config.defaultImage;
			} else {
			  this.config.message = "Bem-vindo " + payload;
			  this.config.url = this.config.imagePath + this.formatPayload(payload) + ".jpg";
			}  
		} else {
			this.config.message = "";
			this.config.url = null;
		}

		this.updateDom();	  
	},

	formatPayload: function (payload) {
		return payload.toLowerCase().replace(/\s+/g, "_");
	  },
	
	getDom: function () {
		const wrapper = document.createElement("div");
		wrapper.className = "name-wrapper";

		const messageElement = document.createElement("div");
		messageElement.className = "short-message";
	  	const message = document.createTextNode(this.config.message);
	  	wrapper.appendChild(message);

		if (this.config.url) {
			const imageElement = document.createElement("img");
			imageElement.className = "person-image";
			imageElement.src = this.config.url;
			wrapper.appendChild(imageElement);
		  }

		return wrapper;
	},
  });
  