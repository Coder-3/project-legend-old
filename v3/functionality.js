const setAttributeValues = (attribute) => {
    let attributeElementValue = document.getElementById(
        attribute + "-value-input"
    ).value;
    
    AttributesObject[attribute] = attributeElementValue;
}

const setValue = (characteristic) => {
    let characteristicElementValue = document.getElementById(
        characteristic + "-value-input"
    ).value;

    CharacteristicsObject[characteristic] = characteristicElementValue;
}

const calculateCharacteristicSuccessValues = (characteristic) => {
    let characteristicValueInput = document.getElementById(characteristic + "-value-input");

    characteristicValueInput.value = CharacteristicsObject[characteristic];

    let characteristicHardValueElement = document.getElementById(
      characteristic + "-hard-success"
    );

    let characteristicExtremeValueElement = document.getElementById(
      characteristic + "-extreme-success"
    );
  
    let characteristicHardValue = Math.floor(CharacteristicsObject[characteristic] / 2);
    let characteristicExtremeValue = Math.floor(CharacteristicsObject[characteristic] / 5);
    characteristicHardValueElement.innerHTML = characteristicHardValue;
    characteristicExtremeValueElement.innerHTML = characteristicExtremeValue;
};

const calculateActionScreenSuccessValues = () => {
  let actionScreenDiv = document.getElementById('action-screen');
    let characteristicValueInputs = actionScreenDiv.getElementsByClassName("characteristic-value-input");
    let characteristicHardValueElements = actionScreenDiv.getElementsByClassName("characteristic-hard-success");
    let characteristicExtremeValueElements = actionScreenDiv.getElementsByClassName("characteristic-extreme-success");
    let characteristicNames = actionScreenDiv.getElementsByClassName("characteristic-name");

    [...characteristicValueInputs].forEach(
        (element, index) => {
          element.value = CharacteristicsObject[characteristicNames[index].innerHTML];
        }
    );

    [...characteristicHardValueElements].forEach(
        (element, index) => {
          element.innerHTML = Math.floor(CharacteristicsObject[characteristicNames[index].innerHTML] / 2);
        }
    );

    [...characteristicExtremeValueElements].forEach(
        (element, index) => {
          element.innerHTML = Math.floor(CharacteristicsObject[characteristicNames[index].innerHTML] / 5);
        }
    );
}