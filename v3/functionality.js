const setAttributeValues = (attribute) => {
  let attributeElementValue = document.getElementById(
    attribute + "-value-input"
  ).value;

  AttributesObject[attribute] = attributeElementValue;
};

const setValue = (characteristic) => {
  let characteristicElementValue = document.getElementById(
    characteristic + "-value-input"
  ).value;

  CharacteristicsObject[characteristic] = characteristicElementValue;
};

const calculateCharacteristicSuccessValues = (characteristic) => {
  let characteristicValueInput = document.getElementById(
    characteristic + "-value-input"
  );

  characteristicValueInput.value = CharacteristicsObject[characteristic];

  let characteristicHardValueElement = document.getElementById(
    characteristic + "-hard-success"
  );

  let characteristicExtremeValueElement = document.getElementById(
    characteristic + "-extreme-success"
  );

  let characteristicHardValue = Math.floor(
    CharacteristicsObject[characteristic] / 2
  );
  let characteristicExtremeValue = Math.floor(
    CharacteristicsObject[characteristic] / 5
  );
  characteristicHardValueElement.innerHTML = characteristicHardValue;
  characteristicExtremeValueElement.innerHTML = characteristicExtremeValue;
};

const calculateActionScreenSuccessValues = (screenDivName) => {
  let selectedScreenDiv = document.getElementById(screenDivName);
  let characteristicValueInputs = selectedScreenDiv.getElementsByClassName(
    "characteristic-value-input"
  );
  let characteristicHardValueElements = selectedScreenDiv.getElementsByClassName(
    "characteristic-hard-success"
  );
  let characteristicExtremeValueElements = selectedScreenDiv.getElementsByClassName(
    "characteristic-extreme-success"
  );
  let characteristicNames = selectedScreenDiv.getElementsByClassName(
    "characteristic-name"
  );

  [...characteristicValueInputs].forEach((element, index) => {
    element.value = CharacteristicsObject[characteristicNames[index].innerHTML];
  });

  [...characteristicHardValueElements].forEach((element, index) => {
    element.innerHTML = Math.floor(
      CharacteristicsObject[characteristicNames[index].innerHTML] / 2
    );
  });

  [...characteristicExtremeValueElements].forEach((element, index) => {
    element.innerHTML = Math.floor(
      CharacteristicsObject[characteristicNames[index].innerHTML] / 5
    );
  });
};

const roller = (rollButton, characteristic) => {
  let d100Result = Math.floor(Math.random() * 99 + 1);

  rollButton.innerHTML = d100Result;
  rollButton.disabled = true;

  setLuck(d100Result, characteristic);
  rollSuccessChecker(d100Result, characteristic);
}

const setLuck = (d100Result, characteristic) => {
  let luckInput = document.getElementById(characteristic + "-luck-input");
  let characteristicSuccessValue = document.getElementById(
    'action-' + characteristic + "-value-input"
  ).value;
  console.log(characteristicSuccessValue);
  let luckRequired = d100Result - characteristicSuccessValue;
  let luckRemaining = AttributesObject["Luck"];
  let luckButton = document.getElementById(characteristic + "-use-luck-button");

  if (luckRequired > luckRemaining) {
    luckButton.disabled = true;
  }

  if (Math.sign(luckRequired) != -1) {
    luckInput.value = luckRequired;
  }
}

const rollSuccessChecker = (d100Result, characteristic) => {
  let rollResult = d100Result;
  let characteristicSuccessElement = document.getElementById(
    'action-' + characteristic + "-value-input"
  );
  let characteristicHardSuccessElement = document.getElementById(
    'action-' + characteristic + "-hard-success"
  );
  let characteristicExtremeSuccessElement = document.getElementById(
    'action-' + characteristic + "-extreme-success"
  );

  characteristicSuccessElement.classList.remove("roll-success");
  characteristicSuccessElement.classList.remove("roll-fail");
  characteristicHardSuccessElement.classList.remove("roll-success");
  characteristicHardSuccessElement.classList.remove("roll-fail");
  characteristicExtremeSuccessElement.classList.remove("roll-success");
  characteristicExtremeSuccessElement.classList.remove("roll-fail");

  if (rollResult > characteristicSuccessElement.value) {
    characteristicSuccessElement.classList.add("roll-fail");
    characteristicHardSuccessElement.classList.add("roll-fail");
    characteristicExtremeSuccessElement.classList.add("roll-fail");
  } else if (
    rollResult <= characteristicSuccessElement.value &&
    rollResult > characteristicSuccessElement.value / 2
  ) {
    characteristicSuccessElement.classList.add("roll-success");
    characteristicHardSuccessElement.classList.add("roll-fail");
    characteristicExtremeSuccessElement.classList.add("roll-fail");
  } else if (
    rollResult <= characteristicSuccessElement.value / 2 &&
    rollResult > characteristicSuccessElement.value / 5
  ) {
    characteristicSuccessElement.classList.add("roll-success");
    characteristicHardSuccessElement.classList.add("roll-success");
    characteristicExtremeSuccessElement.classList.add("roll-fail");
  } else if (rollResult <= characteristicSuccessElement.value / 5) {
    characteristicSuccessElement.classList.add("roll-success");
    characteristicHardSuccessElement.classList.add("roll-success");
    characteristicExtremeSuccessElement.classList.add("roll-success");
  }
};

const push = (pushButton, rollButton, characteristic) => {
  roller(rollButton, characteristic);

  pushButton.disabled = true;
}

const useLuck = (characteristic, rollButton) => {
  let luckInputElement = document.getElementById(characteristic + "-luck-input");
  let rollButtonElement = rollButton;

  let luckSuccessResult = rollButtonElement.innerHTML - luckInputElement.value;

  rollButtonElement.innerHTML = luckSuccessResult;

  AttributesObject["Luck"] -= luckSuccessResult;

  rollSuccessChecker(luckSuccessResult, characteristic);

  luckInputElement.value = 0; 
}