function extractFile(string) {
    let stringArr = string.split('\\');
    let element = stringArr.pop();
    let fileName = element.substring(0, element.lastIndexOf('.'))
    let extension = element.substring(element.lastIndexOf('.') + 1)
    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)

}
extractFile('C:\\Internal\\training-internal\\template.bak.pptx')