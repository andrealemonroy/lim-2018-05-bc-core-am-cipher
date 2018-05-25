
window.cipher = {
    encrypt : encrypt,
    decrypt : decrypt,
};
function onlyText(){
    var out = '';
    var string = document.getElementById("textOne").value;
    var filtro = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i=0; i<string.length; i++)
       if (filtro.includes(string.charAt(i))) 
     out += string.charAt(i);
   document.getElementById("textOne").value=out;
  }

  function onlyText2(){
    var out = '';
    var string = document.getElementById("textTwo").value;
    var filtro = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i=0; i<string.length; i++)
       if (filtro.includes(string.charAt(i))) 
     out += string.charAt(i);
   document.getElementById("textTwo").value=out;
  }

function encrypt() {
  onlyText();
  texto=document.getElementById("textOne").value;
  offset=document.getElementById("offset").value;
  var output="";
  offset = parseInt(offset);
  for (var i=0; i<texto.length;i++){
    numberLetter=texto.charCodeAt(i);
    if(numberLetter==32){
        output += " ";
    }
    else {
        if(numberLetter<=90){
          output += String.fromCharCode((numberLetter-65+offset)%26+65);
        }
        else{
          output += String.fromCharCode((numberLetter-97+offset)%26+97);
        }
    } 
  }
  document.getElementById("textTwo").value = output; 
} 
function decrypt() {
  onlyText2();
  texto=document.getElementById("textTwo").value;
  offset=document.getElementById("offset").value;
  var output="";
  for (var i=0; i<texto.length; i++){
    numberLetter=texto.charCodeAt(i);
    if (numberLetter == 32){
      output += " ";
    }
    else{
        if (numberLetter<=90 && numberLetter>=65) {
              if (texto.charCodeAt(i)-offset < 65 && texto.charCodeAt(i)-offset%26 < 65 ) {
                  difference=(65-(numberLetter-offset%26));
                  output += String.fromCharCode(91-difference);
              }
              else{ 
                  output += String.fromCharCode(texto.charCodeAt(i)-offset%26);
              }
        }
        else{
              if (numberLetter>= 97 && numberLetter <= 122 ){
                  if (texto.charCodeAt(i)-offset< 97 && texto.charCodeAt(i)-offset%26 < 97){
                  var difference=(97-(numberLetter-(offset)%26));
                  output += String.fromCharCode(123-difference);
              }
                  else output += String.fromCharCode(texto.charCodeAt(i)-offset%26);
        }    
    }
  }
}
      document.getElementById("textOne").value = output; 
} 