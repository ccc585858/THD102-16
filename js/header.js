// let hamburger_line = document.getElementsByClassName("hamburger_line")[0];

// hamburger_line.addEventListener("click", function () {
//   console.log(this.parentElement);
//   this.parentElement.classList.toggle("active");
// });

$(function () {
  $(".hamburger").on("click", function () {
    $(".top ul").slideToggle(1000);
  });
});
