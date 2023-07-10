// let hamburger_line = document.getElementsByClassName("hamburger_line")[0];

// hamburger_line.addEventListener("click", function () {
//   console.log(this.parentElement);
//   this.parentElement.classList.toggle("active");
// });

/* ======================= header =============================== */
$(function () {
  $(".hamburger").on("click", function () {
    $(".top ul").slideToggle(1000);
  });
});

/* ======================= progress ============================== */
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  // console.log(pos);
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // console.log(calcHeight);
  let scrollValue = Math.round((pos * 100) / calcHeight);
  // console.log(scrollValue);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#c1d969 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
