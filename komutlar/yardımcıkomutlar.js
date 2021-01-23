const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Cowboy',`
<a:yildizz:768859233382694982>**.sil** : Yazdığınız Sayı kadar mesaj siler
<a:yildizz:768859233382694982>**.ping** : Botun pingini gösterir
<a:yildizz:768859233382694982>**.oylama** : Yazdığınız mesajın oylamasını yapar 
<a:yildizz:768859233382694982>**.espri** : Espri Yaparsınız.
<a:yildizz:768859233382694982>**.golat** : Gol Atarsınız
<a:yildizz:768859233382694982>**.kartopu** : Etiketlediğiniz kişiye kar topu atarsınız.
<a:yildizz:768859233382694982>**.espri** : Espri Yaparsınız.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardmckomut'],
  permLevel: 0
};

exports.help = {
  name: "yardımcıkomutlar",
  category: "yardım",
  description: "Yardımcı Komutları Gösterir."
};