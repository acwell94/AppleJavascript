// 버튼0을 누르면
// 0. 버튼0 버튼 1과 버튼 2에 붙은 주황색 제거
// 0. 내용0, 내용1, 내용2 안보이게 처리
// 1. 저 버튼0이 주황색으로 하이라이트 되어야 함
// 2. 내용 0번째가 보여야함

// for (let i = 0; i < $('.tab-button').length; i++){
// $('.tab-button').eq(i).click(function(){
//     탭열기(i)
// })
// };

    // 셀렉터.dataset.id

$('.list').click(function(e){
    // if(e.target == document.querySelectorAll('.tab-button')[0]){
    //     탭열기(0)
    // }
    탭열기(e.target.dataset.id)
})

function 탭열기(숫자){
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(숫자).addClass('active');
    $('.tab-content').eq(숫자).addClass('show');
}