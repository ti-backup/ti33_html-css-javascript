$(document).ready(function(){
    $("h1").click(function(){
        $(this).toggleClass("destaque");
    });

    $("#hide").click(function(){
        $("img[src*='moto01']").hide(3000);
    });

    $("#show").click(function(){
        $("img[src*='moto01']").show(3000);
    });

    $("#slideUp").click(function(){
        $("img[src*='moto02']").slideUp();
    });

    $("#slideDown").click(function(){
        $("img[src*='moto02']").slideDown();
    });

    $("#fadeOut").click(function(){
        $("img[src*='moto03']").fadeOut();
    });

    $("#fadeIn").click(function(){
        $("img[src*='moto03']").fadeIn();
    });

    $("#toggle").click(function(){
        $("img[src*='moto04']").toggle();
    });
});