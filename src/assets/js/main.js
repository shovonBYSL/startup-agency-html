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
  $scrolling = $(this).scrollTop();

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

$(window).on("load", () => {
  $scrolling = $(this).scrollTop();

  if ($scrolling < 50) {
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

$("#tabs-nav li:first-child").addClass("active");
$(".tab-content").hide();
$(".tab-content:first").show();

// Click function
$("#tabs-nav li").click(function () {
  $("#tabs-nav li").removeClass("active");
  $(this).addClass("active");
  $(".tab-content").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});

// about modal
$(".modalToggle").on("click", () => {
  $(".modalMain").addClass("bg-black/40 !visible");
  $(".modal").addClass("!visible");
  document.body.style.overflow = "hidden";
});

$(".closeModal, .modalMain").on("click", () => {
  $(".modalMain").removeClass("bg-black/40 !visible");
  $(".modal").removeClass("!visible");
  document.body.style.overflow = "";
});

// accordion
$(".toggle").click(function (e) {
  e.preventDefault();

  let $this = $(this);

  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find("li .inner").removeClass("show");
    $this.parent().parent().find("li .inner").slideUp(350);
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }

  $this.parent().parent().find(".toggle").removeClass("spin");
  $this.addClass("spin");
});
