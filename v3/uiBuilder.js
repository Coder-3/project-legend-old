const attributes = () => {
  let listOfAttributes = Object.keys(AttributesObject);

  let attributesDiv = document.getElementById("attributes-div");

  listOfAttributes.forEach(function (attribute) {
    let currentAttribute = attributeComponent(attribute);
    attributesDiv.appendChild(currentAttribute);
  });
};

const characteristics = () => {
  let listOfCharacteristics = Object.keys(CharacteristicsObject);

  let characteristicsDiv = document.getElementById("characteristics-div");

  listOfCharacteristics.forEach(function (characteristic) {
    let currentCharacteristic = characteristicComponent(characteristic);
    characteristicsDiv.appendChild(currentCharacteristic);
  });
};

const addAttributeValues = () => {
  let attributesDiv = document.getElementById("attributes-div");
  let attributeValueInputs = attributesDiv.getElementsByClassName("attribute-value-input");
  let attributeNames = attributesDiv.getElementsByClassName("attribute-paragraph");

  [...attributeValueInputs].forEach((element, index) => {
    element.value = AttributesObject[attributeNames[index].innerHTML];
  });
};