function show_button()
{
    $("#go-back-button").removeClass("disappear-button-animation");
    $("#go-back-button").addClass("appear-button-animation");
}

function remove_button() {
    $("#go-back-button").addClass("disappear-button-animation");
    $("#go-back-button").removeClass("appear-button-animation");
}

$(document).ready(function() {
    var NavY = $('#nav').offset().top;

    var NavFill = function() {
        var ScrollY = $(window).scrollTop();

        if (ScrollY > 0) {
            // wysun
            $("#nav-background").removeClass('back-stretch-class-animation');
            $("#nav-background").addClass('stretch-class-animation');

            show_button();

        }
        else {
            // schowaj
            $("#nav-background").removeClass('stretch-class-animation');
            $("#nav-background").addClass('back-stretch-class-animation');

            remove_button();
        }
    };

    NavFill();

    $(window).scroll(function() {
        NavFill();
    });
});

