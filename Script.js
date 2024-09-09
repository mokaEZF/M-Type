const textBox = document.getElementById('word-input');
const randomwordtext = document.getElementById('random-word');
const ScoreText = document.getElementById('Score');
const words = ['me', 'hello', 'pc', 'test', 'moka'];
let Score = 0;
let RandomWord = RandomWordFun();

function RandomWordFun() {
    const RandomWordGet = Math.floor(Math.random() * words.length);
    return words[RandomWordGet];
}

function UpdRnm() {
    RandomWord = RandomWordFun();
    randomwordtext.textContent = "The Word is : " + RandomWord
}

UpdRnm();
setInterval(UpdRnm, 3000);
console.log(RandomWord)

textBox.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        if (textBox.value === RandomWord) {
            Score = Score + 1
            ScoreText.textContent = "Score: " + Score
            console.log('Correct Answer!');
            console.log(Score);
            RandomWord = RandomWordFun();
            console.log('New Word: ' + RandomWord);
            UpdRnm();
            textBox.value = '';
        
        if (Score == 15) {
            alert('Perfect You So Fast On Type!')
        }

        } else {
            console.log('Incorrect!');
            textBox.value = '';
        }
    }
});