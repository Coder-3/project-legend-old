const investigatorScreenBuilder = () => {
  let actionScreen = document.getElementById("action-screen");
  actionScreen.style.display = "none";

  let investigatorScreenDiv = document.getElementById("investigator-screen");
  investigatorScreenDiv.style.display = "block";

  let attributesDiv = document.getElementById("attributes-div");
  let actionScreenDiv = document.getElementById("action-screen-div");
  let characteristicsDiv = document.getElementById("characteristics-div");

  attributesDiv.innerHTML = "";
  actionScreenDiv.innerHTML = "";
  characteristicsDiv.innerHTML = "";

  let actionScreenButton = createButton("screen-button", "action-sreen-button", "Action Screen");
  actionScreenButton.onclick = () => {
    actionScreenBuilder();
  }

  actionScreenDiv.appendChild(actionScreenButton);

  attributes();
  characteristics();

  addAttributeValues();
  calculateActionScreenSuccessValues('characteristics-div');
};

investigatorScreenBuilder();