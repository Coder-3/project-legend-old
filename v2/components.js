attributeComponent = (attribute) => {
  let attributeDiv = document.createElement("DIV");

  let attributeNameElement = createParagraph("none", "none", attribute);

  let attributeValue = createTextInput("none", "none");

  attributeDiv.appendChild(attributeNameElement);
  attributeDiv.appendChild(attributeValue);

  return attributeDiv;
};

function characteristicComponent(characteristic) {
  let characteristicDiv = document.createElement("DIV");
  characteristicDiv.classList.add("characteristic-div");

  let characteristicCheckbox = createCheckbox("characteristic-checkbox", characteristic + "Checkbox");

  let characteristicNameElement = createParagraph("none", "none", characteristic);

  let characteristicValueDiv = document.createElement("DIV");
  characteristicValueDiv.classList.add("characteristic-value-div");

  let characteristicRegularValue = createTextInput("none", characteristic + "ValueInput");
  characteristicRegularValue.onchange = function () {
    calculateSuccessCharacteristicValues(characteristic);
  };

  let characteristicHardValue = createParagraph("-hard-value-paragraph", characteristic + "-hard-value-paragraph", "none");

  let characteristicExtremeValue = createParagraph("-extreme-value-paragraph", characteristic + "-extreme-value-paragraph", "none");

  characteristicValueDiv.appendChild(characteristicRegularValue);
  characteristicValueDiv.appendChild(characteristicHardValue);
  characteristicValueDiv.appendChild(characteristicExtremeValue);

  let rollButton = createButton("roll-button", "none", "Roll");
  rollButton.onclick = function () {
    roller(rollButton);
  };

  let useLuckDiv = document.createElement("DIV");
  useLuckDiv.classList.add("luck-div");

  let useLuckInput = createTextInput("none", characteristic + "luckInput");
  useLuckInput.onchange = function () {
    useLuck(characteristic);
  };

  let useLuckButton = createButton("none", "none", "Use Luck")

  useLuckDiv.appendChild(useLuckInput);
  useLuckDiv.appendChild(useLuckButton);

  let pushButton = createButton("push-button", "none", "Push");
  pushButton.onclick = function () {
    push();
  };

  characteristicDiv.appendChild(characteristicCheckbox);
  characteristicDiv.appendChild(characteristicNameElement);
  characteristicDiv.appendChild(characteristicValueDiv);
  characteristicDiv.appendChild(rollButton);
  characteristicDiv.appendChild(useLuckDiv);
  characteristicDiv.appendChild(pushButton);

  return characteristicDiv;
}

function attributes() {
  let listOfAttributes = [
    "HP",
    "Damage bonus",
    "Build",
    "Movement rate",
    "Sanity",
    "Magic",
    "Luck",
  ];

  let attributesDiv = document.getElementById("attributes-div");

  listOfAttributes.forEach(function (attribute) {
    let currentComponent = attributeComponent(attribute);
    attributesDiv.appendChild(currentComponent);
  });
}

function characteristics() {
  let listOfCharacteristics = [
    "Strength",
    "Constitution",
    "Size",
    "Dexterity",
    "Appearance",
    "Education",
    "Intelligence",
    "Power",
  ];

  let characteristicsDiv = document.getElementById("characteristics-div");

  listOfCharacteristics.forEach(function (characteristic) {
    let currentCharacteristic = characteristicComponent(characteristic);
    characteristicsDiv.appendChild(currentCharacteristic);
  });
}

const actionScreenButton = () => {
  let actionScreenDiv = document.createElement("DIV");
  actionScreenDiv.id = "action-screen-div";

  let actionScreenButton = document.createElement("BUTTON");
  actionScreenButton.onclick = function () {
    drawActionScreen();
  };
  actionScreenButton.innerHTML = "Action Screen";

  actionScreenDiv.appendChild(actionScreenButton);

  document.body.appendChild(actionScreenDiv);
};

const uiBuilder = () => {
  attributes();
  characteristics();
  actionScreenButton();
};
