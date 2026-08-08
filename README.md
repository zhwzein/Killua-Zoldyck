<p align="center">
<img src="https://i.pinimg.com/736x/93/d1/8e/93d18e42fbd353c4964662f03b0f5123.jpg" alt="nz" width="350"/>
</p>

## ،ツ𖤍ْ ᴝȷᓄ᎗ɹ̈ᓄ⅃Ȋ බᴝȊ᎗ɹ̤ᓆ⅃Ȋ メ̷ِ۪⁦👑⃕ 

### 🚀 Pembaruan Terbaru (Latest Updates)
* **Baileys v7 Upgrade**: Pembaruan library ke `@whiskeysockets/baileys@7.0.0-rc13` untuk kestabilan protokol WhatsApp terbaru.
* **Konfigurasi .env**: Migrasi seluruh konfigurasi dari `config.json` ke `.env` untuk keamanan data.
* **Dua Metode Login**: Mendukung login dengan **QR Code** atau **Pairing Code** (menggunakan nomor HP).
* **Render QR Manual**: Penanganan render QR otomatis secara mandiri menggunakan `qrcode-terminal` untuk kompatibilitas Baileys v7.
* **Bug Fixes**: Patch pemetaan subplatform desktop untuk mengatasi kendala stuck `connecting` dan pengalihan CDN media download.

> [!NOTE]
> Beberapa endpoint API di dalam folder commands belum diperbarui sepenuhnya ke API Andaraz yang baru (SOON yaa wkwk).

> Example case from Andaraz APIs for WhatsApp Bot

> User must have andaraz apikey to use this repo, register [here](https://api.andaraz.com/) to get apikey

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
> yarn install
```
</details>

<!-- Edit -->
<b><details><summary>Edit .env</summary></b>
```bash
# Metode login: true = Pairing Code, false = QR Code
PAIRING_CODE=false
PHONE_NUMBER=

# APIs
API_ZENZ=https://api.andaraz.com
API_KEY=YOURAPIKEY

# Options
AUTO_READ=true
SELF_MODE=false
LIMIT_COUNT=20
LIMIT_GAME=20

# Exif Sticker
EXIF_PACKNAME=Killua Zoldyck
EXIF_AUTHOR=https://api.andaraz.com

# Owner
OWNER=62812XXX
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
|   Stalker     |       ✅[here](https://github.com/zhwzeinKillua-Zoldyck//tree/main/commands/stalker)      |
|   Textmaker     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/textmaker)      |
|   Togel     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/togel)      |
|   Users     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/users)      |
|   Webzone     |       ✅[here](https://github.com/zhwzein/Killua-Zoldyck/tree/main/commands/webzone)      |
	
	Pull requests are welcome. Your contribution is helping me too
	
Group Support [Here](https://chat.whatsapp.com/G1e0U2lOTVAGKNjyFHjDGP)
	
</details>


## Thanks To
* [`@whiskeysockets/baileys`](https://github.com/WhiskeySockets/Baileys)
* [`Mhankbarbar`](https://github.com/MhankBarBar)
* [`DikaArdnt`](https://github.com/DikaArdnt)
* [`Faizbastomi`](https://github.com/FaizBastomi)
* [`FatihArridho`](https://github.com/FatihArridho)

License: [MIT](https://en.wikipedia.org/wiki/MIT_License)
