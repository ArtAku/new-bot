const TOKEN = '693092471:AAEO3JdTxgcvClWK6Cp-s5GqaEdSs94TLzE'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('location', (msg) => {
    bot.sendMessage(msg.chat.id, "That's your coordinates: " + msg.location.latitude + " " + msg.location.longitude);
    var request_string = 'https://api.openweathermap.org/data/2.5/weather?lat=';
    request_string += msg.location.latitude + '&lon=' + msg.location.longitude + '&appid=92b1a5b3125eff26a674219cc3f78775';
    bot.sendMessage(msg.chat.id, "Here you can check the weather: " + request_string);
});

bot.onText(/\/start/, (msg) => {
    var option = {
        "reply_markup": {
            "keyboard": [[{ 
                text: "I wanna know the weather!",
                request_location: true
            }]]
        }
    }
    bot.sendMessage(msg.chat.id, 'Hello', option)
});