import { Client } from "revolt.js";

let client = new Client();

client.on("ready", async () =>
    console.info(`Logged in as ${client.user.username}!`),
);

client.on("message", async (message) => {
    if (message.content === "hello") {
        message.channel.sendMessage("world");
    }
});

client.loginBot(config.REVOLT_API_TOKEN);