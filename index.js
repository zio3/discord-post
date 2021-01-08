const core = require('@actions/core');
const github = require('@actions/github');

const request = require('snekfetch');

async function run() {
    try {
        //const webhookUrl = core.getInput('webhookUrl').replace("/github", "");
        //if (!webhookUrl) {
        //    core.setFailed("The webhookUrl was not provided. For security reasons the secret URL must be provided "
        //                   + "in the action yaml using a context expression and can not be read as a default.");
        //    return;
        //}

        //const text = core.getInput('message');
        //const embedUrl = core.getInput('embedUrl');
        //const embedTitle = core.getInput('embedTitle');
        
        //const context = github.context;
        //const obstr = JSON.stringify(context, undefined, 2)


        //const hook = new webhook.Webhook(webhookUrl);
        
        //var content = {};
        //if (text && !embedUrl && !embedTitle) {
        //    //hook.send(text);
        //    content.content = text;
        //}
        //else {
        //    const msg = new webhook.MessageBuilder();
        //    if (text) {
        //        msg = msg.setText(text);
        //    }
        //    if (embedUrl) {
        //        msg = msg.setText
        //    }
        //    //.setText("This is my webhook!");

        //    hook.send(msg);
        //}



                                //.setName("Username")
                                //.setColor("#aabbcc")
        await request.post('https://discord.com/api/webhooks/777735843531456542/dZJWSP-iI2jWfpnYelt6NWx2wmtCynL0D1S6PZD3bwUgSJzYLOBxeKQf3uSp88QH062s')
            .send({
                content: null,
                embeds: [
                    {
                        title: null,
                        url: null
                    }
                ]
            });
                           

    } catch (error) {
        core.setFailed(error.message);
    }
}

run();