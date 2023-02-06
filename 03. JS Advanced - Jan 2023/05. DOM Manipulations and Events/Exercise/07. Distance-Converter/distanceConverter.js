function attachEventsListeners() {

    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', onClick);

    let ratio = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function onClick(params) {

        let fromInput = Number(document.getElementById('inputDistance').value);
        let convertedField = document.getElementById('outputDistance');

        let fromValue = document.getElementById('inputUnits').value;
        let toValue = document.getElementById('outputUnits').value;

        let convertToMeter = fromInput * ratio[fromValue];
        let converted = convertToMeter / ratio[toValue];

        convertedField.value = converted;
    }
}

// function attachEventsListeners() {

//     let convertButton = document.getElementById('convert');
//     convertButton.addEventListener('click', onClick);

//     let fromOprion = document.querySelector('#inputUnits');
//     let toOption = document.querySelector('#outputUnits');
//     let [inputField, outputField] = document.querySelectorAll('input[type="text"]');

//     function onClick(event) {

//         let convert = Number(inputField.value);
//         let result = 0;

//         switch (fromOprion.value) {
//             case 'km':
//                 convert *= 1000;
//                 break;
//             case 'm':
//                 convert = convert;
//                 break;
//             case 'cm':
//                 convert *= 0.01;
//                 break;
//             case 'mm':
//                 convert *= 0.001;
//                 break;
//             case 'mi':
//                 convert *= 1609.34;
//                 break;
//             case 'yrd':
//                 convert *= 0.9144;
//                 break;
//             case 'ft':
//                 convert *= 0.3048;
//                 break;
//             case 'in':
//                 convert *= 0.0254;
//                 break;
//                 ;
//         }

//         switch (toOption.value) {
//             case 'km':
//                 result = convert / 1000;
//                 break;
//             case 'm':
//                 result = convert;
//                 break;
//             case 'cm':
//                 result = convert / 0.01;
//                 break;
//             case 'mm':
//                 result = convert / 0.001;
//                 break;
//             case 'mi':
//                 result = convert / 1609.34;
//                 break;
//             case 'yrd':
//                 result = convert / 0.9144;
//                 break;
//             case 'ft':
//                 result = convert / 0.3048;
//                 break;
//             case 'in':
//                 result = convert / 0.0254;
//                 break;
//                 ;
//         }

//         outputField.value = result;
//     }
// }