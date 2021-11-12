const aside = document.getElementById("aside");
const articulo = document.querySelector(".articulo");
const criterios = document.getElementById("criterios");
const footer = document.querySelector(".ft");
const topAside = aside.offsetTop;
const barra = document.querySelector(".barraCarga");
const alto = document.body.clientHeight;
const redes = document.querySelector(".redes");

window.addEventListener("scroll", () => {
    efectoAside();
    barraDeCarga();
    redesVisibles();
});

const efectoAside = () => {
    if(window.screen.availWidth > 960){
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
}

const barraDeCarga = () => {
    let anchoBarra = (window.scrollY * 100) / alto;
    barra.style.width = `${anchoBarra}%`;
}

const redesVisibles = () => {
    if(window.scrollY > window.screen.availHeight && window.scrollY < (alto - 700)){
        redes.style.display = "flex";
    } else {
        redes.style.display = "none";
    }
}
