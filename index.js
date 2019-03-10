const {ServiceBroker} = require("moleculer"),
    TypetalkService = require("moleculer-typetalk"),
    config = require("./config");

// Create broker
const broker = new ServiceBroker({logger: console});

// Load my service
broker.createService({
    mixins: [TypetalkService],
    name: "typetalk",
    settings: {
        token: config.token,
        topicID: config.topicID
    }
});

// Start server
broker.start().then(() => {
    broker
        .call("typetalk.post", {
            message: "Hello, Typetalk!"
        })
        .then(() => {
            // Do something...
        })
        .catch(() => {
            // Do something...
        });
});
