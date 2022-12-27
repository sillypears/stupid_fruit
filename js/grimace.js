$(function () {
    const main = { 
        name: "grimace", 
        display: "Grimace", 
        birthyear: 1702,
        desc: [""]
    }
    console.log(`Hello ${main.name}`)
    $('#poop').html(`
        <h1>${main.display}!!</h1>
        <p>My birth year was ${main.birthyear}. WOW!</p>
    `)
})