const db = require('wio.db')
const Discord = require('discord.js')
const ms = require("ms");
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  
  let owners = ['İd Nz']
if(!owners.includes(message.author.id)) return message.channel.send(' `Bu Komutu Sadece Sahibim Kullanabilir`');

  let kullanıcı = args[0]

  if (!kullanıcı) return message.channel.send(' Kullanıcının İdsini Veya Etiketini Girmelisin')
  db.delete(`gold_${kullanıcı}`, 'gold')
  let byembed1 = new Discord.MessageEmbed()
  .setTitle("Bilgilendirme")
    .setColor("RED")
    .setFooter("Gold Üye Sistemi")
    .setDescription(` ${kullanıcı} Adlı Kişi Gold Üyesi Alındı** \n Gold Üyeyi Alan Kişi ; ${owners}`)
  message.channel.send(byembed1)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldal',"goldsil"],
  permLevel: 0
};
exports.help = {
  name: 'gold-sil',
  description: 'goldver',
  usage: 'goldver'
};
