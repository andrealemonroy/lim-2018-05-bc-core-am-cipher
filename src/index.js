const normalText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialText = " 0123456789¿?!¡,;:'.áéíóúñÑ";
const filtro = normalText + specialText;
let offset;

document.getElementById("buttonStart").addEventListener("click", () => {
    text = document.getElementById("textOne").value;
    let offset = document.getElementById("offset").value;
    const opcion = document.getElementById("list");
    let value = opcion.options[opcion.selectedIndex].value;
    if (value == "value1") {
        document.getElementById("textTwo").innerHTML = cipher.decode(offset, text);
        let result = document.getElementById("result")
        result.innerHTML = "Texto desencriptado";
    }
    else {
        let result = document.getElementById("result")
        result.innerHTML = "Texto encriptado";
        document.getElementById("textTwo").value = cipher.encode(offset, text);
    }
})
document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("textOne").value = "";
    document.getElementById("textTwo").value = "";
})

document.getElementById("textOne").addEventListener("keyup", () => {
    let out = '';
    let string = document.getElementById("textOne").value;
    for (let i = 0; i < string.length; i++)
        if (filtro.includes(string.charAt(i)))
            out += string.charAt(i);
    document.getElementById("textOne").value = out;

})

document.getElementById("textTwo").addEventListener("keyup", () => {
    let out = '';
    let string = document.getElementById("textTwo").value;
    for (i = 0; i < string.length; i++)
        if (filtro.includes(string.charAt(i)))
            out += string.charAt(i);
    document.getElementById("textTwo").value = out;

})
