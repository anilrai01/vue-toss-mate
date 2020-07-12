window.addEventListener("scroll", () => {
  const navBar = document.getElementById("myNav");
  const scrollY = window.scrollY;
  if (scrollY > 150 && !navBar.classList.contains("transform-nav")) {
    console.log("Increase");
    navBar.classList.add("transform-nav");
  } else if (scrollY < 150 && navBar.classList.contains("transform-nav")) {
    console.log("Decrease");
    navBar.classList.remove("transform-nav");
  }
});
