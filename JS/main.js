$(() => {
    console.log(`let's guess!`)
    const guessWord = `fhqwgads`
    const letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]

    //split up the answer into seperate letters
    const guessSplit = guessWord.split("");
    //map the split letters to divs with the class of 'hidden answer'
    const guessFinal = guessSplit.map((letter) => {
        return $('.answer-container').append(`<span class="hidden answer ${letter}">${letter}</span>`)
    })
    //make a click event that returns the letter clicked
    const guessedLetter = $(`.letter`).on(`click`, (event) => {
        const letterClicked = event.target.textContent;
        console.log('letter', letterClicked);
        if (guessSplit.indexOf(letterClicked) > -1) {
            $(event.target).css('font-weight', 'bold')
            $(event.target).off()
            $(`.${letterClicked}`).removeClass('hidden')
            // //how I'm getting the letter that matched in the answer.
            const matchingLetterIndex = guessSplit.indexOf(letterClicked)
            console.log('matchingLetterIndex', matchingLetterIndex)
            console.log("guessSplit", guessSplit[matchingLetterIndex]);
        }
        else {
            $(event.target).addClass('wrong');
            $(event.target).off()
        }
        return letterClicked;
    })
});