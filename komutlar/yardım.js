const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Yardım Komutları')
.setTimestamp()
.addField('<a:maviyildiz:793539752858877952> .logo', 'Logo Komutları')
.addField('<a:maviyildiz:793539752858877952> .moderasyon', 'Moderasyon Komutları')
.addField('<a:maviyildiz:793539752858877952> .eğlence', 'Eğlence Komutları')
.addField('<a:maviyildiz:793539752858877952> .aboneyardım', 'Abone Rol Komutları')
.addField('<a:maviyildiz:793539752858877952> .kayıtyardım', ' Kayıt Komutları')
.addField('<a:maviyildiz:793539752858877952> .ekonomi', 'Ekonomi Komutları')
.addField('<a:maviyildiz:793539752858877952> .botlistyardım', 'Botlist Komutları')

.setFooter('Cowboy', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};