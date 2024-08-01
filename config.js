const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "null" ;  
global.video= "null" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94717267602";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "null", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94717267602";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94717267602";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94717267602,94717267602";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_51_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDU5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkzLFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI2LFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhzS1B2SHd0QjV1RTh1UVFjd1laUm0xM1dhckxJTVlxaUtkNjdqbWlmL3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkVDNU1SQnBKU2hPRlJDOUZSenhjblFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTkxOGRjZDEtZDljYS00ODVlLTk1MTktYzZmNDFmNmRjYTkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgMzksXG4gICAgICAxNDUsXG4gICAgICAxNTQsXG4gICAgICAxOTksXG4gICAgICA1MCxcbiAgICAgIDE5MyxcbiAgICAgIDEyMyxcbiAgICAgIDM2LFxuICAgICAgMTAzLFxuICAgICAgMTg4LFxuICAgICAgMjQ4LFxuICAgICAgOTksXG4gICAgICAyNDUsXG4gICAgICA2NCxcbiAgICAgIDE5MSxcbiAgICAgIDUxLFxuICAgICAgOTQsXG4gICAgICAxNTksXG4gICAgICAzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNSxcbiAgICAgIDUxLFxuICAgICAgMTg4LFxuICAgICAgMTU1LFxuICAgICAgMjUzLFxuICAgICAgMjM5LFxuICAgICAgMTU2LFxuICAgICAgMTU4LFxuICAgICAgMTA1LFxuICAgICAgMjM3LFxuICAgICAgMjMsXG4gICAgICA2OCxcbiAgICAgIDMsXG4gICAgICAyMjEsXG4gICAgICAyMDQsXG4gICAgICAxNDksXG4gICAgICAyMTIsXG4gICAgICA3OSxcbiAgICAgIDkwLFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktaUE42SDlXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDcxNzI2NzYwMjo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTk2OTEwNTY1MzkyMjo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKQ3RyNlFGRUs2b3JMVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVZSmlZbGFTY1JkZldvcEdrcWtXRlY4ZGlYMGVKVnVpbjNIWFJZUW85am89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMEpxTlE3WTdTYWJ5eVZmazBWdS9vaU1YNlFYRDZSa25pZ0ZMMWhJNmpnUE5JTmg1aHJqdXFjai80em5ENHNPbUZWNGlmYk9Ta3JMOUdYZ1Z1SGVoRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0dBMG5CQXBlWjhDcUkyK1lVdHc5aHZLbVlRSG5qM3FmQmdpeGhSMFV1cE9jbkNrNCtVcHlrb0kyOUVWUXFKRWNGbGVpcVBIWDBiRTU0emF2cjVyZ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3MTcyNjc2MDI6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNDg3ODU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHZ6XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdnouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhVHFkYUhoTldNUXNweDd6TnN1bHFqeTd4UXFoUFF5OU1Ka08yNzJPRUNjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MTg0NTA1NzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KAVI•MD",
  ownername:process.env.OWNER_NAME|| "KAVIYAH",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
