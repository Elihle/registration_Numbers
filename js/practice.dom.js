var greetCounterElem = document.querySelector('.greetCounter');
var inputName = document.querySelector('.inputName');
var greetBtnElement = document.querySelector('.greetBtn');
var resetBtnElement = document.querySelector('.resetBtn');
var greetingElement = document.querySelector('.greeting');
var language = document.querySelector('.language');


var greetSpotter = Greetings();

function checkStoredNames(){
  var storedNames = JSON.parse(localStorage.getItem(greetedNames));

  if(storedNames){
    return storedNames;
  } else {
    localStorage.setItem("greetedNames", JSON.stringify({}));
    return storedNames;
  }
}





function clickGreetBtn(){
var textEntered = inputName.value;
var checkedRadioBtn = document.querySelector("input([name='language']): checked");


if (checkedRadioBtn){
  var language = checkedRadioBtn.value;
  var displayGreeting = greetSpotter.allGreets(language, name);
  var countedGreets = greetSpotter.greetCounter();

  textEntered.innerHTML = "";
  greetingElement.innerHTML = displayGreeting;
  greetCounterElem.innerHTML = countedGreets;
}

}
greetBtnElement.addEventLister('click', clickGreetBtn);
