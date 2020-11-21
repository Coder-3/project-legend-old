const createCheckbox = (className, id) => {
  let checkboxElement = document.createElement("input");
  checkboxElement.type = "checkbox";

  if (className != "none") {
    checkboxElement.classList.add(className);
  }

  if (id != "none") {
    checkboxElement.id = id;
  }

  return checkboxElement;
};

const createParagraph = (className, id, content) => {
  let paragraphElement = document.createElement("p");

  if (className != "none") {
    paragraphElement.classList.add(className);
  }

  if (id != "none") {
    paragraphElement.id = id;
  }

  if (content != "none") {
    let textNode = document.createTextNode(content);
    paragraphElement.appendChild(textNode);
  }

  return paragraphElement;
};

const createTextInput = (className, id) => {
  let textInput = document.createElement("input");
  textInput.type = "text";

  if (className != "none") {
    textInput.classList.add(className);
  }

  if (id != "none") {
    textInput.id = id;
  }

  return textInput;
};

const createButton = (className, id, text) => {
  let buttonElement = document.createElement("button");

  if (className != "none") {
    buttonElement.classList.add(className);
  }

  if (id != "none") {
    buttonElement.id = id;
  }

  if (text != "none") {
    buttonElement.innerHTML = text;
  }

  return buttonElement;
};
