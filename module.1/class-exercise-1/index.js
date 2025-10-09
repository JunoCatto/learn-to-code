// Imports sentiment library. (Had to install using npm install sentiment at the root)
const Sentiment = require("sentiment");
const sentiment = new Sentiment();

// Array of positive comments about cats, for use in sentiment analysis
const positiveComments = [
  "Cats are awesome!",
  "I love my cat.",
  "Cats are the best pets.",
];

for (const comment of positiveComments) {
  const result = sentiment.analyze(comment);
  console.log(result);
}
// const result = sentiment.analyze('Cats are stupid.');
// console.log(result); // Score: -2, Comparative: -0.666
