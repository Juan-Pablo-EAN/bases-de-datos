const aside = document.getElementById("aside");
const articulo = document.querySelector(".articulo");
const criterios = document.getElementById("criterios");
const footer = document.querySelector(".ft");
const topAside = aside.offsetTop;
const barra = document.querySelector(".barraCarga");
const alto = document.body.clientHeight;

window.addEventListener("scroll", () => {
    efectoAside();
    barraDeCarga();
});

const efectoAside = () => {
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
}

const barraDeCarga = () => {
    let anchoBarra = (window.scrollY * 100) / alto;
    barra.style.width = `${anchoBarra}%`;
}