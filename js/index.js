console.log("I'm ready");

// Iteration 1: Names and Input

const hacker1 = "Lauren";
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Laurent"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems like the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

//First exercice
let newDriverName =''
const text = " ";
for (let i=0; i< (hacker1.length); i++){
    const letter = hacker1[i] + text
    newDriverName += letter  
}
newDriverName = newDriverName.toUpperCase()
console.log(newDriverName)


//Second exercice
let newNavigatorName =''
for (let i=1; i <= (hacker2.length); i++){
    const letter = hacker2[hacker2.length - i ]
    newNavigatorName += letter  
}
console.log(newNavigatorName)


//Third exercice

let shorterName = Math.min(hacker1.length, hacker2.length)
let found = false;
//console.log (shorterName);
for (let i=0; i < shorterName ; i++){
    if (hacker1[i] < hacker2[i]){
        console.log("The driver's name goes first")
        let found = true;
        break;
    } else if (hacker1[i] > hacker2[i]){
        console.log ("Yo, the navigator goes first definitely.")
        let found = true;
        break;
    } 
}
if (found === false) {
    if (hacker1.length === hacker2.length){
        console.log ("What?! You both have the same name?")
    }
    else if (hacker1.length < hacker2.length) {
        console.log("The driver's name goes first")
    }
    else if (hacker1.length > hacker2.length){
        console.log("The navigator's name goes first")
    }
}


//Bonus1
const newString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt sagittis leo eget facilisis. Donec eget leo tortor. Vivamus quis elementum ante, vel vulputate augue. Duis bibendum sem quis massa aliquam fermentum. Sed feugiat luctus vestibulum. Vivamus sed sapien sodales, dignissim purus non, efficitur odio. Nunc vel rutrum lacus. Nam viverra ipsum sed nulla elementum, eu porta mi elementum. Nam tempus a odio id mollis. Pellentesque tortor risus, blandit at tincidunt a, feugiat non quam. Integer eu quam imperdiet, maximus metus vitae, sodales enim. Fusce a mauris mattis, egestas tortor ut, semper nisl. Ut eros ipsum, bibendum eu condimentum pharetra, bibendum vel dui. Etiam porttitor risus quis venenatis rhoncus. Praesent vitae laoreet magna. Cras luctus orci vitae purus auctor, et tincidunt ex aliquet. Cras pharetra est non libero luctus, eu feugiat nisi eleifend. Praesent eu nulla lorem. Cras nec faucibus erat. Nullam lobortis tortor at ullamcorper viverra. Curabitur tristique ipsum a interdum consequat. In magna lacus, viverra sit amet massa ut, gravida laoreet neque. Nunc at malesuada est, vel tempus metus. Suspendisse id ante ullamcorper, imperdiet felis eget, scelerisque erat. Nunc luctus faucibus tortor at efficitur. Vivamus a felis sodales, mattis massa ac, blandit justo. Donec a elit ut magna dictum elementum. Mauris imperdiet velit at odio tempor lacinia. Nulla consectetur volutpat diam vitae condimentum.'
//option1
numWords = 1;
for (let i=0; i < newString.length; i++) {
    let character = newString[i];
    if (character === " ") {
        numWords++
    }
}

//option 2
String2 = newString.split(" ")
words= String2.length;

console.log(`El número de palabras es ${numWords}`) //option 1
console.log(`El número de palabras es ${words}`) //option 2

//Bonus1.2
let et ="et"
let counter = 0;

for (let i=1; i < newString.length; i++){
    if ( ((newString[i]+newString[i+1])==et) && (newString[i-1]===" ") && (newString[i+2]===" " )){
        counter++;
    }
}
console.log(counter)
