(function($) {
    console.log("lol get out of here you nerd.")
    console.log(`           ████
             ██                    
             ████                  
               ██                  
               ▒▒▒▒▒▒              
             ▒▒▒▒▒▒▒▒▒▒            
           ▒▒▒▒▒▒▒▒▒▒▒▒            
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒          
           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒        
           ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒      
         ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒    
         ▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒  
       ▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒▒▒▒▒  
       ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒      ▒▒▒▒▒▒
     ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒  ▒▒  ▒▒▒▒
     ▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒  ▒▒  ▒▒▒▒▒▒
     ▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒  ▒▒      ▒▒▒▒
     ▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒  ▒▒▒▒▒▒
     ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒▒▒▒
       ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  
         ▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒    
           ▒▒▒▒▒▒▒▒██▒▒▒▒▒▒ `)   
    window.setInterval(function () {
        titleChanger();
    }, 400);
    var originalPageTitle = document.title;
    var changeTitleTimeout;
    $(document).on('visibilitychange', (e) => {
        clearTimeout(changeTitleTimeout)
        setInterval(changeTitle(originalPageTitle), 200);
    })
    $('.finger').each(function () {
        this.addEventListener('click', function () {
            console.log('lol')
            if ($('#secret').prop('hidden') == true) {
                $('#secret').removeAttr('hidden')
            }
            if ($('#vid').prop('hidden') == true) {
                $('#vid').removeAttr('hidden')
            }
        })
    })
    
})(jQuery);

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function changeTitle(originalPageTitle) {
    document.title = document.hidden ? "Please come back :(" : originalPageTitle;
}

function titleChanger() {
    let curTitle = $('title').html();
    let rando = Math.floor(Math.random(curTitle.length) * 10)
    let pick = curTitle[rando]
    if (pick != " ") {
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

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

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
        <span class="text-uppercase font-weight-bold">recent news</span>: July Survey? or a sale :)
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

