
$(() => {
    console.log(`let's guess!`)
    const guessWord = `fhqwgads`
    const letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]

    //split up the answer into seperate letters
    const guessSplit = guessWord.split("");
    console.log(guessSplit)

    //make a click event that returns the letter clicked
    const guessedLetter = $(`.bold`).on(`click`, (event) => {
        const letterClicked = event.target.textContent;
        console.log(letterClicked);
        return letterClicked;
    })

    // check to see if the letter clicked is in the answer
    // 
    const letterCheck = (guessedLetter) => {
        if (guessedLetter === guessSplit[0]) {
            return true
            console.log(`You hit A`)
        }
    }
    letterCheck(guessedLetter);



    $('.answer').append(guessWord);
    // $('.lettersUsed').append(letters);


    // test to see if I can merge to master
    /* font-weight thin if used and bold if not */
    /* Use the scale-in and scale-out classes to make the letters appear and disappear. */
});