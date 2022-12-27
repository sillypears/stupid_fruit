$(function () {
    const main = { 
        name: "flambet", 
        display: "Flambet", 
        birthyear: 1978,
        desc: [""]
    }
    console.log(`Hello ${main.name}`)
    $('#poop').html(`
        <h1>${main.display}!!</h1>
        <p>My birth year was ${main.birthyear}. WOW!</p>
    `)
})