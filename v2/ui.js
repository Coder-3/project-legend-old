attributeComponent = (attribute, index) => {
    let attributeDiv = document.createElement('DIV');
    
    let attributeNameElement = document.createElement('P');
    let attributeNameText = document.createTextNode(attribute);
    attributeNameElement.appendChild(attributeNameText);

    let attributeValue = document.createElement('INPUT');
    attributeValue.type = 'text';

    attributeDiv.appendChild(attributeNameElement);
    attributeDiv.appendChild(attributeValue);

    return attributeDiv;
}

function characteristicComponent(characteristic) {
    let characteristicDiv = document.createElement('DIV');
    characteristicDiv.classList.add('characteristic-div');


    let characteristicNameElement = document.createElement('P');
    let characteristicNameText = document.createTextNode(characteristic);
    characteristicNameElement.appendChild(characteristicNameText);

    
    let characteristicValueDiv = document.createElement('DIV');
    characteristicValueDiv.classList.add('characteristic-value-div');

    let characteristicRegularValue = document.createElement('INPUT');
    characteristicRegularValue.type = 'text';

    let characteristicHardValue = document.createElement('P');
    characteristicHardValue.classList.add('-hard-value-paragraph');

    let characteristicExtremeValue = document.createElement('P');
    characteristicExtremeValue.classList.add('-extreme-value-parahraph');
    
    characteristicValueDiv.appendChild(characteristicRegularValue);
    characteristicValueDiv.appendChild(characteristicHardValue);
    characteristicValueDiv.appendChild(characteristicExtremeValue);


    let rollButton = document.createElement('BUTTON');
    rollButton.classList.add('roll-button');
    rollButton.onclick = function() { roller(); };
    rollButton.innerHTML = 'Roll';


    let useLuckDiv = document.createElement('DIV');
    useLuckDiv.classList.add('luck-div');

    let useLuckInput = document.createElement('INPUT');
    useLuckInput.type = 'text'

    let useLuckButton = document.createElement('BUTTON');
    useLuckButton.innerHTML = 'Use Luck';

    useLuckDiv.appendChild(useLuckInput);
    useLuckDiv.appendChild(useLuckButton);


    let pushButton = document.createElement('BUTTON');
    pushButton.classList.add('push-button');
    pushButton.onclick = function() { pushLuck(); };
    pushButton.innerHTML = 'Push';


    characteristicDiv.appendChild(characteristicNameElement);
    characteristicDiv.appendChild(characteristicValueDiv);
    characteristicDiv.appendChild(rollButton);
    characteristicDiv.appendChild(useLuckDiv);
    characteristicDiv.appendChild(pushButton);

    return characteristicDiv;
}

function attributes() {
    let listOfAttributes = ['HP', 'Damage bonus', 'Build', 'Movement rate', 'Sanity', 'Magic', 'Luck'];
    
    let attributesDiv = document.getElementById('attributes-div');

    listOfAttributes.forEach(function(attribute) {
        let currentComponent = attributeComponent(attribute);
        attributesDiv.appendChild(currentComponent);
    });
}

function characteristics() {
    let listOfCharacteristics = ['Strength', 'Constitution', 'Size', 'Dexterity', 'Appearance', 'Education', 'Intelligence', 'Power'];

    let characteristicsDiv = document.getElementById('characteristics-div');

    listOfCharacteristics.forEach(function(characteristic) {
        let currentCharacteristic = characteristicComponent(characteristic);
        characteristicsDiv.appendChild(currentCharacteristic);
    });
}

attributes();
characteristics();