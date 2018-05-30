
window.cipher = {
  //encode : encode,
  //decrypt : decrypt,


  encode(offset, text) {
    // onlyText();

    // let offset=document.getElementById("offset").value;
    // if (text.length==0){
    //   alert("Ingrese text a procesar, gracias");
    //   text.focus();
    // }
    // else if (offset<=0){
    //   alert("Ingrese offset para procesar, gracias");
    //   offset.focus();
    // }
    // else {
    let output = "";
    offset = parseInt(offset);
    for (let i = 0; i < text.length; i++) {
      //alert(text.length);
      let numberLetter = text.charCodeAt(i);
      //alert(numberLetter);
      //if (specialText.includes(String.fromCharCode(numberLetter))) {
      //output += String.fromCharCode(numberLetter);
      //}
      //else {
      if (numberLetter <= 90) {
        output += String.fromCharCode((numberLetter - 65 + offset) % 26 + 65);
      }
      else {
        output += String.fromCharCode((numberLetter - 97 + offset) % 26 + 97);
      }
    }
    //}
    return output;
  },

  decode(offset, text) {
    // onlyText2();

    // let offset=document.getElementById("offset").value;
    // if (text.length==0){
    //   alert("Ingrese text a procesar, gracias");
    //   text.focus();
    // }
    // else if (offset<=0){
    //   alert("Ingrese offset para procesar, gracias");
    //   offset.focus();
    // }
    // else {
    let output = "";
    for (i = 0; i < text.length; i++) {
      numberLetter = text.charCodeAt(i);
      // if (specialText.includes(String.fromCharCode(numberLetter))) {
      //   output += String.fromCharCode(numberLetter);
      // }
      // else {
      if (numberLetter <= 90 && numberLetter >= 65) {
        if (text.charCodeAt(i) - offset < 65 && text.charCodeAt(i) - offset % 26 < 65) {
          difference = (65 - (numberLetter - offset % 26));
          output += String.fromCharCode(91 - difference);
        }
        else output += String.fromCharCode(text.charCodeAt(i) - offset % 26);

      }
      else {
        if (numberLetter >= 97 && numberLetter <= 122) {
          if (text.charCodeAt(i) - offset < 97 && text.charCodeAt(i) - offset % 26 < 97) {
            let difference = (97 - (numberLetter - (offset) % 26));
            output += String.fromCharCode(123 - difference);
          }
          else output += String.fromCharCode(text.charCodeAt(i) - offset % 26);
        }
      }
    }
    return output;
  }
  //} 
};