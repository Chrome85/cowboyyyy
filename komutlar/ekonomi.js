const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField(' Cowboy',`
<a:maviyildiz:793539752858877952> Cowboy Ekonomi Yardım Menüsü  <a:maviyildiz:793539752858877952>

<a:maviyildiz:793539752858877952> **.çalış** <a:maviyildiz:793539752858877952>
Çalışırsınız

<a:maviyildiz:793539752858877952> **.param** <a:maviyildiz:793539752858877952>
Paranızı gösterir

<a:maviyildiz:793539752858877952> **.günlük** <a:maviyildiz:793539752858877952>
Günlük ödül

<a:maviyildiz:793539752858877952> **.hesap-oluştur** <a:maviyildiz:793539752858877952>
Hesap oluşturursunuz

<a:maviyildiz:793539752858877952> **.transfer** <a:maviyildiz:793539752858877952>
Paranızı transfer edersiniz
`)
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
  name: 'ekonomi',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};