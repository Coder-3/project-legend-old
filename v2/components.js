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

  let characteristicCheckbox = createCheckbox(
    "characteristic-checkbox",
    characteristic + "Checkbox"
  );

  let characteristicNameElement = createParagraph(
    "none",
    "none",
    characteristic
  );

  let characteristicValueDiv = document.createElement("DIV");
  characteristicValueDiv.classList.add("characteristic-value-div");

  let characteristicRegularValue = createTextInput(
    "value-input",
    characteristic + "ValueInput"
  );
  characteristicRegularValue.onchange = function () {
    calculateSuccessCharacteristicValues(characteristic);
  };

  let characteristicHardValue = createParagraph(
    "-hard-value-paragraph",
    characteristic + "-hard-value-paragraph",
    "none"
  );

  let characteristicExtremeValue = createParagraph(
    "-extreme-value-paragraph",
    characteristic + "-extreme-value-paragraph",
    "none"
  );

  characteristicValueDiv.appendChild(characteristicRegularValue);
  characteristicValueDiv.appendChild(characteristicHardValue);
  characteristicValueDiv.appendChild(characteristicExtremeValue);

  let rollButton = createButton("roll-button", characteristic, "Roll");
  rollButton.onclick = function () {
    roller(rollButton, characteristic);
  };

  let useLuckDiv = document.createElement("DIV");
  useLuckDiv.classList.add("luck-div");

  let useLuckInput = createTextInput("none", characteristic + "LuckInput");

  let useLuckButton = createButton(
    "none",
    characteristic + "LuckButton",
    "Use Luck"
  );
  useLuckButton.onclick = function () {
    useLuck(characteristic, rollButton);
  };

  useLuckDiv.appendChild(useLuckInput);
  useLuckDiv.appendChild(useLuckButton);

  let pushButton = createButton("push-button", "none", "Push");
  pushButton.onclick = function () {
    push(pushButton, rollButton);
  };

  characteristicDiv.appendChild(characteristicCheckbox);
  characteristicDiv.appendChild(characteristicNameElement);
  characteristicDiv.appendChild(characteristicValueDiv);
  characteristicDiv.appendChild(rollButton);
  characteristicDiv.appendChild(useLuckDiv);
  characteristicDiv.appendChild(pushButton);

  return characteristicDiv;
}
