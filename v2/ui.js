const checkboxElement = (className, id) => {
  let checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.classList.add(className);
  checkboxElement.id = id;

  return checkboxElement;
}

const paragraphElement = (className, id) => {
  let paragraphElement = document.createElement('p');
  paragraphElement.classList.add(className);
  paragraphElement.id = id;

  return paragraphElement;
}

const textInputElement = (className, id) => {
  let textInput = document.createElement('input');
  textInput.type = "text";
  textInput.classList.add(className);
  textInput.id = id;

  return textInput;
}

const buttonElement = (className, id) => {
  let buttonElement = document.createElement('button');
  buttonElement.classList.add(className);
  buttonElement.id = id;

  return buttonElement;
}