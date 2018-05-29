var inputNameElem = document.querySelector(".inputName");
var addBtnElem = document.querySelector(".addBtn");
var displayElement = document.querySelector(".displayElement");

var registrationNum = regNumbers();

function clickAddBtn(){
var textEntered = inputNameElem.value;

var displayReg = registrationNum.countAll(regNum);
var regNums = registrationNum.addAllReg();

inputNameElem.innerHTML = "";
displayElement.innerHTML = displayReg;


}

addBtnElem.addEventLister("click", clickAddBtn);
