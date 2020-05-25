const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === "희영아 사랑해") {
    msg.reply("웅! 나도 너 사랑해");
  }
  if (msg.content === "희영아") {
    msg.reply("웅! 나 불렀어?");
  }
  if (msg.content === "희영아 나야 쟤야?") {
    msg.reply("웅! 당연히 팤으를 사랑하지!");
  }
  if (msg.content === "희영아 팤으 좋아해?") {
    msg.reply("내가 세상에서 제일 좋아하는 사람이 팤으야!")
  }
  if (msg.content === "희영아 나랑 놀자") {
    msg.reply("팤으야 놀자!")
  }
  if (msg.content === "희영아 재밌어?") {
    msg.reply("재밌어!")
  }
  if (msg.content === "희영아 옷좀") {
    msg.reply("너가 직접")
  }
  if (msg.content === "희영아 오락실 가자") {
    msg.reply("그래! 가서 유비트 조지자...!")
  }
  if (msg.content === "희영아 가자") {
    msg.reply("그래! 가서 ...하자!") 
  }
  if (msg.content === "희영아 아마스빈 가서 마시자") {
    msg.reply("그래! 빨대는 하나만 쓰는거야..!")
  }
  if (msg.content === "희영아 같이 그림그리자") {
    msg.reply("어떤 그림 그릴까...?")
  }
  if (msg.content === "희영아 같이 그림그리자") {
    msg.reply("어떤 그림 그릴까...?")
  }
  
}
);

