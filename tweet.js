/*tweet.js*/
require('dotenv').config();
const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});

const weekdays = [
    "Sunday", /*america wtf*/
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  const generate = function () {
    return `Wooo todays a ${weekdays[new Date().getDay()]}`;
  };
  
  function tweet(cb=function(){}){
     client.post("statuses/update", { status: generate() }, function(
    error,
    tweet,
    response
  ) {
    if (error){
        cb(false)
    }
    else{
      console.log("yay!");
    cb(true)   
    }
  });   
  }



  module.exports = tweet;