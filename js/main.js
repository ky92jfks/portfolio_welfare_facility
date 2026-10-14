$(function(){
  // ページトップボタンの表示・非表示制御
  var $pageTop = $('#page_top_button');
  var scrollTrigger = 300; // 300pxスクロールしたら表示（ファーストビューの高さに合わせて調整可能）

  $(window).scroll(function () {
    if ($(this).scrollTop() > scrollTrigger) {
      // スクロールが300pxを超えたら表示クラスを付与
      $pageTop.addClass('is-show');
    } else {
      // それ以前（ファーストビュー領域）ならクラスを外して隠す
      $pageTop.removeClass('is-show');
    }
  });

  // メニューボタンをクリックした場合
  $('.sp_menu-button').on('click', function() {
    hamburger();
  });

  // クローズボタンをクリックした場合
  $('.sp-menu-close').on('click', function() {
    hamburger();
  });

  // メニュー・スクロール関連処理
  $('.sp_menu-list a').on('click', function() {
    hamburger();
  });

  // ★SP版の全画面メニュー内のリンクをクリックしたとき、メニューを閉じる
  $('.sp-menu-overlay a').on('click', function() {
    hamburger();
  });

  /* ページ内スクロール */
  $('a[href^="#"]').click(function(){
    // スクロールのスピード
    var speed = 500;
    // リンク先を取得
    var href = $(this).attr("href");
    
    // ★ href が "#" または空っぽ（ページトップボタン）の場合の処理
    if (href == "#" || href == "") {
      $("html, body").animate({scrollTop: 0}, speed, "swing");
      return false;
    }

    // それ以外のセクションリンク（#about など）の場合
    var target = $(href);
    if(target.length) {
      var position = target.offset().top;
      $("html, body").animate({scrollTop: position}, speed, "swing");
    }
    return false;
  });

});

// ハンバーガーメニューボタン処理(メニュー・スクロール関連処理)
function hamburger() {
  // メニューボタン（およびその位置）に hidden クラスを付け外しする
  $('.sp_menu-button_position').toggleClass('hidden');

  // メニューがすでに表示されているかどうかで分岐
  if ($('.sp-menu-overlay').is(':visible')) {
    // 表示中なら、フェードアウトして隠す
    $('.sp-menu-overlay').fadeOut(300);
  } else {
    // 非表示なら、フェードインして表示する
    $('.sp-menu-overlay').fadeIn(300);
  }
}

// 下からフェードイン
$(window).scroll(function (){
	$('.fadein').each(function(){
		var elemPos = $(this).offset().top,
		scroll = $(window).scrollTop(),
		windowHeight = $(window).height();

    if (scroll > elemPos - windowHeight + 150){
      $(this).addClass('scrollin');
    }
	});
});