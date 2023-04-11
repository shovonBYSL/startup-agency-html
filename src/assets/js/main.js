// count up started
$(".count").each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate(
    { Counter: $this.attr("data-stop") },
    {
      duration: 4000,
      easing: "swing",
      step: function (now) {
        $this.text(Math.ceil(now));
      },
    }
  );
});
// count up ended

// navbar scroll start
$(window).scroll(function () {
  var $scrolling = $(this).scrollTop();

  if ($scrolling > 0) {
    $(".scrolledMain").removeClass("lg:w-[950px] xl:w-[1116px] pt-8 2xl:pt-11");
    $(".scrolledMain").addClass("w-full");
    $(".scrolled").removeClass("rounded-2xl");
  } else {
    $(".scrolledMain").addClass("lg:w-[950px] xl:w-[1116px] pt-8 2xl:pt-11");
    $(".scrolledMain").removeClass("w-full");
    $(".scrolled").addClass("rounded-2xl");
  }
});
// navbar scroll end

// side menu bar start
$(".menuToggle").on("click", () => {
  $(".drawerMain").addClass("bg-black/60 !visible");
  $(".drawer").addClass("translate-x-[0%]");
});

$(".closeMenu, .drawerMain").on("click", () => {
  $(".drawerMain").removeClass("bg-black/60 !visible");
  $(".drawer").removeClass("translate-x-[0%]");
});

$(".showDropdown").on("click", () => {
  $(".dropdown").slideToggle();
  $(".showDropdown").toggleClass("spin");
});
// side menu bar end
