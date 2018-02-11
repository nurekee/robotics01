const TekegramBot = require('node-tlegram-api')
const TOKEN = "474187863:AAE0ObKhCeHGx_MNRZpxLv055L_mPN1cC4M\n"
const bot = new TekegramBot(TOKEN,{polling:true})
const KB = {
  menu:'Меню',
  zhoba:'Жоба жайында',
    oku:'Bilgen Robotics оқушыға не береді ?',
    artyk:'Bilgen Robotics-тың артықшылықтары:',
    maksat:'Bilgen Robotics-тың алға қойған мақсаттары:',
    prins:'Bilgen Robotics-тың негізгі принциптері',
    baga:'Bilgen Robotics курстарының бағасы:',
    sony:'Cұрақтар бойынша',
    back:'Кері қайту'
}
bot.onText(/\/start/,msg => {
  const text =  `Сәлем , ${msg.form.first_name},\n Bilgen Robotics жобасына қош келдің!!!`

    })

    bot.on('message',msg =>{
      switch (msg.text) {
          case KB.zhoba:
            sendPictureScreen(msg.chat.id)
            break
          case KB.oku:
            break
          case KB.artyk:
            break
          case KB.maksat:
            break
          case KB.prins:
            break
          case KB.baga:
            break
          case KB.sony:
            break
          case KB.back:
              bot.sendMessage(msg.chat.id,text,{

                  reply_markup:{
                      keyboard: [
                          [ KB.zhoba, KB.oku ,KB.artyk, KB.maksat, KB.prins,KB.baga,KB.sony]
                      ]
                  } break

      }
    })


})


function snedPictureScreen(chatId) {

  bot.sendMessage(chatId,`Жоба жайында`,
      {
        reply_markup:{
          keyboard:[
              [KB.zhoba,KB.oku,KB.artyk,KB.maksat,KB.prins,KB.baga,KB.sony],
              [KB.back]
          ]
        }
      })

    
}
function sendGreeting(chatId,sayHello = true) {

    bot.sendMessage(msg.chat.id,text,{

        reply_markup:{
            keyboard: [
                [ //KB.zhoba,KB.oku,KB.artyk,KB.maksat,KB.prins,KB.baga,KB.sony]
                    KB.menu]
            ]
        }


    }