//create array prompt

let fruitList = [];
let secondArray = [];

let userInput = function userInput() {
    for (i = 0; i < 3; i++) {
        fruitList[i] = prompt("Enter a word: ");
        let ul = document.getElementById("menu").getElementsByTagName("li");
        ul[i].innerHTML = fruitList[i];
    }
    changeWord.style.display = "block";
    // I put the array.map method into this function was because I guess that if I use onclick to 
    // start userInput, other codes would be runned prior. So array.map would be executed before the
    // first array inputed. I could not find the way to start array.map manually or execute onclick event at
    // the beginning of the program.

    secondArray = fruitList.map(function (oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length - 1) + oneWord.charAt(0);
    });
    newPage();
};



function switching() {
    if (firstPage.style.display == "none") {
        firstPage.style.display = "block";
        secondPage.style.display = "none";
    } else {
        firstPage.style.display = "none";
        secondPage.style.display = "block";
    }
}


let newPage = function newPage() {
    for (i = 0; i < 3; i++) {
        let ul = document.getElementById("menuTwo").getElementsByTagName("li");
        ul[i].innerHTML = secondArray[i];
    }
}



