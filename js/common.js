// 일반화면 상단메뉴 스크립트

$(function(){


    // 상단메뉴 토글
    var menuSW = false;
    $('#menuBar h2').on('click',function(){
        menuSW=!menuSW;
        if(menuSW){
            $('.menuBar_drop').css('display','block');
            setTimeout(function(){
                $('.menuBar_drop').css({
                    opacity:'1',
                    height:'200px'
                });
            },100)
            $('#menuBar h2').html('<i class="fa fa-times" aria-hidden="true"></i><span class="hidden">메뉴바</span>');
        }else{
            $('.menuBar_drop').css({
                opacity:'0',
                height:'0px'
            });
            setTimeout(function(){
                $('.menuBar_drop').css('display','none');
            },100);
            $('#menuBar h2').html('<i class="fa fa-bars" aria-hidden="true"></i><span class="hidden">메뉴바</span>');
        }


    });
});

