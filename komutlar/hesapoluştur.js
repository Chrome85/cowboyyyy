const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('wio.db')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
let hesapismi = args[0]
var bakiye = db.fetch(`para_${message.author.id}`) || '0'
if(db.has(`hesapismi_${message.author.id}`)) return message.channel.send("Zaten bir hesabın var.")
if(!args[0]) return message.channel.send("Doğru kullanım: .hesap-oluştur `hesap ismi`")
db.set(`hesapismi_${message.author.id}`, hesapismi)
db.add(`para_${message.author.id}`, 100)
message.channel.send(new Discord.MessageEmbed()
                    
.setTitle("Hesabınız Oluşturuldu")
.addField("Hesap Adı: ", hesapismi)
.addField("Güncel Bakiyeniz:", bakiye))
.setFooter("100tl başlangıç parası verilmiştir")
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hesap-oluştur'
};