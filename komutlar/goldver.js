const db = require('wio.db')
const Discord = require('discord.js')
const ms = require("ms");
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
  
  let owners = ['769241220110352416']
if(!owners.includes(message.author.id)) return message.channel.send(' `Bu Komutu Sadece Sahibim Kullanabilir`');
  let kullanıcı = args[0]
  if (!kullanıcı) return message.channel.send(' Kullanıcının İdsini Veya Etiketini Girmelisin')
  db.set(`gold_${kullanıcı}`, 'gold')
  let byembed1 = new Discord.MessageEmbed()
  .setTitle("Bilgilendirme")
    .setColor("RED")
    .setFooter("Gold Üye Sistemi")
    .setDescription(` ${kullanıcı} Adlı Kişi Gold Üye Oldu** \n Gold Üyeyi Veren Kişi ; ${owners}`)
  message.channel.send(byembed1)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['goldver',"goldekle"],
  permLevel: 0
};
exports.help = {
  name: 'goldver',
  description: 'goldver',
  usage: 'goldver'
};
