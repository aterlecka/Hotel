(function ($) {
    function floatLabel(inputType) {
        $(inputType).each(function () {
            let $this = $(this);
            $this.focus(function () {
                $this.next().addClass("active");
            });
            $this.blur(function () {
                if ($this.val() === '' || $this.val() === 'blank') {
                    $this.next().removeClass();
                }
            });
        });
    }
    floatLabel(".floatLabel");
})(jQuery);




function showHideFooterLinks(child) {
    if ($(document).width() > 980)
        return;

    let menu = $(child).parent().find('div');
    if (menu.css('display') === "none") {
        menu.css('display', 'flex');
        $(child).find('.fontello-icon').css('transform', 'rotate(-90deg)')
    } else {
        menu.css('display', 'none');
        $(child).find('.fontello-icon').css('transform', 'rotate(90deg)')
    }
}

function showHideHeaderLinks() {
    if ($(document).width() > 980)
        return;
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const card = document.querySelector('.card'),
    input = document.querySelector('.input'),
    line2 = document.querySelector('.line2');
document.querySelector('.form').addEventListener('submit', function(e) {
    input.blur();
    card.classList.add('saving');
    e.preventDefault();
});
line2.addEventListener('animationend', function(e) {
    setTimeout(() => {
        card.classList.add('done');
    }, 1000);
});


