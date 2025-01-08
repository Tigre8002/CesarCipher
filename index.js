const alphabetMay = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
const alphabetMin = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

const alphabetMaxIndex = alphabetMay.length - 1

const input = document.getElementById("input")
const range = document.getElementById("rango")
const result = document.getElementById("result")

range.value = 10

function cesar(text, num){
    const textSeparate = []
    const textInCesar = []

    const rangeValue = range.value

    for (let i = 0; i < text.length; i++) {
        textSeparate.push(text[i]);
    }

    textSeparate.forEach(letter => {
        if (alphabetMay.includes(letter) || alphabetMin.includes(letter)) {
            if (letter === letter.toUpperCase())
            {
                const indexInAlphabet = alphabetMay.indexOf(letter)
                
                if (alphabetMay[parseInt(indexInAlphabet) + parseInt(rangeValue)]) {
                    textInCesar.push(alphabetMay[(parseInt(indexInAlphabet) + parseInt(rangeValue))])
                }else {
                    const newIndexToAdd = (parseInt(rangeValue) - (parseInt(alphabetMaxIndex) - parseInt(indexInAlphabet))) - parseInt(1)
                    textInCesar.push(alphabetMay[newIndexToAdd])

                    console.log(indexInAlphabet, alphabetMaxIndex, newIndexToAdd)
                }
                
            }else if (letter === letter.toLowerCase())
            {
                const indexInAlphabet = alphabetMin.indexOf(letter)
                
                if (alphabetMin[parseInt(indexInAlphabet) + parseInt(rangeValue)]) {
                    textInCesar.push(alphabetMin[(parseInt(indexInAlphabet) + parseInt(rangeValue))])
                }else {
                    const newIndexToAdd = (parseInt(rangeValue) - (parseInt(alphabetMaxIndex) - parseInt(indexInAlphabet))) - parseInt(1)
                    textInCesar.push(alphabetMin[newIndexToAdd])

                    console.log(indexInAlphabet, alphabetMaxIndex, newIndexToAdd)
                }
            }
        }else{
            textInCesar.push(letter)
        }
    })

    console.log(textSeparate, textInCesar)

    return textInCesar
}

function playKey(nameSound) 
{
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioElement = new Audio('sounds/'+nameSound+'.mp3');
    const track = audioContext.createMediaElementSource(audioElement);
    
    track.connect(audioContext.destination);
    audioElement.play();
}


function submitText(array) {
    let textInString = ""

    array.forEach(letter => {
        textInString += letter
    });

    result.textContent = textInString
}


rango.addEventListener('input', function() {
    playKey('tik')
    submitText(cesar(input.value))
});

input.addEventListener('input', function() {
    playKey('key')
    submitText(cesar(input.value))
});
