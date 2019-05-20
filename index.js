const TOKEN = '693092471:AAEO3JdTxgcvClWK6Cp-s5GqaEdSs94TLzE'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('location', (msg) => {
    bot.sendMessage(msg.chat.id, "I will show you everything!" + msg.location.latitude + " " + msg.location.longitude);
    var reqest_string = 'https://api.openweathermap.org/data/2.5/weather?lat=';
    reqest_string += msg.location.latitude + '&lon=' + msg.location.longitude + '&appid=92b1a5b3125eff26a674219cc3f78775';
    bot.sendMessage(msg.chat.id, reqest_string);

    const request = require('request');

    request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
        bot.sendMessage(msg.chat.id, body.url);
        if (err) { return console.log(err); }
        console.log(body.url);
        console.log(body.explanation);
    });
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