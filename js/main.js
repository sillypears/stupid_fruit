$(function() {
    $('div#content').html(load_home())
})(jQuery);

function toggle(section) {
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
        <div id="marquee">
            <p>Honestly just go to Instagram</p>
        </div>
    `
    return hisstory
}

