attributeComponent = (attribute) => {
  let attributeDiv = document.createElement("div");
  attributeDiv.classList.add('attribute-div');
  attributeDiv.id = attribute + "-attribute-div";

  let attributeNameElement = createParagraph("attribute-paragraph", attribute + "-paragraph", attribute);

  let attributeValue = createTextInput("attribute-value-input", attribute + "-value-input");
  attributeValue.onchange = () => {
    setAttributeValues(attribute);
  }

  attributeDiv.appendChild(attributeNameElement);
  attributeDiv.appendChild(attributeValue);

  return attributeDiv;
};

const characteristicComponent = (characteristic, forActionScreen) => {
  let characteristicDiv = document.createElement("div");
  characteristicDiv.classList.add("characteristic-div");
  characteristicDiv.id = characteristic + "-div";

  let characteristicCheckbox = createCheckbox(
    "characteristic-checkbox",
    characteristic + "-checkbox"
  );

  let characteristicNameElement = createParagraph(
    "characteristic-name",
    characteristic + "-name",
    characteristic
  );

  let characteristicValueDiv = document.createElement("div");
  characteristicValueDiv.classList.add("characteristic-value-div");
  characteristicValueDiv.id = characteristic + "-value-div";

  let characteristicRegularValue = createTextInput(
    "characteristic-value-input",
    characteristic + "-value-input"
  );
  characteristicRegularValue.onchange = function () {
    setValue(characteristic);
    calculateCharacteristicSuccessValues(characteristic);
  };

  let characteristicHardValue = createParagraph(
    "characteristic-hard-success",
    characteristic + "-hard-success",
    "none"
  );

  let characteristicExtremeValue = createParagraph(
    "characteristic-extreme-success",
    characteristic + "-extreme-success",
    "none"
  );

  if (forActionScreen) {
    characteristicRegularValue.id = 'action-' + characteristic + '-value-input';
    characteristicHardValue.id = 'action-' + characteristic + '-hard-success';
    characteristicExtremeValue.id = 'action-' + characteristic + '-extreme-success';
  }

  characteristicValueDiv.appendChild(characteristicRegularValue);
  characteristicValueDiv.appendChild(characteristicHardValue);
  characteristicValueDiv.appendChild(characteristicExtremeValue);

  characteristicDiv.appendChild(characteristicCheckbox);
  characteristicDiv.appendChild(characteristicNameElement);
  characteristicDiv.appendChild(characteristicValueDiv);

  return characteristicDiv;
}

const characteristicActionScreenComponent = (characteristic) => {
  let characteristicActionScreenDiv = document.createElement("div");
  characteristicActionScreenDiv.classList.add("characteristic-action-screen-div");
  characteristicActionScreenDiv.id = characteristic + "-action-screen-div";

  let characteristicValueComponent = characteristicComponent(characteristic, true);

  let rollButton = createButton("roll-button", characteristic + "-roll-button", "Roll");
  rollButton.onclick = function () {
    roller(rollButton, characteristic);
  };

  let useLuckDiv = document.createElement("div");
  useLuckDiv.classList.add("characteristic-use-luck-div");
  useLuckDiv.id = characteristic + "-use-luck-div";

  let useLuckInput = createTextInput("characteristic-luck-input", characteristic + "-luck-input");

  let useLuckButton = createButton(
    "characteristic-use-luck-button",
    characteristic + "-use-luck-button",
    "Use Luck"
  );
  useLuckButton.onclick = function () {
    useLuck(characteristic, rollButton);
  };

  useLuckDiv.appendChild(useLuckInput);
  useLuckDiv.appendChild(useLuckButton);

  let pushButton = createButton("characteristic-push-button", characteristic + "-push-button", "Push");
  pushButton.onclick = function () {
    push(pushButton, rollButton, characteristic);
  };

  characteristicActionScreenDiv.appendChild(characteristicValueComponent);
  characteristicActionScreenDiv.appendChild(rollButton);
  characteristicActionScreenDiv.appendChild(useLuckDiv);
  characteristicActionScreenDiv.appendChild(pushButton);

  return characteristicActionScreenDiv;
}