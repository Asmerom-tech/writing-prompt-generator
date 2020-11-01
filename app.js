//arrays with strings, may move to a db to scale up
//but for project purposes this will do
const genre = [
  'Science Fiction',
  'Fantasy',
  'Modern Fantasy',
  'Action Thriller',
  'Murder Mystery',
  'Coming of Age',
  'Horror',
  'Surreal',
  'Romance'
];
const protag = [
  'a down-on-her-luck single mother of two',
  'a teen heartthrob',
  'a lesbian werewolf',
  'a sentient pile of spaghetti',
  'a man allergic to shellfish',
  'a very tall woman who hates the color red',
  'a gender-ambiguous tag team duo',
  'a frog',
  'a vegan-turned-vampire',
  'a barista from Manhattan',
  'a girl with a map',
  'an assassin who is very good at her job'
];
const conflict = [
  'an incompetent boss',
  'a man who is crying',
  'several moons',
  'a bounty hunter who is very good at his job',
  'choosing what to have for dinner',
  'a teenager who thinks they can save the world',
  'the epic highs and lows of high school football',
  'someone quirky',
  'vampire politics',
  'an incredibly attractive werewolf',
  'crossing state lines'
];

//random selection
const selectStr = (arr) => {
  let strIndex = Math.floor(Math.random() * arr.length);
  let selectedStr = arr[strIndex];

  return selectedStr;
};

//generate writing prompt
const generatePrompt = () => {
  let randGenre = selectStr(genre);
  let randProtag = selectStr(protag);
  let randConflict = selectStr(conflict);

  return `Write a(n) ${randGenre} story where ${randProtag} struggles with ${randConflict}.`
};

console.log(generatePrompt());
