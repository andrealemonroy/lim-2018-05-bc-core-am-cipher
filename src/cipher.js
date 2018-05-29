window.cipher = {
    //encode : encode,
    //decode : decode,
    //createCipherWithOffset: createCipherWithOffset

encode(offset, text) {
    let output="";
    for (i=0; i<text.length;i++){
      let numberLetter=text.charCodeAt(i);
      if(specialText.includes(String.fromCharCode(numberLetter))){
          output += String.fromCharCode(numberLetter);
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
    return output;
    document.getElementById("textTwo").value = output;
  }, 

decode(offset, text) {
  let output="";
    for (i=0; i<text.length; i++){
      numberLetter=text.charCodeAt(i);
      if(specialText.includes(String.fromCharCode(numberLetter))){
          output += String.fromCharCode(numberLetter);
      }
      else{
        if (numberLetter<=90 && numberLetter>=65) {
              if (text.charCodeAt(i)-offset < 65 && text.charCodeAt(i)-offset%26 < 65 ) {
                  difference=(65-(numberLetter-offset%26));
                  output += String.fromCharCode(91-difference);
              }
              else output += String.fromCharCode(text.charCodeAt(i)-offset%26);
              
        }
        else{
              if (numberLetter>= 97 && numberLetter <= 122 ){
                  if (text.charCodeAt(i)-offset< 97 && text.charCodeAt(i)-offset%26 < 97){
                  let difference=(97-(numberLetter-(offset)%26));
                  output += String.fromCharCode(123-difference);
                  }
                  else output += String.fromCharCode(text.charCodeAt(i)-offset%26);
              }    
        }
      }
    }
        document.getElementById("textTwo").value = output; 
  }
};