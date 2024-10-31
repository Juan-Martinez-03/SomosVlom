document.querySelectorAll(".faq-title").forEach((item) => {
  item.addEventListener("click", () => {
    const content = item.nextElementSibling;
    const icon = item.querySelector(".icon");
    content.style.display =
      content.style.display === "block" ? "none" : "block";
    icon.classList.toggle("rotate");
  });
});
