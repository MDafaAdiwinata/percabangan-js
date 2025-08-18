function validateNumber() {
    event.preventDefault();

    let inputAngka = document.getElementById('inputAngka');
    let outputText = document.getElementById('outputText');
    let cardOutput = document.getElementById('cardOutput');

    cardOutput.classList.add("py-2");

    if ( inputAngka == "" ) {
        outputText.innerText = "Masukkan angka!";
    } else if ( inputAngka % 2 == 0 ) {
        outputText.innerText = "Genap";
    } else if ( inputAngka % 2 == 1 ) {
        outputText.innerText = "Ganjil";
    } else {
        outputText.innerText = "Yang anda masukkan bukanlah Angka!";
    }

}