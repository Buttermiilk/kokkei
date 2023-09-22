<h1 align="center"><img src='https://www.redditinc.com/assets/images/site/reddit-logo.png' height='128'><br>kokkei</h1>
<p align="center">Extremely simple Reddit meme fetcher API implementation.</p>
<p align="center">
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/-JavaScript-black.svg?style=for-the-badge&logo=javascript&colorB=black"/>
  </a>
</p>

## About this project

Okay, free tier Heroku projects died. Legends like meme-api and akaneko all died of a sudden while I was looking back at Neko's code and opening a few links and thought it's just a normal downtime.

Until I read that notice in my Gmail inbox...

Fair, I need a meme API real quick to smash it into my bot's code (akaneko has its own new domain now), else things would collapse. And here it is, this repository has been created for that purpose.

The code is just so short and easy to make, so I made it beautiful and easy to read. Else if I wanted to make this hard to read I'd just use an obfuscator.

---
###### 🕒 9/22/2023 
### 📢 Prehosted!
If you feel unbothered and you just want something that works, https://meme.iyowa.stabbed.me, I'm hosting that. Use it if you wish, else continue.

---
## Instructions on hosting
I was thinking of using some sort of Reddit API and something something but the idea was silly. No keys is required, however you'll need:
- A hosting place. It's easy to find a free one, this project is small enough.
- `Node.js` and `npm` or `yarn` on that hosting place. It's either already in there or you'll have to set it up.
- A brain to process these instructions. Very important.

1/ If you have [git Command Line Interface](https://git-scm.com), clone this repo:
```sh
git clone https://github.com/harubarii/kokkei.git
```
If you don't, simply [download the zip file](https://github.com/harubarii/kokkei/archive/refs/heads/main.zip) and extract it yourself.

2/ `cd` into the directory
```sh
cd kokkei-main
```

3/ Install all required packages. I keep packages at a minimal rate so do not worry.
```sh
npm install
```
or, if you have `yarn` instead:
```sh
yarn install
```

4/ Make all necessary changes. Instructions are in `index.js`.

5/ Fire up the project:
```sh
node index.js
```
The API is available to use on your `localhost:<port>`, or, on the hosting place, the Public IP Address/Domain assigned to it. Main endpoint is `/gimme/random`, other information about this is also in the `index.js` file so make sure to read it throughoutly.

---
## Contributing

Although being a fairly advanced CommonJS developer, this code has consequences that I cannot look into. Any contributions you make are **greatly appreciated**, even tiny mistake fixes are welcomed.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star, well, if it did help you.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AVeryGoodFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AVeryGoodFeature`)
5. Open a Pull Request

---
Licensed under the [MIT License](https://github.com/harubarii/kokkei/blob/main/LICENSE) © [harubarii, org.](https://github.com/harubarii)
