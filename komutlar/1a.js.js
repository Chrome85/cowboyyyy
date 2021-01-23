const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
//dcs
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!, Görünen O ki Bu Sende Yok :(`);

const tag = args[0]
let rol = message.mentions.roles.first()
const memberss = message.guild.members.cache.filter(member => member.user.username.includes(tag));

if(!tag) return message.reply(`:warning: Bir Tag Girmelisiniz Örnek Kullanım; \n \`${ayarlar.prefix}tag-yetki tag @rol\``)
if(!rol) return message.reply(`:warning: Bir Rol Girmelisiniz Örnek kullanım; \n \`${ayarlar.prefix}tag-yetki tag @rol\``)


const embed = new Discord.MessageEmbed()
.addField(`Kullanıcı Adında ${tag} Tagı Olan Kullanıcları Yetkilerini Verdim Hojam`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Kimsenin kullanıcı Adında \`${tag}\` Tagı Bulunmuyor.`)
.setColor("RANDOM")
message.channel.send({embed})
message.guild.members.forEach(u => {
if(u.user.username.includes(tag)) {
u.roles.add(rol.id)
}
});
}
//Erdem!#0012
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['tyv'],
permLevel: 0
}

//DCS
exports.help = {
    name: 'tag-alana-yetki-ver',
    description: '',
    usage: ''
  };