
$(() => {
    console.log(`let's guess!`)
    const guessWord = `fhqwgads`
    const letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]
    console.log(letters)
    $('.lettersRemaining').append(letters);
    $('.guessingArea').append(guessWord)
    $('.lettersUsed').append(letters);
    // test to see if I can merge to master
    /* font-weight thin if used and bold if not */
    /* Use the scale-in and scale-out classes to make the letters appear and disappear. */
});