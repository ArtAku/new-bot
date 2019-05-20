const TOKEN = '693092471:AAEO3JdTxgcvClWK6Cp-s5GqaEdSs94TLzE'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(TOKEN, {polling: true})
var yes = false


bot.on('message', msg => {
    if (yes == true) {
        bot.sendMessage(msg.chat.id, "I will show you everything!");
    }
    else  if (msg.text.indexOf(no) === 0){
        bot.sendMessage(msg.chat.id, "Then just leave!");
    }
})

bot.onText(/\/start/, (msg) => {
    var option = {
        "reply_markup": {
            "keyboard": [[{ 
                text: "Yes",
                request_location: true
            }, yes = true], ["No", yes = false]]
        }
    }
    bot.sendMessage(msg.chat.id, 'Здравствуй! Интересна погода?', option)
})