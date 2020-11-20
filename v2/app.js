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

function roller(rollButton) {
  let d100Value = Math.floor(Math.random() * 99 + 1);

  rollButton.innerHTML = d100Value;
}

function useLuck() {}

function push() {}

uiBuilder();