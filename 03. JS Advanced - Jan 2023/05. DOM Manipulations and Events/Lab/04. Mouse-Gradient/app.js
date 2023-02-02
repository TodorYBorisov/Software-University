function attachGradientEvents() {
    let gardienPosition = document.getElementById('gradient');
    gardienPosition.addEventListener('mousemove', onMouseMove);

    let resultField = document.getElementById('result');

    function onMouseMove(event) {
        resultField.textContent = Math.floor((event.offsetX / gardienPosition.clientWidth)* 100) + '%';
    }

}