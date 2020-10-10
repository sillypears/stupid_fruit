(function ($) {
    $('div#content').html(load_home())
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
    window.setInterval(function(){
        titleChanger()
    }, 400);
})(jQuery);

function toggle(section) {
    console.log(section)
    switch (section) {
        case "home":
            $('div#content').html(load_home())
            break;
        case "blog":
            $('div#content').html(load_blog())
            break;
        case "hisstory":
            $('div#content').html(load_hisstory())
            break;
        default:
            $('div#content').html("da fuq")
    }
};

function load_home() {
    home = `<div class="text-center">
        <span class="text-uppercase font-weight-bold">recent news</span>: nothing :)
    </div>`
    return home
};

function load_blog() {
    blog = `<div class="text-center">
        stupid fruit likes to make stupid stuff. maybe they won't even be fruits
    </div>`
    return blog
};

function load_hisstory() {
    hisstory = `
    <div class="text-center">
        <div class="row">
            <div class="col-md">
                <a href="img/01.jpg" data-toggle="lightbox">
                    <img src="img/01.jpg" height="128px" />
                </a>
            </div>
            <div class="col-md">
                <a href="img/02.jpg" data-toggle="lightbox">
                    <img src="img/02.jpg" height="128px" />
                </a>
            </div>
            <div class="col-md">
                <img src="img/03.png" height="128px" />
            </div>
            <div class="col-md">
            </div>
        </div>
    </div>
    `
    // <div class="row">
    //     <div class="col-md">
    //         <img src="img/01.png" height="128px" />
    //     </div>
    //     <div class="col-md">
    //         <img src="img/02.png" height="128px" />
    //     </div>
    //     <div class="col-md">
    //         <img src="img/03.png" height="128px" />
    //     </div>
    //     <div class="col-md">
    //         <img src="img/04.png" height="128px" />
    //     </div>
    // </div>
    // <div class="row">

    //     <div class="col-md">
    //         <img src="img/01.png" height="128px" />
    //     </div>
    //     <div class="col-md">
    //         <img src="img/02.png" height="128px" />
    //     </div>
    //     <div class="col-md">
    //         <img src="img/03.png" height="128px" />
    //     </div>
    //     <div class="col-md">
    //         <img src="img/04.png" height="128px" />
    //     </div>
    // </div>

    return hisstory
}

function titleChanger() {
    let curTitle = $('title').html();
    let rando = Math.floor(Math.random(curTitle.length)*10)
    let pick = curTitle[rando]
    if (pick != " "){
        if (pick === pick.toUpperCase()) {
            pick = pick.toLowerCase()
        } else {
            pick = pick.toUpperCase()
        }
    }
    newTitle = curTitle.replaceAt(rando, pick)
    // console.log(`${rando} ${pick} ${newTitle}`)
    $('title').html(newTitle)
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}