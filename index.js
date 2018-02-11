const TekegramBot = require('node-tlegram-api')
const TOKEN = "474187863:AAE0ObKhCeHGx_MNRZpxLv055L_mPN1cC4M\n"
const bot = new TekegramBot(TOKEN,{polling:true})

bot.on('message',msg.chat.id,`Сәлем ,${msg.form.first_name} \n, Bilgen Robotics жобасына қош келдің!!! )