const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Yardım',`
<a:yildizz:768859233382694982>**.avatar** : Avatar Komutu .`)
.setImage("https://media.discordapp.net/attachments/769281758977458176/783299061012234260/standard_21.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'gold',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};