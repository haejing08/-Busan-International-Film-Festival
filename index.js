// top버튼 부드럽게
$(function () {
  $(document).ready(function () {
    $(".top_btn").click(function () {
      $("body,html").animate({ scrollTop: 0 }, 600);
    });
  });
});

// language img 클릭했을때
$(document).ready(function () {
  $(".language").click(function () {
    $(".lan_list").toggle();
  });
});

//poster 슬라이드 slick 이용
$(function () {
  $(".poster_list").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    prevArrow: $("#prev01"),
    nextArrow: $("#next01"),
  });
});

//이미지2개넘어가기
$(function () {
  $("#slide").slick({
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 400,
    fade: true,
    cssEase: "linear",
    prevArrow: $("#prev"),
    nextArrow: $("#next"),
  });
});

//메뉴 슬라이드
$(function () {
  $(".none_list").hide();
  $(".menu_list").mouseenter(function () {
    $(".none_list").stop().slideDown(300);
  });
  $(".list01 ul").mouseleave(function () {
    $(".none_list").stop().slideUp(200);
  });
});

//poster 슬라이드 jquery

// $(function () {
//   $(".poster_list:nth-child(n+7)").prependTo(".poster_list");
//   $(".next").click(function () {
//     $(".poster_list").animate({ marginLeft: -900 }, function () {
//       $(".poster_list:nth-child(n+7)").appendTo(".poster_list");
//     });
//   });
//   $(".prev").click(function () {
//     $(".poster_list").animate({ marginLeft: 0 }, function () {
//       $(".poster_list:nth-child(n+7)").prependTo(".poster_list");
//     });
//   });
// });
