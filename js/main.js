document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () { nav.classList.toggle("open"); });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  var filterButtons = document.querySelectorAll(".filters button");
  var books = document.querySelectorAll(".book-card");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var kind = btn.getAttribute("data-filter");
      books.forEach(function (book) {
        var show = kind === "all" || book.getAttribute("data-cat") === kind;
        book.style.display = show ? "block" : "none";
      });
    });
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("show"); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { observer.observe(el); });

  // 兜底：避免在不支持 IntersectionObserver 的环境或自动截图中内容保持隐藏
  setTimeout(function () {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("show"); });
  }, 600);

  var year = document.getElementById("year");
  if (year) { year.textContent = new Date().getFullYear(); }
});
