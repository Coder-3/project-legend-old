let attributes = ['Strength', 'Constitution', 'Power', 'Dexterity', 'Appearance', 'Size'];

createOptions = (option) => {
    let optionElement = document.createElement('option');
    optionElement.setAttribute("value", option);
    let optionText = document.createTextNode(option);
    optionElement.appendChild(optionText);

    console.log(optionElement);
    return optionElement;
}

function createRoller() {
    let rollButtonDiv = document.getElementById('roll-button');
    let rollContainer = document.getElementById('roll-container');

    let array = ["D100", "D20", "D8", "D6", "D4"];

    let selectList = document.createElement("select");
    selectList.id = "die-selector";

    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }

    let numberOfDice = document.createElement('input');
    numberOfDice.type = 'text';

    let dieModifier = document.createElement('input');
    dieModifier.type = 'text';

    let rollButton = document.createElement('button');
    rollButton.onclick = function () { roller(); };
    rollButton.innerHTML = 'Roll';

    let result = document.createElement('p');
    result.id = 'result';
    result.innerHTML = 'Result: ';

    rollButtonDiv.appendChild(numberOfDice);
    rollButtonDiv.appendChild(selectList);
    rollButtonDiv.appendChild(dieModifier);
    rollButtonDiv.appendChild(rollButton);
    rollContainer.appendChild(result);
}

setAttributes = (attribute, index) => {
    let attributeDiv = document.getElementById(attribute);

    let attributeCheckbox = document.createElement('input');
    attributeCheckbox.type = 'checkbox';

    let attributeName = document.createElement('p');
    attributeName.innerHTML = attribute;

    let attributeValue = document.createElement('input');
    attributeValue.type = 'text';

    attributeDiv.appendChild(attributeCheckbox);
    attributeDiv.appendChild(attributeName);
    attributeDiv.appendChild(attributeValue);
}

attributes.forEach(setAttributes);
createRoller();

function checkboxChecker(attribute) {
    let theCheckbox = document.querySelector("div#" + attribute + " input[type='checkbox']");
    
    if(theCheckbox.checked) {
        let textInput = document.querySelector("div#" + attribute + " input[type='text']");

        return textInput.value;
    }
}

function showResult(result) {
    let resultElement = document.getElementById('result');
    resultElement.append(result);

    // if
}

function roller() {
    let result;
    for(let i = 0; i < attributes.length; i++) {
        if (checkboxChecker(attributes[i]) != null) {
            result = checkboxChecker(attributes[i]);
            break;
        }
    }

    showResult(result);
}