const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const fs = require("fs")
const client = new Client({ disableEveryone: true})
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const ytdl = require("ytdl-core");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
var prefix = '$'
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});







client.on('message', message => {
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
