const aside = document.getElementById("aside");
const articulo = document.querySelector(".articulo");
const criterios = document.getElementById("criterios");
const footer = document.querySelector(".ft");
const topAside = aside.offsetTop;

window.addEventListener("scroll", () => {
    if (window.scrollY > topAside) {
        aside.style.position = "fixed";
        aside.style.top = "0px";
    } else {
        aside.style.position = "relative";
        aside.style.alignItems = "flex-start";
    }

    if (window.scrollY > (footer.offsetTop - window.screen.height + 50)) { //50 es el margin bottom que tiene aside
        aside.style.position = "relative";
        aside.style.alignItems = "flex-end";
    }
});