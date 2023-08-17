function getInputById(inputId){
   const inputField = document.getElementById(inputId);
   const inputString = inputField.value;
   const inputAmount = parseFloat(inputString);
   inputField.value = '';
   return inputAmount;
}
function getElementFieldById(elementId) {
   const elementField = document.getElementById(elementId);
   const elementString = elementField.innerText;
   const elementValue = parseFloat(elementString);
   return elementValue;
}

function setElementById(elementId,value) {
   const element = document.getElementById(elementId);
   element.innerText = value;
}