const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('wio.db')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
var bakiye = db.fetch(`para_${message.author.id}`) || '0'
var hesapd = db.fetch(`hesapismi_${message.author.id}`)
        if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `.hesap-oluştur <isim>`")
message.channel.send(new Discord.MessageEmbed()
                    .setTitle("İşte Paran")
                    .addField("Bakiyen:", bakiye)
                    .setFooter("Ekonomi "))
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cüzdan','cüzdanım','bakiye'],
  permLevel: 0
};

exports.help = {
  name: 'param', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};