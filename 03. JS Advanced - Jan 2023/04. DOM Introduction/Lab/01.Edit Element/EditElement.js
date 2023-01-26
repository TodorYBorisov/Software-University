function editElement(ref, match, replacer) {

    let text = ref.textContent;                    // Взимаме в променлива текста от неговата референция
    let result = text.split(match).join(replacer); // Правим нова променлива'резултат'разделяме текста по съвпадението и го събираме по риплейсъра 
    ref.textContent = result;                      // Референцията на текста я даваме да е равна на резултата 
}
editElement();