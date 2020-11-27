const checkSelected = () => {
  let selectedForRoll = [];

  [...document.getElementsByClassName("characteristic-checkbox")].forEach(
    (element) => {
      if (element.checked) {
        let nameOfSelected = element.id.replace("-checkbox", "");
        selectedForRoll.push(nameOfSelected);
      }
    }
  );

  return selectedForRoll;
};

const actionScreenBuilder = () => {
  let investigatorScreenDiv = document.getElementById("investigator-screen");
  investigatorScreenDiv.style.display = "none";

  let actionScreen = document.getElementById("action-screen");
  actionScreen.style.display = "flex";

  actionScreen.innerHTML = "";

  let investigatorScreenButton = createButton("screen-button", "investigator-screen-button", "Investigator Screen");
  investigatorScreenButton.onclick = () => {
    investigatorScreenBuilder();
  }

  actionScreen.appendChild(investigatorScreenButton);
  
  let selectedForRoll = checkSelected();

  selectedForRoll.forEach((characteristic) => {
    let selectedForRollComponent = characteristicActionScreenComponent(
      characteristic
    );
    actionScreen.appendChild(selectedForRollComponent);
  });

  calculateActionScreenSuccessValues();
};
