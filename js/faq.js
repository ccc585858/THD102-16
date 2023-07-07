$(function () {
  $(".accordion-item").click(function () {
    $(".accordion-item").removeClass("active");

    $(".accordion-content").slideUp(1000);
    // $(this).find(".accordion-content").slideToggle();

    if (!$(this).find(".accordion-content").is(":visible")) {
      $(this).find(".accordion-content").slideDown(1000);
      $(this).addClass("active");
    }
  });
  // 預設 item 第一個是被點擊的狀態
  $(".accordion-item").first().click();
}); // end

let hamburger_line = document.getElementsByClassName("hamburger_line")[0];

hamburger_line.addEventListener("click", function () {
  console.log(this.parentElement);
  this.parentElement.classList.toggle("active");
});
