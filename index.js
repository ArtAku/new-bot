const TOKEN = '693092471:AAEO3JdTxgcvClWK6Cp-s5GqaEdSs94TLzE'
const TelegramBot = require('node-telegram-bot-api')
const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    var yes = "Yes";
    if (msg.text.length == 0) {
        bot.sendMessage(msg.chat.id, "I will show you everything!");
    }

    var no = "No";
    if (msg.text.indexOf(no) === 0) {
        bot.sendMessage(msg.chat.id, "Then just leave!");
    } 
});

bot.onText(/getLocation/, (msg) => {
    const opts = {
      reply_markup: JSON.stringify({
        keyboard: [
          [{text: 'Location', request_location: true}],
          [{text: 'Contact', request_contact: true}],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      }),
    };
    bot.sendMessage(msg.chat.id, 'Contact and Location request', opts);
});

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