const TOKEN = '693092471:AAEO3JdTxgcvClWK6Cp-s5GqaEdSs94TLzE'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('location', (msg) => {
    bot.sendMessage(msg.chat.id, "Это твои координаты: " + msg.location.latitude + " " + msg.location.longitude);
    var request_string = 'https://api.openweathermap.org/data/2.5/weather?lat=';
    reqest_string += msg.location.latitude + '&lon=' + msg.location.longitude + '&mode=html' + '&appid=92b1a5b3125eff26a674219cc3f78775';
    bot.sendMessage(msg.chat.id, " Здесь ты можешь посмотреть погоду: " + request_string);

    const request = require('request');

    request(reqest_string, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        bot.sendMessage(msg.chat.id, "I'm in");
    });
});

bot.onText(/\/start/, (msg) => {
    var option = {
        "reply_markup": {
            "keyboard": [{ 
                text: "Узнать погоду",
                request_location: true
            }]
        }
    }
    bot.sendMessage(msg.chat.id, 'Здравствуй! Хочешь узнать погоду?', option)
});