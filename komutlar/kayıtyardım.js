const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField(' Cowboy',`
<a:maviyildiz:793539752858877952> Cowboy Kayıt Yardım Menüsü  <a:maviyildiz:793539752858877952>

<a:maviyildiz:793539752858877952> **.alınacak-rol** <a:maviyildiz:793539752858877952>
Kayıt edildikten sonra alınacak rolü belirler.

<a:maviyildiz:793539752858877952> **.kayıtçı-rol** <a:maviyildiz:793539752858877952>
Kayıt gmrevlisi rolünü ayarlarsınız

<a:maviyildiz:793539752858877952> **.kayıt-kanal** <a:maviyildiz:793539752858877952>
Kayıt edeceğiniz kanal

<a:maviyildiz:793539752858877952> **.erol / .krol ** <a:maviyildiz:793539752858877952>
Erkek veya kız rolünü ayarlarsınız.

<a:maviyildiz:793539752858877952> **.e / .k** <a:maviyildiz:793539752858877952>
Kayıt edersiniz
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
  name: 'kayıtyardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};