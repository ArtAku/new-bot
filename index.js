const TOKEN = '693092471:AAEO3JdTxgcvClWK6Cp-s5GqaEdSs94TLzE'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    var yes = "Yes";
    if (msg.text.indexOf(yes) === 0) {
        bot.sendMessage(msg.chat.id, "I will show you everything!");
    }

    var no = "No";
    if (msg.text.indexOf(no) === 0) {
        bot.sendMessage(msg.chat.id, "Then just leave!");
    } 
})

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Здравствуй! Интересна погода?', {
        "reply_markup": {
            "keyboard": [["Yes"], ["No"]]
        }
    })
})