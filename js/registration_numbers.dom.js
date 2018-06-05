var inputNameElem = document.querySelector('.inputName');
var addBtnElement = document.querySelector('.addBtn');
var clearBtnElement =  document.querySelector('.clearBtn');
var displayElement = document.querySelector('.display');

// var regTowns = Registrations();

function clickAddButton() {

    var enterInput = inputNameElem.value;
    var displayString = enterInput;
    var node = document.createElement("button");
    var textnode = document.createTextNode(enterInput);
    node.style.backgroundColor = 'yellow';
    node.style.borderColor = 'black';
    node.style.display = 'block';
    // node.style.position = 'absolute';

    node.appendChild(textnode);
    document.getElementById("displayMe").appendChild(node);
    document.getElementById("nameInput").value = '';

}

function clickTheClearButton() {
     displayElement.innerHTML = '';
   }

   clearBtnElement.addEventListener('click', clickTheClearButton);

addBtnElement.addEventListener('click', clickAddButton);
