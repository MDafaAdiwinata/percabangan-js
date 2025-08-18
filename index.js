function validateNumber() {
    event.preventDefault();

    let inputAngka = document.getElementById('inputAngka');
    let outputText = document.getElementById('outputText');
    let cardOutput = document.getElementById('cardOutput');

    cardOutput.classList.add("py-2");

    if ( inputAngka == "" ) {

    } else if ( inputAngka % 2 == 0 ) {

    } else if ( inputAngka % 2 == 1 ) {

    } else {
        
    }

}