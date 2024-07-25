 //AOS.init();
    
 $(function(){
    $(".menu").click(function(){
        $(this).toggleClass("active");
        $(".collapse").slideToggle();
        
    });  

    if(screen.width<768){
        $(".collapse nav a").click(function(){
            $(".menu").removeClass("active");
            $(".collapse").slideUp(0);
        })
    }


    $(".video a, .video button").click(function(e){
        $(".video video").css({opacity:1});
        $(".video .video-text").css({display:"none"});
        $(".video video").trigger("play")
    });

    $("#work .btn").click(function(){
        $("#work .btn").removeClass("active");
        $(this).addClass("active");

        if( $(this).text()=="All" ){
            $(".work").fadeIn();
        }
        else if( $(this).text()=="Website" ){
            $(".work").fadeOut(0);
            $(".web").fadeIn();
        }
        else if( $(this).text()=="Branding" ){
            $(".work").fadeOut(0);
            $(".brand").fadeIn();
        }
    });


    $(".accordion a").click(function(e){
        e.preventDefault();
        if($(this).hasClass("active")){
            $(this).removeClass("active");   
            $(this).next("p").slideUp()
        }
        else{
            $(".accordion a").removeClass();
            $(".accordion p").slideUp();
            $(this).addClass("active");
            $(this).next("p").slideDown();
        }
    });

    $(".top").click(function(){
        $(window).scrollTop(0)
    })

    $(".wrap-7 .seemore").click(function(){
        $(this).children("span").toggleClass("fa-minus-circle")
        $(".wrap-7 .col-4:nth-child(4),.wrap-7 .col-4:nth-child(5),.wrap-7 .col-4:nth-child(6)").slideToggle();
    });

    $(".signup").click(function(){
        $("body").append(`<div class="overlay"></div>`);
        $("body").append(`<div class="popup"></div>`);
        $(".popup").append($(".popupform").html());

        $(".overlay, .cross").click(function(){
            $(".overlay").remove();
            $(".popup").remove();
        });
        $(window).keyup(function(e){
            if(e.which==27){ 
                $(".overlay").remove();
                $(".popup").remove();
            }
        })
    });

    $(".reviews").bxSlider({
        auto:true,
        pause:5000,
        controls:false
    });

});