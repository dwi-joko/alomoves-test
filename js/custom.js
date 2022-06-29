$(document).ready(function () {
  $(".team-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    autoplaySpeed: 2000,
    arrow: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          arrow: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrow: false,
        },
      },
    ],
  });
});
