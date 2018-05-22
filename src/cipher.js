function encrypt() {
  textOne = document.getElementById("textOne").value;
  offset = document.getElementById("offset").value;
  textTwo = document.getElementById("textTwo");
  var output = "";
  offset = parseInt(offset);
  for (let i = 0; i < textOne.length; i++) {
    numberLetter=(textOne.charCodeAt(i)+offset)
    if (numberLetter<90 && numberLetter>65 || numberLetter<122 && numberLetter>97) {
    output += String.fromCharCode(numberLetter);
    textTwo.value=output;
    }
    else alert("funciona!");
  }
}
function decrypt() {
  textTwo = document.getElementById("textTwo").value;
  offset = document.getElementById("offset").value;
  var output = "";
  offset = parseInt(offset);
  for (var i = 0; i < textTwo.length; i++) {
    output += String.fromCharCode(textTwo.charCodeAt(i) - offset);
  }
  alert(output);
}