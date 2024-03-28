
/*.menu > ul > li 속성들에 클릭 할 때마다 active 속성 넣었다 없애기 */ 
$(".menu > ul > li").click(function(e){
    /**/ 
    $(this).siblings().removeClass("active");   /** 다른 active 속성 없애고 지금 누르는 부분만 acitive 속성 추가*/
    $(this).toggleClass("active");

    $(this).find("ul").slideToggle();           //안보이게 해둔 하위 속성 보이게 해줌
    $(this).siblings().find("ul").slideUp();    //열려있는 다른 하위 속성들 닫음

    $(this).siblings().find("ul").find("li").removeClass("active");
});

