// How to get the div clicks to input tags within my array?
// How to add event listeners on my divs


// An array of my recipes:
// [
// {name:'Old Fashioned', image:'src="images/drank.jpg"', drinkType: 'whiskey', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'} 
// {name:'Old Fashioned', image:'src="images/drank.jpg"', drinkType: 'whiskey', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Old Fashioned', image:'src="images/drank.jpg"', drinkType: 'whiskey', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Old Fashioned', image:'src="images/drank.jpg"', drinkType: 'whiskey', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Old Fashioned', image:'src="images/drank.jpg"', drinkType: 'whiskey', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Old Fashioned', image:'src="images/drank.jpg"', drinkType: 'whiskey', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Pear Martini', image:'src="images/drank.jpg"', drinkType: 'vodka', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="images/drank.jpg"', drinkType: 'vodka', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="images/drank.jpg"', drinkType: 'vodka', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="images/drank.jpg"', drinkType: 'vodka', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="images/drank.jpg"', drinkType: 'vodka', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Pear Martini', image:'src="images/drank.jpg"', drinkType: 'vodka', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Dark and Stormy', image:'src="images/drank.jpg"', drinkType: 'rum', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="images/drank.jpg"', drinkType: 'rum', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="images/drank.jpg"', drinkType: 'rum', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="images/drank.jpg"', drinkType: 'rum', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="images/drank.jpg"', drinkType: 'rum', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Dark and Stormy', image:'src="images/drank.jpg"', drinkType: 'rum', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Paloma', image:'src="images/drank.jpg"', drinkType: 'tequila', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="images/drank.jpg"', drinkType: 'tequila', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="images/drank.jpg"', drinkType: 'tequila', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="images/drank.jpg"', drinkType: 'tequila', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="images/drank.jpg"', drinkType: 'tequila', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Paloma', image:'src="images/drank.jpg"', drinkType: 'tequila', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Peach Bellini', image:'src="images/drank.jpg"', drinkType: 'champagne', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="images/drank.jpg"', drinkType: 'champagne', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="images/drank.jpg"', drinkType: 'champagne', flavor: 'botanical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="images/drank.jpg"', drinkType: 'champagne', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="images/drank.jpg"', drinkType: 'champagne', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Peach Bellini', image:'src="images/drank.jpg"', drinkType: 'champagne', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// {name:'Gin Fizz', image:'src="images/drank.jpg"', drinkType: 'gin', flavor: 'sour', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="images/drank.jpg"', drinkType: 'gin', flavor: 'fruity', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="images/drank.jpg"', drinkType: 'gin', flavor: 'botnaical', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="images/drank.jpg"', drinkType: 'gin', flavor: 'smoky', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="images/drank.jpg"', drinkType: 'gin', flavor: 'spicy', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}
// {name:'Gin Fizz', image:'src="images/drank.jpg"', drinkType: 'gin', flavor: 'frosty', strength:'xxx', ingredients: 'list items goes here', recipe: 'Recipe goes heres', music: 'url=""'}

// ]

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
    
    localStorage.setItem('drinkType', drinkType);
    window.location = 'flavor.html'
});

$(".taste").click(function(event) {
    var elem = $(this);
    var flavor = elem.attr('flavor');
    console.log(flavor);
});