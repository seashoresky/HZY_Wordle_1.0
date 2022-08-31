import wordbank from './wordle-bank.txt'
export const boardDefault = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
]
export const generateWords = async () => {
    let wordSet;
    let todaysWord;
    await fetch(wordbank)
        .then(res => res.text())
        .then(result => {
            const wordArr = result.split('\n')
            todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)]
            wordSet = new Set(wordArr)
        })
    return { wordSet, todaysWord }
}   