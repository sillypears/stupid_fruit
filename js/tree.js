$(function () {
    const main = { 
        name: "tree", 
        display: "Stupid Tree Thing", 
        birthyear: 858,
        desc: [""]
    }
    console.log(`Hello ${main.name}`)
    $('#poop').html(`
        <h1>${main.display}!!</h1>
        <p>My birth year was ${main.birthyear}. WOW!</p>
    `)
})