$(function(){
    const loading = $(".loading");

    $(window).on("load",function(){
        loading.remove();
    })

    // 54. 로딩 이후에 가로스크롤 다시 생기도록 설정
    $(window).on('pageshow',function(){
        $('html,body').css({"overflow-x":"hidden","overflow-y":"visible"});
        $('body').css("overflow","visible");
    })

    // 19.캐로셀 옵션 설정
    $('.carousel').carousel({
        interval : 3000
    })
    // 38. 네비 animateScroll plugin 동작구문
    $('.navbar li:nth-child(1) a').click(function(){
        $('#top').animatescroll({padding:85,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(2) a').click(function(){
        $('#design').animatescroll({padding:85,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(3) a').click(function(){
        $('#story').animatescroll({padding:85,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(4) a').click(function(){
        $('#beers').animatescroll({padding:85,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(5) a').click(function(){
        $('#cf').animatescroll({padding:85,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(6) a').click(function(){
        $('#garden').animatescroll({padding:85,easing:'easeInQuart'});
    })
    $('.navbar li:nth-child(7) a').click(function(){
        $('#contact').animatescroll({padding:85,easing:'easeInQuart'});
    })

    // 65. waypoint plugin 동작구문
         // 두번째메뉴 타이틀
    $('.wp1').waypoint(function(direction){
        if(direction==='down'){
            $('.wp1').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp1').waypoint(function(direction){
        if(direction==='up'){
            $('.wp1').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'100%'
    })
        //두번째메뉴 당신의일상
    $('.wp2').waypoint(function(direction){
        if(direction==='down'){
            $('.wp2').addClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'60%'
    })
    $('.wp2').waypoint(function(direction){
        if(direction==='up'){
            $('.wp2').removeClass('animate__animated animate__fadeInLeft');
        }
    },{
        offset:'60%'
    })
        //두번째메뉴 디자인
    $('.wp3').waypoint(function(direction){
        if(direction==='down'){
            $('.wp3').addClass('animate__animated animate__fadeInRight');
        }
    },{
        offset:'50%'
    })
    $('.wp3').waypoint(function(direction){
        if(direction==='up'){
            $('.wp3').removeClass('animate__animated animate__fadeInRight');
        }
    },{
        offset:'60%'
    })

        //세번째메뉴 story
    $('.wp4').waypoint(function(direction){
        if(direction==='down'){
            $('.wp4').addClass('animate__animated animate__pulse');
        }
    },{
        offset:'90%'
    })
    $('.wp4').waypoint(function(direction){
        if(direction==='up'){
            $('.wp4').removeClass('animate__animated animate__pulse');
        }
    },{
        offset:'100%'
    })

      // 네번째메뉴 타이틀
    $('.wp5').waypoint(function(direction){
        if(direction==='down'){
            $('.wp5').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp5').waypoint(function(direction){
        if(direction==='up'){
            $('.wp5').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'100%'
    })

      // 네번째메뉴 남산맥주 내용
    $('.wp6').waypoint(function(direction){
        if(direction==='down'){
            $('.wp6').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp6').waypoint(function(direction){
        if(direction==='up'){
            $('.wp6').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'100%'
    })

    // 네번째메뉴 남산맥주 내용
    $('.wp7').waypoint(function(direction){
        if(direction==='down'){
            $('.wp7').addClass('animate__animated animate__bounceIn animate__slow');
        }
    },{
        offset:'80%'
    })
    $('.wp7').waypoint(function(direction){
        if(direction==='up'){
            $('.wp7').removeClass('animate__animated animate__bounceIn animate__slow');
        }
    },{
        offset:'100%'
    })

      // 네번째메뉴 구미호 내용
    $('.wp8').waypoint(function(direction){
        if(direction==='down'){
            $('.wp8').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp8').waypoint(function(direction){
        if(direction==='up'){
            $('.wp8').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'100%'
    })

    // 네번째메뉴 구미호 내용
    $('.wp9').waypoint(function(direction){
        if(direction==='down'){
            $('.wp9').addClass('animate__animated animate__bounceIn animate__slow');
        }
    },{
        offset:'70%'
    })
    $('.wp9').waypoint(function(direction){
        if(direction==='up'){
            $('.wp9').removeClass('animate__animated animate__bounceIn animate__slow');
        }
    },{
        offset:'100%'
    })

    // 다섯번째메뉴 cf
    $('.wp10').waypoint(function(direction){
        if(direction==='down'){
            $('.wp10').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'70%'
    })
    $('.wp10').waypoint(function(direction){
        if(direction==='up'){
            $('.wp10').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'100%'
    })

      // 여섯번째메뉴 타이틀
    $('.wp11').waypoint(function(direction){
        if(direction==='down'){
            $('.wp11').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'90%'
    })
    $('.wp11').waypoint(function(direction){
        if(direction==='up'){
            $('.wp11').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'100%'
    })

      // 여섯번째메뉴 (1)탭룸
    $('.wp12').waypoint(function(direction){
        if(direction==='down'){
            $('.wp12').addClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'70%'
    })
    $('.wp12').waypoint(function(direction){
        if(direction==='up'){
            $('.wp12').removeClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'100%'
    })

    // 여섯번째메뉴 (2)페스티벌
    $('.wp13').waypoint(function(direction){
        if(direction==='down'){
            $('.wp13').addClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'70%'
    })
    $('.wp13').waypoint(function(direction){
        if(direction==='up'){
            $('.wp13').removeClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'100%'
    })

    // 여섯번째메뉴 (3)팝업스토어
    $('.wp14').waypoint(function(direction){
        if(direction==='down'){
            $('.wp14').addClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'50%'
    })
    $('.wp14').waypoint(function(direction){
        if(direction==='up'){
            $('.wp14').removeClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'100%'
    })

    // 여섯번째메뉴 (4)팝업스토어
    $('.wp15').waypoint(function(direction){
        if(direction==='down'){
            $('.wp15').addClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'50%'
    })
    $('.wp15').waypoint(function(direction){
        if(direction==='up'){
            $('.wp15').removeClass('animate__animated animate__fadeInUp');
        }
    },{
        offset:'100%'
    })

    // 일곱번째메뉴 title
    $('.wp16').waypoint(function(direction){
        if(direction==='down'){
            $('.wp16').addClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'80%'
    })
    $('.wp16').waypoint(function(direction){
        if(direction==='up'){
            $('.wp16').removeClass('animate__animated animate__fadeInDown');
        }
    },{
        offset:'100%'
    })

    // 일곱번째메뉴 내용
    $('.wp17').waypoint(function(direction){
        if(direction==='down'){
            $('.wp17').addClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'60%'
    })
    $('.wp17').waypoint(function(direction){
        if(direction==='up'){
            $('.wp17').removeClass('animate__animated animate__fadeIn');
        }
    },{
        offset:'100%'
    })
})