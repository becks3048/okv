$(function(){
    //페이지 구분
    let page = $("body").attr("id");
    let mainNum = page.slice(3,4); //대메뉴 번호
    let subNum = page.slice(5,6); //서브메뉴 번호
    let lnbActiveNum = page.slice(-1); //현재 메뉴 표시
    
    //메인메뉴 레이블
    let main = ["PRESENTATION","BREAD NOW","PRODUCTS","STORE","DELIVERY","PROMOTION","INFO","고객센터"];
    
    //서브메뉴 레이블
    let sub = [];
    sub[0] = "sub1-1|sub1-2|sub1-3";
    sub[1] = "sub2-1|sub2-2|sub2-3";
    sub[2] = "sub3-1|sub3-2|sub3-3";
    sub[3] = "sub4-1|sub4-2|sub4-3";
    sub[4] = "sub5-1|sub5-2|sub5-3";
    sub[5] = "sub6-1|sub6-2|sub6-3";
    sub[6] = "브랜드소개|창업안내|안전보건경영방침|거래희망사전등록|윤리신고센터|채용";
    sub[7] = "고객칭찬|자주 하는 질문|1:1문의";
    for(let i = 0; i < sub.length; i++){
        sub[i] = sub[i].split("|");
    }

    //서브메뉴 URL
    let subUrl = [];
    subUrl[6] = ["/ov/info_intro.html", "/ov/info_franchise.html", "/ov/info_safety.html", "#", "#", "#"];
    subUrl[7] = ["/g5/bbs/board.php?bo_table=ov_good", "/g5/bbs/board.php?bo_table=ov_fqa", "/g5/bbs/board.php?bo_table=ov_qa"];

    $(".sub-hd-wrap > h2, .ov-container > h1").text(sub[mainNum][subNum]);
    $(".bread-main").text(main[mainNum]);
    $(".bread-sub").text(sub[mainNum][subNum]);
    //서브메뉴(lnb) 리스트 생성
    for(let j = 0; j < sub[mainNum].length; j++){
        $("#ov-lnb").addClass("col-" + sub[mainNum].length);
        $("#ov-lnb").append("<li><a href='" + subUrl[mainNum][j] + "'>" + sub[mainNum][j] + "</a></li>");
    }
    $("#ov-lnb > li:eq("+lnbActiveNum+")").addClass("active");
    
    let scTop = 0;
    const hd = $("#ov-hd");
    let hdH = hd.height();
    const lnb = $(".lnb-container");
    let lnbPos = lnb.offset().top - hdH;

    $(window).resize(function(){
        init();
    });

    function init() {
        hdH = hd.height();
        lnbPos = lnb.offset().top - hdH;
    }

    $(document).scroll(function(){
        scTop = $(document).scrollTop();
        if(scTop > lnbPos){
            lnb.addClass("fixed").css("top", hdH);
        } else {
            lnb.removeClass("fixed").css("top", "inherit");
        }
    });
});