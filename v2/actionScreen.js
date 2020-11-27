const checkSelected = () => {
  let selectedStatsWithValues = [];
  let selectedStats = [];
  let selectedStatsValues = [];

  [...document.getElementsByClassName("characteristic-checkbox")].forEach(
    (element) => {
      if (element.checked) {
        let selectedCharacteristicName = element.id.replace("Checkbox", "");
        selectedStats.push(selectedCharacteristicName);

        let selectedCharacteristicValueElement = document.getElementById(
          selectedCharacteristicName + "ValueInput"
        ).value;
        selectedStatsValues.push(selectedCharacteristicValueElement);
      }
    }
  );

  selectedStatsWithValues.push(selectedStats);
  selectedStatsWithValues.push(selectedStatsValues);

  return selectedStatsWithValues;
};

const drawActionScreen = () => {
  let selectedStatsWithValues = checkSelected();

  let actionScreenDiv = document.createElement("DIV");
  actionScreenDiv.id = "action-screen-div";

  selectedStatsWithValues[0].forEach(function (characteristic) {
    let currentCharacteristic = characteristicComponent("Roll-" + characteristic);
    currentCharacteristic.style.width = "100%";
    actionScreenDiv.appendChild(currentCharacteristic);
  });

  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButton = document.createElement('span');
  closeButton.classList.add('close-btn');
  closeButton.innerHTML = "&times;";
  closeButton.onclick = () => {
      modal.style.display = 'none';
  }

  let actionScreenDivContainer = document.createElement('div');
  actionScreenDivContainer.classList.add('action-screen-container');
  actionScreenDiv.appendChild(closeButton);

  actionScreenDivContainer.appendChild(actionScreenDiv);

  modal.appendChild(actionScreenDivContainer);

  document.body.append(modal);

  selectedStatsWithValues[1].forEach(function (value, index) {
    let characteristicInput = document.getElementById(
      selectedStatsWithValues[0][index] + "ValueInput"
    );
    let characteristicHardValueParagraph = document.getElementById(
      selectedStatsWithValues[0][index] + "-hard-value-paragraph"
    );
    let characteristicExtremeValueParagraph = document.getElementById(
      selectedStatsWithValues[0][index] + "-extreme-value-paragraph"
    );

    let regularSuccess = selectedStatsWithValues[1][index];
    let hardSuccess = Math.floor(regularSuccess / 2);
    let extremeSuccess = Math.floor(regularSuccess / 5);

    characteristicInput.value = regularSuccess;
    characteristicHardValueParagraph.innerHTML = hardSuccess;
    characteristicExtremeValueParagraph.innerHTML = extremeSuccess;
  });
};
