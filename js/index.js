document.addEventListener("scroll", () => {
  const logoContainer = document.getElementById("logoContainer");
  if (window.scrollY > 50) {
    logoContainer.classList.add("shrink");
  } else {
    logoContainer.classList.remove("shrink");
  }
});