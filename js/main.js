$(document).ready(function(){
    const body = $("body");
    //바로가기 메뉴 제어(첫화면에서는 서브메뉴 바로가기가 필요없음)
    $("#skip a:eq(2)").hide();
    //메인 배너 Slick Slide
    $(".main-banner").slick({
        
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        infinite: true,
        dots: true,
        fade:true,
        centerMode: true,
        cssEase: 'linear',
        appendArrows: $('.main-banner-controls'),
        appendDots: $('.main-banner-pagination'),
        responsive: [
            {
                breakpoint: 1280, //미만
                settings: {
                    slidesToShow: 1,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 768, //미만 
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });
    $(".main-offer").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 3,
        arrows:false,
        responsive: [
            {
                breakpoint: 1280, //미만
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, //미만 
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });
});