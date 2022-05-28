<p align="center">
<img src="https://i.pinimg.com/736x/ff/87/b7/ff87b70e9c9dea4d9ca32c9538a81c3b.jpg" alt="nz" width="350"/>
</p>

## Killua-Zoldyck

> Example case from Zenz Rest APIs for WhatsApp Bot

> User must have zenz apikey to use this repo, register [here](https://zenzapis.xyz/) to get apikey

> This Script WhatsApp Bot Using Library Baileys & Script is free for everyone, not for Sale!

</br>

<a href="https://github.com/zhwzein"><img title="Author" src="https://img.shields.io/badge/Author-Zhwzein-blue.svg?color=54aeff&style=for-the-badge&logo=github" /></a>  
<a href="https://github.com/zhwzein/Killua-Zoldyck"><img title="Stars" src="https://img.shields.io/github/stars/zhwzein/Killua-Zoldyck?color=54aeff&style=flat-square" /></a>
<a href="https://github.com/zhwzein/Killua-Zoldyck/network/members"><img title="Forks" src="https://img.shields.io/github/forks/zhwzein/Killua-Zoldyck?color=54aeff&style=flat-square" /></a>
<a href="https://github.com/zhwzein/Killua-Zoldyck/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/zhwzein/Killua-Zoldyck?label=watchers&color=54aeff&style=flat-square" /></a> <br>

---

<!-- Installation -->
<b><details><summary>Windows Installation</summary></b>  
<b>Requirements:</b>
* Download & Install Git [`Click here`](https://git-scm.com/downloads)
* Download & Install NodeJS [`Click here`](https://nodejs.org/en/download)
* Download & Install FFmpeg [`Click here`](https://ffmpeg.org/download.html)
 
```bash
Add FFmpeg to PATH environment variable
```
	
```bash
> git clone https://github.com/zhwzein/Killua-Zoldyck
> cd Killua-Zoldyck
> npm install
```
</details>

<b><details><summary>Termux Installation</summary></b>

<p dir="auto">Use Termux application from F-Droid, here is the link: <a href="https://f-droid.org/en/packages/com.termux/" rel="nofollow">https://f-droid.org/en/packages/com.termux/</a>. Google Play variant is deprecated, doesn't receive updates and contains issues as well as outdated repository URLs.</p>
	
* Download & Install Termux [`Click here`](https://f-droid.org/repo/com.termux_118.apk)
	
```bash
> apt update && apt upgrade
> apt install git -y
> apt install nodejs -y
> apt install ffmpeg -y
> git clone https://github.com/zhwzein/Killua-Zoldyck
> cd Killua-Zoldyck
> pkg install yarn
> yarn add @adiwajshing/baileys
> yarn
```
</details>

<!-- Edit -->
<b><details><summary>Edit config.json</summary></b>
```bash
"APIs": {
    "zenz": "https://zenzapis.xyz",
    "apikey": "YOURAPIKEY"
 },
"owner": [
    "62812xxx"
 ],
```
</details>

<!-- Start -->
<b><details><summary>Start BOT</summary></b>
```bash
1. For Multi Device
> npm run start

2. For Legacy
> npm run legacy

SCAN THE QR USING YOUR WHATSAPP!
```

</details>

---

<!-- Installation -->
<b><details><summary>Heroku Deployment</summary></b>  

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
	
<b>Requirements:</b>
* NodeJS buildpack
* FFmpeg buildpack https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
</details>

<!-- Attention -->
## IP ACCESS

<b><details><summary>Attention !</summary></b>  
	
because many people spread the apiKey. then zenzapis applies a system IP, which is a certain ip that can only make requests.
	
<b>How To Get IP access ?</b>

1. First you have to log in to [zenzapis](https://zenzapis.xyz)
1. Then Go to the profile settings page  
	
  <img src="https://i.ibb.co/ysjG2w8/Screenshot-53.png" alt="nz" width="350"/><br>
	
See there are 2 IP options,  The first IP is your default Public IP Which is automatically replaced when you last signed in with the same ip or different.

Q: Then what is the second IP option for ?   
A: The second option is only optional If you deploy BOT to Heroku or another server you have to use this option  
	
<b>How To Get IP From Heroku ?</b>
	
1. The first way is to open [http://api.ipify.org/](http://api.ipify.org/) You will get Public IP there
2. The second way is to do the BOT command
	
	<img src="https://i.ibb.co/9hCdk4T/photo6091154136113459853.jpg" alt="nz" width="350"/><br>
	
3. Then Edit and update To Be Like This
	
	<img src="https://i.ibb.co/9qvP39p/Screenshot-52.png" alt="nz" width="350"/><br>
	
4. And congratulations you have successfully obtained IP access, and the results:
	
| Before |  After |
| :------: |  :----------: |
|   <img src="https://i.ibb.co/vZb2xLN/photo6091154136113459854.jpg" alt="nz" width="350"/><br>     |       <img src="https://i.ibb.co/gJHKXNb/photo6091154136113459855.jpg" alt="nz" width="350"/><br>      |
	
</details>

---
<details><summary>Available Features</summary><br>
	
| Features |  Availability |
| :------: |  :----------: |
|   Anime Web     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/animeweb)      |
|   Convert     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/convert)      |
|   Creator     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/creator)      |
|   Database     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/database)      |
|   Downloader     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/downloader)      |
|   Entertainment  |     ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/entertainment)      |
|   Group     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/group)      |
|   Information   |  ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/information)      |
|   Islami     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/islami)      |
|   Main     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/main)      |
|   More Nsfw     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/morensfw)      |
|   Nekos Life     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/nekoslife)      |
|   News   |  ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/news)      |
|   Owner     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/owner)      |
|   Photo Editor  |   ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/photoeditor)      |
|   Primbon   |  ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/primbon)      |
|   Random Image     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/randomimage)      |
|   Random Text     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/randomtext)      |
|   Search     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/search)      |
|   Stalker     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/stalker)      |
|   Textmaker     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/textmaker)      |
|   Users     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/users)      |
|   Webzone     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/webzone)      |
	
	Pull requests are welcome. Your contribution is helping me too
	
</details>


## Thanks To
* [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)
* [`Mhankbarbar`](https://github.com/MhankBarBar)
* [`DikaArdnt`](https://github.com/DikaArdnt)
* [`Faizbastomi`](https://github.com/FaizBastomi)


License: [MIT](https://en.wikipedia.org/wiki/MIT_License)
