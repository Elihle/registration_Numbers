var inputNameElem = document.querySelector('.inputName');
var addBtnElement = document.querySelector('.addBtn');
var clearBtnElement = document.querySelector('.clearBtn');
var displayElement = document.querySelector('.displayElement');
var errorDisplayElem = document.querySelector('#errorDisplay');
var optionsElement = document.querySelector('#options');

var storedRegs = localStorage.getItem("regStored") ? JSON.parse(localStorage.getItem("regStored")) : {};
var regNums = Registrations(storedRegs);

function createReg(value) {
  var btn = document.createElement('button');
  btn.className = 'reg-number';
  btn.textContent = value;
  displayElement.appendChild(btn);
}

function addReg() {
  var enterInput = inputNameElem.value.toUpperCase().trim();
  if (enterInput === '') {
    errorDisplayElem.innerHTML = 'please enter a registration number';
    return;
  } else {
    if (enterInput != '') {
      errorDisplayElem.innerHTML = '';
      if (regNums.fromATown(enterInput)) {
        let reg = regNums.getReg();
        createReg(reg);
        localStorage.setItem('regStored', JSON.stringify(regNums.regsMap()));
      }
      else {
        let map = regNums.regsMap()
            map.indexOf(enterInput)!=-1 ? errorDisplayElem.innerHTML = "Registration number already exist" : errorDisplayElem.innerHTML = "Please enter a registration number that starts with CA, CL, CAW or CK ";
        }

    }
  }
}

function clickClearButton() {
  localStorage.clear();
  location.reload();
};

optionsElement.addEventListener('change', function() {
  var townTag = optionsElement.value;
  var filtered = regNums.filterAll(townTag);
  displayElement.innerHTML = ''
  errorDisplayElem.innerHTML = '';


  for (var i = 0; i < filtered.length; i++) {
    createReg(filtered[i]);
  }
});

addBtnElement.addEventListener('click', addReg);
clearBtnElement.addEventListener('click', clickClearButton);

window.addEventListener('load', function() {
  let reg = regNums.regsMap();
  let map = Object.keys(reg)
  console.log(reg)
  for (var i = 0; i < reg.length; i++) {
    createReg(reg[i]);
  }
});
