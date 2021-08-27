var allButtons = document.getElementsByTagName('a');

//Putting all buttons classes to an array
var allButtonsClasses = [];
for (let index = 0; index < allButtons.length; index++) {
     allButtonsClasses.push(allButtons[index].classList[0]);    
}

function changeColor(selection) {
     var selectionValue = selection.value;
     if (selectionValue === 'red') {
          changeToRed();
     } else if (selectionValue === 'grey'){
          changeToGrey();
     } else if (selectionValue === 'blue'){
          changeToBlue();
     } else if (selectionValue === 'purple') {
          changeToPurple();
     } else if (selectionValue === 'random') {
          randomColor();
     } else if (selectionValue === 'reset') {
          resetToOriginalColors();
     }
}

function changeToRed() {
     for (let index = 0; index < allButtons.length; index++) {
          allButtons[index].classList.remove(allButtons[index].classList[0]);
          
          allButtons[index].classList.add('youtube');
     }
}

function changeToGrey() {
     for (let index = 0; index < allButtons.length; index++) {
          allButtons[index].classList.remove(allButtons[index].classList[0]);
          
          allButtons[index].classList.add('github');
     }
}

function changeToBlue() {
     for (let index = 0; index < allButtons.length; index++) {
         allButtons[index].classList.remove(allButtons[index].classList[0]);

         allButtons[index].classList.add('twitter');
     }
}

function changeToPurple() {
     for (let index = 0; index < allButtons.length; index++) {
          allButtons[index].classList.remove(allButtons[index].classList[0]);
          
          allButtons[index].classList.add('IG');
     }
}

function randomColor() {
     for (let index = 0; index < allButtons.length; index++) {
          var randomColorSelection = Math.floor(Math.random() * allButtonsClasses.length);

          console.log(randomColorSelection);
          allButtons[index].classList.remove(allButtons[index].classList[0]);

          allButtons[index].classList.add(allButtonsClasses[randomColorSelection]);
     }
}

function resetToOriginalColors() {
     for (let index = 0; index < allButtons.length; index++) {
          allButtons[index].classList.remove(allButtons[index].classList[0]);

          allButtons[index].classList.add(allButtonsClasses[index]);
     }
}