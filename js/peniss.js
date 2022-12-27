$(function () {
    const main = { 
        name: "peniss", 
        display: "Mr. Paul Emery Niss", 
        birthyear: 1829,
        desc: [""]
    }
    console.log(`Hello ${main.name}`)
    $('#poop').html(`
        <h1>${main.display}!!</h1>
        <p>My birth year was ${main.birthyear}. WOW!</p>
    `)
})