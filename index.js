const core = require('@actions/core');
const github = require('@actions/github');

const request = require('snekfetch');

async function run() {
    try {
        const webhookUrl = core.getInput('webhookUrl').replace("/github", "");
        if (!webhookUrl) {
            core.setFailed("The webhookUrl was not provided. For security reasons the secret URL must be provided "
                           + "in the action yaml using a context expression and can not be read as a default.");
            return;
        }

        const text = core.getInput('message');
        const embedUrl = core.getInput('embedUrl');
        const embedTitle = core.getInput('embedTitle');
        
        //const context = github.context;
        //const obstr = JSON.stringify(context, undefined, 2)


        //const hook = new webhook.Webhook(webhookUrl);
        
        const embeds = [];
        if (embedTitle) {
            const embed = {};
            if (text) {
                msg = msg.setText(text);
            }
            if (embedUrl) {
                msg = msg.setText
            }

            embed.title = embedTitle;
            embed.url = embedUrl;
            embeds = [embed];
        }

        await request.post(webhookUrl)
            .send({
                content: text,
                embeds: embeds
            });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();