const normalText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialText = " 0123456789¿?!¡,;:'.áéíóúñÑ";
const filtro = normalText + specialText;



document.getElementById("buttonStart").addEventListener("click", () => {

    let opcion = document.getElementById("list");
    let value = opcion.options[opcion.selectedIndex].value;
    if (value == "value1") {
        offset = document.getElementById("offset").value;
        let textOne = document.getElementById("textOne").value;
        let result = document.getElementById("result")
        result.innerHTML = "Texto Desencriptado";
        cipher.decode(offset, textOne);
    }
    else {
        let result = document.getElementById("result")
        result.innerHTML = cipher.encode(offset, textOne);
        offset = document.getElementById("offset").value;
        let textOne = document.getElementById("textOne").value;
        
    }
});
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("textOne").value = "";
    document.getElementById("textTwo").value = "";
});

document.getElementById("textOne").addEventListener("keyup", function () {
    let out = '';
    let string = document.getElementById("textOne").value;
    for (i = 0; i < string.length; i++)
        if (filtro.includes(string.charAt(i)))
            out += string.charAt(i);
    document.getElementById("textOne").value = out;

})

document.getElementById("textTwo").addEventListener("keyup", function () {
    let out = '';
    let string = document.getElementById("textTwo").value;
    for (i = 0; i < string.length; i++)
        if (filtro.includes(string.charAt(i)))
            out += string.charAt(i);
    document.getElementById("textTwo").value = out;

})

