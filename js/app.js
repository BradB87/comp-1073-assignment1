// Assignment 1//
// Brad Buttineau//

//Text-to-speak then show text//
let synth = window.speechSynthesis;
let textToSpeak = '';
let speakButton = document.querySelector('#speakBtn');
let newStory = document.querySelector('#newStory');

//Grab variables//
let purpleButton = document.getElementById("purpleButton");
let blueButton = document.querySelector('#blueButton');
let greenButton = document.querySelector('#greenButton');
let orangeButton = document.querySelector('#orangeButton');
let pinkButton = document.querySelector('#pinkButton');
let randomStory = document.querySelector('#randomStory');
let resetStory = document.querySelector('#reset');



//What To say://
let purpleString = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"]; // 0
let blueString = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"]; // 1
let greenString = ["a funny", "a scary", " a goofy", " a slimy", "a barking", "a fat"]; // 2
let orangeString = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"]; // 3
let pinkString = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]; //var
let text = ["", "", "", "", ""];
let textIndex = [-1, -1, -1, -1, -1];

/* Functions*/

function speakNow(string) {
	// New speech object, connect the string of text to speak//
	const utterThis = new SpeechSynthesisUtterance(string);
	// Utter the text//
	synth.speak(utterThis);
}

/* Event Listeners*/
// Onclick handler for event for textToSpeak//

purpleButton.addEventListener('click', function () {
	buttonEventListener(0, purpleString);
});

blueButton.addEventListener('click', function () {
	buttonEventListener(1, blueString);
});

greenButton.addEventListener('click', function () {
	buttonEventListener(2, greenString);
});

orangeButton.addEventListener('click', function () {
	buttonEventListener(3, orangeString);
});

pinkButton.addEventListener('click', function () {
	buttonEventListener(4, pinkString);
});



function buttonEventListener(index, string) {
	// function checks if its the first time clicking a button.//
	if (textIndex[index] == -1) {
		textIndex[index] = 0;
	}

	// set text to array index and say it aloud
	text[index] = string[textIndex[index]];
	speakNow(text[index]);

	// see if next array element exists, if yes then add 1 if not then reset back to 0
	if (textIndex[index] + 1 === string.length) {
		textIndex[index] = 0;
	} else {
		textIndex[index]++;
	}
	newStory.innerHTML = text.toString();

}

//RandomStory//
randomStory.addEventListener('click', function () {
	
	
	speakNow();

})


function getRandomStory() {

	return (
		purpleString[Math.floor(Math.random() * purpleString.length)] +
		" " +
		blueString[Math.floor(Math.random() * blueString.length)] +
		" " +
		greenString[Math.floor(Math.random() * greenString.length)] +
		" " +
		orangeString[Math.floor(Math.random() * orangeString.length)] +
		" " +
		pinkString[Math.floor(Math.random() * pinkString.length)] +
		"."


	)

}

//Reset story//
resetStory.addEventListener('click', function () {
	text = ["", "", "", "", ""];
	textIndex = [-1, -1, -1, -1, -1];
	newStory.innerHTML = text.toString();

});