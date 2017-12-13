
$(() => {
    console.log(`let's guess!`)
    const guessWord = `fhqwgads`
    const letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]
    // console.log(letters)

    //make a click event for letter
    $(`.letter`).on(`click`, function (event) {
        console.log(event.data);
    })
    //use event.target to select the letter I clicked
    //make what letter I clicked console.log
    //
    // $('.lettersRemaining').append();
    $('.answer').append(guessWord);
    // $('.lettersUsed').append(letters);

    // check to see if the letter clicked is in the answer

    // test to see if I can merge to master
    /* font-weight thin if used and bold if not */
    /* Use the scale-in and scale-out classes to make the letters appear and disappear. */
});