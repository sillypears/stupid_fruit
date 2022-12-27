$(function () {
    const main = { 
        name: "craglus", 
        display: "Craglus", 
        birthyear: 1949,
        desc: [""]
    }
    console.log(`Hello ${main.name}`)
    $('#poop').html(`
        <h1>${main.display}!!</h1>
        <p>My birth year was ${main.birthyear}. WOW!</p>
    `)
})