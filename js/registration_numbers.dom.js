var inputNameElem = document.querySelector('.inputName');
var addBtnElement = document.querySelector('.addBtn');
var clearBtnElement = document.querySelector('.clearBtn');
var displayElement = document.querySelector('.display');
var optionsElement = document.querySelector('.options');

var checkStored = function() {
  var storedRegs = JSON.parse(localStorage.getItem("regStored"));
  if (storedRegs) {
    return storedRegs;
  } else {
    localStorage.setItem('regStored', JSON.stringify({}));
    return storedRegs;
  }
}

var regNums = Registrations(checkStored());

function clickAddButton() {
  var enterInput = inputNameElem.value;
  var displayTown = regNums.fromATown(enterInput);
  var node = document.createElement("button");
  var textnode = document.createTextNode(enterInput);

  //Styling button
  node.style.backgroundColor = 'yellow';
  node.style.borderColor = 'black';
  node.style.color = 'black';
  node.style.display = 'block';

  node.appendChild(textnode);
  document.getElementById("displayMe").appendChild(node);
  document.getElementById("nameInput").value = '';
  localStorage.setItem('regStored', JSON.stringify(regNums.regsMap()));
}

function clickClearButton() {
  localStorage.clear();
  location.reload();
};

optionsElement.addEventListener('change', function() {
  document.getElementById("displayMe").innerHTML = '';
  var storeReg = optionsElement.value;
  var filtered = regNums.filterAll(storeReg);
  for (var i = 0; i < filtered.length; i++) {
    clickAddButton(filtered[i]);
  }
});

addBtnElement.addEventListener('click', clickAddButton);
clearBtnElement.addEventListener('click', clickClearButton);
