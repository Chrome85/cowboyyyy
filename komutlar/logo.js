const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField(' Cowboy',`
<a:maviyildiz:793539752858877952> Cowboy Logo Yardım Menüsü  <a:maviyildiz:793539752858877952>

<a:maviyildiz:793539752858877952> **.yeşil** <a:maviyildiz:793539752858877952>
Yeşil Logo

<a:maviyildiz:793539752858877952> **.roket** <a:maviyildiz:793539752858877952>
Roket Logo

<a:maviyildiz:793539752858877952> **.arrow** <a:maviyildiz:793539752858877952>
Arrow Logo

<a:maviyildiz:793539752858877952> **.coollogo** <a:maviyildiz:793539752858877952>
Cool logo

<a:maviyildiz:793539752858877952> **.comiclogo** <a:maviyildiz:793539752858877952>
Comic Logo

<a:maviyildiz:793539752858877952> **.dclogo** <a:maviyildiz:793539752858877952>
Discord Logo

<a:maviyildiz:793539752858877952> **.bubble** <a:maviyildiz:793539752858877952>
Bubble Logo
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
  name: 'logo',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};