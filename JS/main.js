$(() => {
    console.log(`let's guess!`)
    const guessWord = `fhqwgads`
    const letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]

    //split up the answer into seperate letters
    const guessSplit = guessWord.split("");
    //map the split letters to divs with the class of 'hidden answer'
    const guessFinal = guessSplit.map((letter) => {
        return $('.answer-container').append(`<span class="hidden answer">${letter}</span>`)
    })

    //make a click event that returns the letter clicked
    const guessedLetter = $(`.letter`).on(`click`, (event) => {
        const letterClicked = event.target.textContent;
        console.log(letterClicked);
        if (guessSplit.indexOf(letterClicked) > -1) {
            $(event.target).css('font-weight', 'bold')
            $(event.target).off()

            //how I'm getting the letter that matched in the answer.
            const matchingLetterIndex = guessSplit.indexOf(letterClicked)
            console.log(guessFinal[matchingLetterIndex]);

            $('span').removeClass('hidden')
        }
        else {
            $(event.target).css('font-weight', '100')
            $(event.target).off()
        }
        return letterClicked;
    })

    // test to see if I can merge to master
    /* font-weight thin if used and bold if not */
    /* Use the scale-in and scale-out classes to make the letters appear and disappear. */
});