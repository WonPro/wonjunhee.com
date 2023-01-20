$(document).ready(function(){
    particlesJS("particles-js",{"particles":{
        "number":{
            "value":80,
            "density":{
                "enable":true,
                "value_area":800
            }
        },
        "color":{
            "value":"#ffffff"
        },
        "shape":{
            "type":"circle"
        },
        "opacity":{
            "value":0.5,
            "random":false
        },
        "size":{
            "value":5,
            "random":true,
        },
        "line_linked":{
            "enable":true,
            "distance":160,
            "color":"#ffffff",
            "opacity":0.5,
            "width":1
        },
        "move":{
            "enable":true,
            "speed":3,
            "out_mode":"out"
        }
    },
    "interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":true,
                "mode":"bubble"
            },
            "onclick":{
                "enable":true,
                "mode":"repulse"
            },
            "resize":true
        },
        "modes":{
            "bubble":{
                "distance":300,
                "size":10,
                "duration":2,
                "opacity":8,
                "speed":1
            },
            "repulse":{
                "distance":200,
                "duration":1
            },
        }
    },
    "retina_detect":true
    });

    var app = document.getElementById('typing');

    var typewriter = new Typewriter(app, {
        loop: true
    });

    typewriter.typeString('Intelligence is nothing without ambition.')
        .pauseFor(1500)
        .deleteAll(20)
        .typeString('I am small, but impressive creative person.')
        .pauseFor(1500)
        .deleteAll(20)
        .typeString('I will always deliver more than expected.')
        .pauseFor(1500)
        .start(20);
    
    $(".mobile_menu").click(function(){
        var $on = $(this).hasClass("on");
        if($on!=true){
            $(this).addClass("on");
            $(this).children("a").html("<i class='fas fa-times'></i>")
            $(".moblie_subMenu").stop().slideDown();
            $(".moblie_subMenu>li>a").click(function(){
                $(".mobile_menu").removeClass("on");
                $(".mobile_menu").children("a").html("<i class='fas fa-bars'></i>")
                $(".moblie_subMenu").stop().slideUp();
                return false;
            });
        }else{
            $(this).removeClass("on");
            $(this).children("a").html("<i class='fas fa-bars'></i>")
            $(".moblie_subMenu").stop().slideUp();
        }        
        return false;
    });

    $("").click(function(){
        $("html, body").animate({scrollTop : $("#direction").offset().top}, 500);
        return false;
    });
    $(".sub_01").click(function(){
        $("html, body").animate({scrollTop : $("#intro").offset().top}, 500);
        return false;
    });
    $(".sub_02, .btn_read").click(function(){
        $("html, body").animate({scrollTop : $("#direction").offset().top}, 500);
        return false;
    });
    $(".sub_03").click(function(){
        $("html, body").animate({scrollTop : $("#ability").offset().top}, 500);
        return false;
    });
    $(".sub_04").click(function(){
        $("html, body").animate({scrollTop : $("#portfolio").offset().top}, 500);
        return false;
    });
    $(".sub_05").click(function(){
        $("html, body").animate({scrollTop : $("#contact").offset().top}, 500);
        return false;
    });

});