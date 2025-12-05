console.log("Day 11:Javascript is running");

const Birthyear=1999

console.log(Birthyear);

let userScore =0;
userScore =userScore +5

console.log(userScore);

const isStudent=true

console.log(isStudent);

function greetuser(username) {
	console.log("Hello "+ username +" Welcome back 2 the portfollio")
}

greetuser("Extra12");	
greetuser("JOSH");

let Bal = 1000

function checkMONEY(amount){

	if (amount <= "bal") 
		{console.log("Can withdrw")
    } else {
    	console.log("Broke boy")
    }
}

checkMONEY(200)

let titleElement = document.getElementById("M-T")


console.log(titleElement);
// ygdfjhgfydgfjya
let biotitle = document.querySelector(".gr")
biotitle.imageContent = "My Contact informatione";
console.log(biotitle);




const myButton = document.getElementById("wlcm-btn");

console.log(myButton);
function sayWelcome(){
	console.log("Btn clicked! rnn wlcm code");

	const mainTitle = document.getElementById("M-T");
	mainTitle.textContent = "Thnx 4 clicking.Wlcm!"
}
myButton.addEventListener("click", sayWelcome)

const pageBody = document.getElementById("B-P");
const toggleButton = document.getElementById("tg-btn");
// Step 2: Define the action function
function toggleTheme() {
// This is the core of the dark mode feature!
pageBody.classList.toggle("darkmode");
// Bonus: Update button text based on the current mode (optional advanced logic)
if (pageBody.classList.contains("darkmode")) {
toggleButton.textContent = "Switch to Light Mode";
console.log("dark mode enabled");
} else {
toggleButton.textContent = "Toggle Dark Mode";
console.log("Light mode enabled");
}

}
// Step 3: Attach the listener
toggleButton.addEventListener("click"
, toggleTheme);

// IMAGE SWAP LOGIC
const pic = document.getElementById("PP");

const img1 = "shf dp.jpeg";    // First image
const img2 = "kitana.jpeg";    // Second image

pic.addEventListener("click", () => {
    pic.src = pic.src.includes(img1) ? img2 : img1;
});


