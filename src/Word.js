import wordbank from './wordle-bank.txt'
export const boardDefault = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
]
export async function generateWords() {
    let WordSet;
    let todaysWord;
    await fetch(wordbank)
        .then(res => res.text())
        .then(result => {
            const wordArr = result.split('\n')
            WordSet = new Set(wordArr)
            todaysWord = wordArr[Math.floor(wordArr.length * Math.random())]
        })
    return {WordSet, todaysWord}
}