const { Client } = require("discord.js-selfbot-v13");

// Replace 'YOUR_USER_TOKEN' with your Discord user token
const token =
    "MTA5NDYwNjUzMDU3OTU0NjIyMw.GPIdN1.aX6K7xwJlYZ9kG05Q5wWNBbju5CFCWyfyJCipw";

const client = new Client();

client.on("ready", () => {
    console.log(Logged in as ${client.user.tag}!);
    console.log("Self-bot is now running!");
});

// Example: Respond to specific messages
client.on("messageCreate", async (message) => {
    if (message.author.bot) return; // Ignore bot messages

    // Respond to "hello"
    if (message.content.toLowerCase() === "hello") {
        await message.channel.send("Hi there!");
    }
});

// Log in using the user token
client.login(token);