  // ハンバガーメニューのクリックイベント（スマホナビの表示・非表示）
  $(function () {
    $(document).on('click', '.hamburger-box, .close', function(){
        $('.sp-nav').toggleClass('toggle');
    });
  });

  //フッターのアコーディオンメニュー
  $(function () {
    $(document).on('click', '.js-aco', function(){
      $(this).next().stop().slideToggle();
      $(this).toggleClass('is-active');
    });
  });

  //スライダー
  $('.slider').slick({
    autoplay: false,//自動的に動き出すか。初期値はfalse。
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に何枚見せるか
    slidesToScroll: 1,//1回のスクロールで写真を移動する数
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
    responsive: [
      {
        breakpoint: 959, // 960px以下のサイズに適用
        settings: {
        slidesToShow: 1,
        },
      },
    ],
    });

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
    $('.slider').slick('slickPlay');
});
