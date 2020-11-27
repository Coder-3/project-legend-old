const calculateSuccessCharacteristicValues = (characteristic) => {
  let characteristicElementValue = document.getElementById(
    characteristic + "ValueInput"
  ).value;

  let characteristicHardValueElement = document.getElementById(
    characteristic + "-hard-value-paragraph"
  );
  let characteristicExtremeValueElement = document.getElementById(
    characteristic + "-extreme-value-paragraph"
  );

  let characteristicHardValue = Math.floor(characteristicElementValue / 2);
  let characteristicExtremeValue = Math.floor(characteristicElementValue / 5);
  characteristicHardValueElement.innerHTML = characteristicHardValue;
  characteristicExtremeValueElement.innerHTML = characteristicExtremeValue;
};

function roller(rollButton, characteristic) {
  let d100Result = Math.floor(Math.random() * 99 + 1);

  rollButton.innerHTML = d100Result;
  rollButton.disabled = true;

  rollSuccessChecker(d100Result, rollButton);
  setLuck(d100Result, characteristic);
}

const setLuck = (d100Result, characteristic) => {
  let luckInput = document.getElementById(characteristic + "LuckInput");
  let characteristicSuccessValue = document.getElementById(
    characteristic + "ValueInput"
  ).value;
  let luckRequired = d100Result - characteristicSuccessValue;
  let luckRemaining = document.getElementById("LuckValueInput").value;
  let luckButton = document.getElementById(characteristic + "LuckButton");

  if (luckRequired > luckRemaining) {
    luckButton.disabled = true;
  }

  if (Math.sign(luckRequired) != -1) {
    luckInput.value = luckRequired;
  }
};

function useLuck(characteristic, rollButton) {
  let luckInputElement = document.getElementById(characteristic + "LuckInput");
  let rollButtonElement = rollButton;

  let luckSuccessResult = rollButtonElement.innerHTML - luckInputElement.value;

  rollButtonElement.innerHTML = luckSuccessResult;

  rollSuccessChecker(luckSuccessResult, rollButton);

  luckInputElement.value = 0;
}

function push(pushButton, rollButton) {
  roller(rollButton);

  pushButton.disabled = true;
}

// Todo: use characteristic as a parameter instead of taking the ID from the rollButton
const rollSuccessChecker = (d100Result, rollButton) => {
  let rollResult = d100Result;
  let characteristicSuccessElement = document.getElementById(
    rollButton.id + "ValueInput"
  );
  let characteristicHardSuccessElement = document.getElementById(
    rollButton.id + "-hard-value-paragraph"
  );
  let characteristicExtremeSuccessElement = document.getElementById(
    rollButton.id + "-extreme-value-paragraph"
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
