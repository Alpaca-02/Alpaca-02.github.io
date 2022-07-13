// var bookCount = $('#bookCount').val();
// var oriPrice = $('.oriPrice').slice(0,-2);

$(function(){
    // 결제 혜택 토글
    $('#bookInfo .bookExp .event span').on('click',function(){
        $('#bookInfo .bookExp .event ul').toggle();
    });


    // 책 수량별 가격 계산
    var bookCount = $('#bookCount').val();
    var oriPrice = parseInt($('.oriPrice').html().slice(0,-1));
    var disPrice = parseInt($('.disPrice').html().slice(0,-1));

    $('#bookCount').on('change',function(){
        var bookCount = $('#bookCount').val();
        $('.oriPrice').html(oriPrice*bookCount+'원');
        $('.disPrice').html(disPrice*bookCount+'원');
    });
});