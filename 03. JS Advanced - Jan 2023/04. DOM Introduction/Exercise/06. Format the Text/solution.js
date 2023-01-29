function solve() {

  let input = document.getElementById('input').value;
  let formatedText = document.getElementById('output');

  let sentences = input.split('.').filter(s => s !== '');
  //// Изваждаме изреченията от инпута като ги делим по точка и ги филтрираме, за да нямаме празни изречения 

  while (sentences.length > 0) {
    let textParagraph = sentences.splice(0, 3).join('. ') + '.';

    let p = document.createElement('p');
    p.textContent = textParagraph;
    formatedText.appendChild(p);
  }
}