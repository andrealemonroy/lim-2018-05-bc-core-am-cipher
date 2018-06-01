
window.cipher = {
    encode(offset, text) {
        let output = '';
        for (let i = 0; i < text.length; i++) {
            let numberLetter = text.charCodeAt(i);
            if ( numberLetter >= 65 && numberLetter <= 90) {
                output += String.fromCharCode((numberLetter - 65 + offset) % 26 + 65);
            }
            else if (numberLetter >= 97 && numberLetter <= 122) {
                output += String.fromCharCode((numberLetter - 97 + offset) % 26 + 97);
            }
            else 
            output+=String.fromCharCode(numberLetter);
            }
        return output;
    },

    decode(offset, text) {debugger
        let output = '';
        for (let i = 0; i < text.length; i++) {
            let numberLetter = text.charCodeAt(i);
            if (numberLetter <= 90 && numberLetter >= 65) {
                if (text.charCodeAt(i) - offset < 65 && text.charCodeAt(i) - offset % 26 < 65) {
                    let difference = (65 - (numberLetter - offset % 26));
                    output += String.fromCharCode(91 - difference);
                }
                else output += String.fromCharCode(numberLetter - offset % 26);

            }
            else if (numberLetter >= 97 && numberLetter <= 122) {
                if ( numberLetter - offset % 26 < 97) {
                    let difference = (97 - (numberLetter - (offset) % 26));
                    output += String.fromCharCode(123 - difference);
                }
                else output += String.fromCharCode(numberLetter - offset % 26);
            }
            else 
            output+=String.fromCharCode(numberLetter);
            }
        return output;
}
};