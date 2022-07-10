













// 일반도서 링크저장
// var dayBest_link {}

//일반도서 이미지 저장
var normalBest_img = [['역행자','밀리터리 리뷰 이지','인플레이션에서 살아남기','천연 세제 생활','불편한 편의점'],
['역행자','인플레이션에서 살아남기','아들아 돈공부 해야한다','작별인사','불편한 편의점'],
['역행자','인플레이션에서 살아남기','작별인사','불편한 편의점','원씽']];

// 일반도서 타이틀 저장
var normalBest_title = [['역행자','밀리터리 리뷰 이지 2077','인플레이션에서 살아남기','천연 세제 생활','불편한 편의점'],
['역행자','인플레이션에서 살아남기','아들아, 돈공부 해야한다','작별인사','불편한 편의점'],
['역행자','인플레이션에서 살아남기','작별인사','불편한 편의점','원씽(The One Thing)']];

// 일반도서 작가 저장 
var normalBest_writer = [['자청','편집부','오건영','박철원','김호연'],
['자청','오건영','정선용(정스토리)','김영하','김호연'],
['자청','오건영','김영하','김호연','게리 켈러']];

$(function(){
    
    // 상단 메뉴바 시작
    // 상단 메뉴바 종료

    // 배너영역 시작
    // 배너영역 종료

    // 오늘의 책 영역 시작
    // 오늘의 책 영역 종룍

    // 일반도서 역역 시작
    $('.normalBest_title .day > div').click(function(){
        index = $(this).index();
        $('.normalBest_title .day > div').css('backgroundColor','#9d9d9d');
        $(this).css('backgroundColor','#79b4b7');
        
        $.each()


        $('.normalBest > li img').attr('src',function(index2){
            return 'images/dayBest/'+normalBest_img[index][index2]+'.jpg';
        })
        $('.normalBest > li p a').html(function(index2){
            return '<strong>'+normalBest_title[index][index2]+'</strong><br>'+normalBest_writer[index][index2];
        })
    })
    // 일반도서 역역 종료
})
