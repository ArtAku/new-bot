const TOKEN = '693092471:AAEO3JdTxgcvClWK6Cp-s5GqaEdSs94TLzE'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(TOKEN, {polling: true})

bot.onText(/^\/place_order/, function (msg, match) {
    var option = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [[{
                text: "My phone number",
                request_contact: true
            }], ["Cancel"]]
        }
    };
    bot.sendMessage(msg.chat.id, "How can we contact you?", option).then(() => {
        // handle user phone
    })

});