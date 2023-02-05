function encodeAndDecodeMessages() {
    let inputs = document.querySelectorAll('textarea');

    let buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(event) {
        let clientInput = inputs[0].value;

        let inputField = clientInput.split('');
        let codedMessage = '';
        for (let char of inputField) {
            let newChar = String.fromCharCode((char.charCodeAt() + 1));
            codedMessage += newChar;
        }

        inputs[1].value = codedMessage;
        inputs[0].value = '';
    }

    function decode(event) {
        let clientInput = inputs[1].value;

        let inputField = clientInput.split('');
        let decodeddMessage = '';
        for (let char of inputField) {
            let newChar = String.fromCharCode((char.charCodeAt() - 1));
            decodeddMessage += newChar;
        }
        inputs[1].value = decodeddMessage;
    }
}