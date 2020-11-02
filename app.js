//arrays with strings for generator to select from
const genre = [
  'a Science Fiction',
  'a Fantasy',
  'a Modern Fantasy',
  'an Action Thriller',
  'a Murder Mystery',
  'a Coming of Age',
  'a Horror',
  'a Surreal',
  'a Romance'
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
  'an assassin who is very good at her job',
  'a deaf cat who can read'
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
  'crossing state lines',
  'cultivating the perfect playlist',
  'a dog that can talk',
  'cross-contamination'
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

  return `Write ${randGenre} story where ${randProtag} struggles with ${randConflict}.`
};

//event handler
const displayPrompt = () => {
  document.getElementById('prompt').innerHTML = generatePrompt();
};

//event listener for clicking button
document.getElementById('button').addEventListener('click', displayPrompt);
//event listener to allow spacebar to generate prompt
window.addEventListener('keydown', function(e) {
  if (e.keyCode == 32) {
    displayPrompt();
  };
});

console.log(generatePrompt());
