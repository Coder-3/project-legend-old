const attributes = () => {
  let listOfAttributes = Object.keys(AttributesObject);

  let attributesDiv = document.getElementById("attributes-div");

  listOfAttributes.forEach(function (attribute) {
    let currentAttribute = attributeComponent(attribute);
    attributesDiv.appendChild(currentAttribute);
  });
}

const characteristics = () => {
  let listOfCharacteristics = Object.keys(CharacteristicsObject);

  let characteristicsDiv = document.getElementById("characteristics-div");

  listOfCharacteristics.forEach(function (characteristic) {
    let currentCharacteristic = characteristicComponent(characteristic);
    characteristicsDiv.appendChild(currentCharacteristic);
  });
}

const drawCharacteristics = (characteristic, screenType) => {
    let contentDiv = document.getElementById(screenType);
}