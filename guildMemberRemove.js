module.exports = member => {
  let guild = member.guild;
  member.send('Niye gittin?');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
