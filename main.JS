function appendToDisplay(value){
    document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
 document.getElementById('display').value = eval(display.value) ;
 
}
