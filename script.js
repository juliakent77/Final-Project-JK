// How to get the div clicks to input tags within my array?
// How to add event listeners on my divs


// An array of my recipes:
// [{name:'Old Fashioned', image:'src="images/drank.jpg"', drinkType: 'Whiskey', flavor: 'sweet', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}]

// // Random Int function
// var getRandomInt = function(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// var generateComputerChoice = function() {
//   var randNum = getRandomInt(1, 3);
//   if(randNum === 1) {
//     computerChoice = 'rock';
//   } else if (randNum === 2) {
//     computerChoice = 'paper';
//   } else {
//     computerChoice = 'scissors';
//   }

//   checkWinner();
// }


$(".alc").click(function(event) {
    var elem = $(this);
    var drinkType = elem.attr('drink');
    console.log(drinkType);
});

$(".taste").click(function(event) {
    var elem = $(this);
    var flavor = elem.attr('flavor');
    console.log(flavor);
});