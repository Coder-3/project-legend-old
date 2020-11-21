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

const investigatorScreenBuilder = () => {
  attributes();
  characteristics();
  actionScreenButton();
};

investigatorScreenBuilder();
