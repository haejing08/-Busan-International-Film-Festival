// language img 클릭했을때

$(document).ready(function () {
  $(".lan_img").click(function () {
    $(".language_list").toggle();
  });
});

//poster 슬라이드 slick 이용
$(function () {
  $(".poster_list").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
  });
});

//top버튼 부드럽게
$(function () {
  $(document).ready(function () {
    $(".top_btn").click(function () {
      $("body,html").animate({ scrollTop: 0 }, 600);
    });
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
