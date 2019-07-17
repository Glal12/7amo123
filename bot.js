const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help`)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});







lient.on('message', message => {
  if(message.content.startsWith(prefix + 'bc')) {
  let args = message.content.split(" ").slice(1).join(" ");
  if(!args) return message.channel.send(`**:rolling_eyes: please type the broadcast message**`)
  let filter = m => m.author.id == message.author.id
  let broadcastt = new Discord.RichEmbed()
  .setColor('#36393e')
  .addField(`**[1] broadcast for all members\n\n[2] broadcast for online members\n\n[0] to cansel**`,`** **`)
  message.channel.send(broadcastt).then(msg => {
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 90000,
    errors: ['time']
  })
  .then(collected => {
    if(collected.first().content === '1') {
      message.channel.bulkDelete(1)
  message.channel.send(`**Broadcast being sent to ${message.guild.members.size} members ...**`);
  msg.delete()
     return message.guild.members.forEach(m => {
  m.send(args.replace('[user]', m))
      })
  }
  if(collected.first().content === '2') {
    msg.delete()
    message.channel.bulkDelete(1)
    message.channel.send(`**Broadcast being sent to ${message.guild.members.filter(m=>m.presence.status == 'online').size} members ...**`);
  message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(args.replace('[user]', m))
  })
  message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
    m.send(args.replace('[user]', m))
  })
  return message.guild.members.filter(m => m.presence.status === 'idle').forEach(m => {
    m.send(args.replace('[user]', m))
  })
    }
  if(collected.first().content === '0') {
    message.channel.bulkDelete(1)
    msg.delete()
    return message.channel.send(`**Broadcast Has Been Canceled**`);
  }})})}
  });


















client.login(process.env.BOT_TOKEN);
