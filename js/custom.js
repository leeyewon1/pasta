$(function () {
    $('.mopen').on('click', function () {
        $('#gnb').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('.main_portfolio_slide').slick({
        arrows: false,
        dots: false,
    });

    $('.main_portfolio .arrows .left').on('click', function () {
        $('.main_portfolio_slide').slick('slickPrev');
    });
    $('.main_portfolio .arrows .right').on('click', function () {
        $('.main_portfolio_slide').slick('slickNext');
    });




    $('.main_customer .left_tab .tab_tit>li a').on('click', function (e) {
        // 1. a를 클릭했을 떄 새로고침 되지않게 하기
        e.preventDefault();
        // 2. 번호를 받아오기
        let idx = $(this).parent().index();
        // 3. 번호에 부합하는 .tab_con>li를 보야주기
        $('.main_customer .left_tab .tab_con>li').removeClass('on');
        $('.main_customer .left_tab .tab_con>li').eq(idx).addClass('on');

        //4. 메뉴에 스타일 붙이기
        $('.main_customer .left_tab .tab_tit>li').removeClass('on');
        $('.main_customer .left_tab .tab_tit>li').eq(idx).addClass('on');
    });
})