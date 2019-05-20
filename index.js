const TOKEN = '693092471:AAEO3JdTxgcvClWK6Cp-s5GqaEdSs94TLzE'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(TOKEN, {polling: true})
var loc = false;

bot.on('location', (msg) => {
    bot.sendMessage(msg.chat.id, "I will show you everything!");
    console.log(msg.location.latitude);
    console.log(msg.location.longitude);
});

bot.onText(/\/start/, (msg) => {
    var option = {
        "reply_markup": {
            "keyboard": [[{ 
                text: "Yes",
                request_location: true
            }], ["No"]]
        }
    }
    bot.sendMessage(msg.chat.id, 'Здравствуй! Интересна погода?', option)
});