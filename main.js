
$(document).ready(function() {
    var previousScroll = 0;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > previousScroll) {
            $('.navbar-center').css("display","none");
            //$('.mail').css("width","1080px");
           // $('.mail-content').css("display","flex")
        } else {
            $('.navbar-center').css("display","flex");
            
        }
        
        previousScroll = currentScroll;
    });
    $('.trangchu').click(function(){
        window.location.href="index.html";
    });
    $('.thu').click(function(){
        window.location.href="mail.html";
    });
    $('.gioithieu').click(function(){
        window.location.href="about.html";
    })
    $('.tin1').click(function(){
        window.location.href="tintuchaui.html";
    })
    $('.trangchul').click(function(){
        window.location.href="index.html";
    })
    $('.tintucl').click(function(){
        window.location.href="index.html#tintuc";
    });
    $('.xemthem').click(function(){
        window.location.href="tintucxemthem.html";
    });
    
});
$(document).ready(function() {
    $(".animated-text b span").each(function(index) {
        $(this).css("animation-delay", index * 100 + "ms");
    });
});
$(document).ready(function(){
    var currentSlideIndex = 0;
    var slideCount = $(".panel").length;
    var isAnimating = false;

    function showSlide(index) {
        $(".panel").fadeOut("slow");
        $(".panel").eq(index).fadeIn("slow");
    }

    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= slideCount) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    function previousSlide() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slideCount - 1;
        }
        showSlide(currentSlideIndex);
    }

 

    setInterval(function() {
        if (!isAnimating) {
            nextSlide();
        }
    }, 4000);

    $('.danhSach ul li').click(function(){
        var index = $(this).index();
        if(index !== currentSlideIndex){
            showSlide(index);
            currentSlideIndex = index;
        }
    });

    $('#next').on('click', function(){
        const widthItem = $('.item').outerWidth();
        $('#formList').scrollLeft($('#formList').scrollLeft() + widthItem);
    });
    
    $('#prev').on('click', function(){
        const widthItem = $('.item').outerWidth();
        $('#formList').scrollLeft($('#formList').scrollLeft() - widthItem);
    });
    
});



