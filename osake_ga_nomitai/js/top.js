$(function () {
  fadeIn("section[class^='top-']");
  changeScale("section[class^='top-info'] img");
  $(window).on("scroll resize", function () {
    fadeIn("section[class^='top-']");
    fadeIn("section[class^='top-info'] img");
    changeScale("section[class^='top-info'] img");
  });
});
// フェードイン（スクロール）
function fadeIn(selector) {
  $(selector).each(function () {
    var target = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    if (scroll > target - height) {
      $(this).addClass("active");
    }
  });
}
function changeScale(selector) {
  // 複数の要素の位置を取得する
  $(selector).each(function () {
    var scrAction = $(this),
      secTop = scrAction.offset().top,
      scrTop = $(window).scrollTop();
    // 代入する変数を取得
    var topY = (scrTop - secTop) / 3;
    var scaleO = 1.0 + (scrTop - secTop) / 5000;
    var opacityO = 1.3 + (scrTop - secTop) / 750;
    // 「スクロール量」が「要素の出現位置」を500px越えるまで変化させる
    if (scrTop - secTop <= 50) {
      $(this).css({ transform: "scale(" + scaleO + "," + scaleO + ")", opacity: opacityO, top: topY });
    }
  });
}
