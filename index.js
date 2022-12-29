const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
// For node-fetch, please use v2 for CommonJS support.
const fetch = require('node-fetch');

// Adding a ratelimit in case you need it.
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100 // Max requests to our system (currently 100 requests per 5 minutes)
});
app.use(limiter);

// Redirect our users to the main endpoint instead of "/"
// It's for you to add more things on other endpoints.
// If you don't need this redirection, delete these 3 lines.
app.get("/", (req, res) => {
  res.redirect("/gimme/random");
});

/*
  // At line 31 is subreddits used to roll random memes.
  // Can be changed or used as language template, it's very easy to do so:
  const <lang>_keys = [...];
  // And at line 46:
  var random = <lang>_keys[Math.floor(Math.random() * <lang>_keys.length)];
  // Just add more app.get to match your language and you'll have good stuff.
  // In this repo I'll only add an app.get for custom subreddit requests.
*/
const keys = [
  "me_irl",
  "dankmeme",
  "AdviceAnimals",
  "dankmemes",
  "MemeEconomy",
  "ComedyCemetery",
  "memes",
  "terriblefacebookmemes",
  "funny",
  "teenagers'"
];

app.get("/gimme/:subr", async (req, res) => {
  var random = keys[Math.floor(Math.random() * keys.length)];
  var subr = req.params.subr == "random" ? random : req.params.subr;
  const content = await fetch(`https://www.reddit.com/r/${subr}/random/.json`).then(res => res.json());
  if (!content[0]) return res.status(400).json({
    err: "Not found"
  })
  let permalink = content[0].data.children[0].data.permalink;
  let url = `https://reddit.com${permalink}`;
  let upVotes = content[0].data.children[0].data.ups;
  let downVotes = content[0].data.children[0].data.downs;
  let image = content[0].data.children[0].data.url;
  let nsfw = content[0].data.children[0].data.over_18;
  let title = content[0].data.children[0].data.title;
  let numComments = content[0].data.children[0].data.num_comments;
  let author = content[0].data.children[0].data.author;
  res.status(200).json({
    title: title,
    author: author,
    ups: upVotes,
    downs: downVotes,
    comments: numComments,
    nsfw: nsfw,
    content: {
      url: url,
      image: image,
    },
    from: subr
  });
});

// Change the port if you can't use 8080 or if you prefer another.
// I don't want to bundle too many packages so I won't use process.env.port.
app.listen(8080, () => {
  console.log(`Ready on port 8080.`);
});