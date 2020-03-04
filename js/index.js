setTimeout(function() {
  $("body").removeClass("cloak");

  $(document).on("scroll", function() {
    $.each($(".image"), function() {
      for (let index = 0; index < 1000; index++) {
        this.style.width = this.offsetWidth + "px";
        this.style.filter = "hue-rotate(" + (window.scrollY % 360) + "deg)";
      }
    });

    var nextHeight = window.scrollY + 70;
    $(".logo").css("top", nextHeight);
  });
}, 1500);
