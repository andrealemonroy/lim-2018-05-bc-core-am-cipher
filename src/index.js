
document.getElementById('buttonStart').addEventListener('click', () => {
    let encodeText = document.getElementById('textOne').value;
    let offset = parseInt(document.getElementById('offset').value);
    const opcion = document.getElementById('list');
    let value = opcion.options[opcion.selectedIndex].value;
    if (value == 'value1') {
        let result = document.getElementById('result')
        result.innerHTML = 'Texto desencriptado';
        document.getElementById('textTwo').value = cipher.decode(offset, encodeText);
    }
    else {
        let result = document.getElementById('result')
        result.innerHTML = 'Texto encriptado';
        document.getElementById('textTwo').value = cipher.encode(offset, encodeText);
    }
})
document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('textOne').value = '';
    document.getElementById('textTwo').value = '';
})

