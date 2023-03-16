const NodeHelper = require("node_helper");
const { Kafka } = require("kafkajs");

module.exports = NodeHelper.create({
  // Override start method.
  start: function () {
    console.log("Starting node_helper for module: " + this.name);

    // Create a Kafka client instance.
    this.kafka = new Kafka({
      clientId: "my-app",
      brokers: ["192.168.160.19:9092"],
    });

    // Subscribe to the topic.
    this.consumer = this.kafka.consumer({ groupId: "my-group" });
    this.consumer.connect().then(() => {
      this.consumer.subscribe({ topic: "ppg" });
      this.consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          console.log(`Received message from Kafka topic ${topic}:`, message.value.toString());
          this.sendSocketNotification("MESSAGE_RECEIVED", message.value.toString());
        },
      });
    });
  },

  // Override socket notification handler.
  socketNotificationReceived: function (notification, payload) {
    if (notification === "STOP_CONSUMER") {
      this.consumer.stop();
    }
  },
});
