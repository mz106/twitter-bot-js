require("dotenv").config();
const rwClient = require("./twitterClient");
const CronJob = require("cron").CronJob;

const tweet = async () => {
    try {
        await rwClient.v2.tweet("I like cheese!");
    } catch (error) {
        console.error(error);
    }
};

const job = new CronJob("* * * * *", () => {
    console.log("CronJob starting...")
    tweet()
});

job.start();