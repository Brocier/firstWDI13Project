
$(() => {
    console.log(`let's guess!`)
    const guessWord = `fhqwgads`
    const letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]
    // console.log(letters)

    //split up the answer into seperate letters
    const guessSplit = guessWord.split("");
    console.log(guessSplit)

    //make a click event for letter
    $(`.bold`).on(`click`, (event) => {
        const letterClicked = event.target.textContent;
        console.log(letterClicked);
        return letterClicked;
    })
    //
    // $('.lettersRemaining').append();
    $('.answer').append(guessWord);
    // $('.lettersUsed').append(letters);

    // check to see if the letter clicked is in the answer

    // test to see if I can merge to master
    /* font-weight thin if used and bold if not */
    /* Use the scale-in and scale-out classes to make the letters appear and disappear. */
});