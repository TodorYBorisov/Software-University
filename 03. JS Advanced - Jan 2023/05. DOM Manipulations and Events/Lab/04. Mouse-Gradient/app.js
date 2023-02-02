function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultField = document.getElementById('result');

    gradientElement.addEventListener('mousemove', onMouseMove);

    function onMouseMove(event) {
        let percent = Math.floor((event.offsetX / gradientElement.clientWidth) * 100) + '%';
        resultField.textContent = percent;
    }
}