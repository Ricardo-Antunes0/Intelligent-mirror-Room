const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['192.168.160.19:9092']
});

const consumer = kafka.consumer({ groupId: 'group2' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'name_person', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(`Received message: ${message.value.toString()}`);
      var value = message.value.toString();
    },
  });
};
run().catch(console.error);