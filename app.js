const aside = document.getElementById("aside");
const topAside = aside.offsetTop;

window.addEventListener("scroll", () => {
    if (window.scrollY > topAside) {
        aside.style.position = "fixed";
    } else {
        aside.style.position = "relative";
        aside.style.alignItems = "flex-start";
    }

    if (window.scrollY > 9330) {
        aside.style.position = "relative";
        aside.style.alignItems = "flex-end";
    }
});