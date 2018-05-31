var inputNameElem = document.querySelector('.inputName');
var addBtnElement = document.querySelector('.addBtn');
var displayElement = document.querySelector('.display');

var regTowns = regNumbers();

function clickAddButton() {
   var enterInput = inputNameElem.value;
    var displayString = enterInput;
    var node = document.createElement("button");
    var textnode = document.createTextNode(enterInput);
    node.style.backgroundColor = 'yellow';
    node.style.borderColor = 'black';
    node.style.display = 'block';
    node.style.align = 'center';

    node.appendChild(textnode);
    document.getElementById("displayMe").appendChild(node);

  }


addBtnElement.addEventListener('click', clickAddButton);
