
const barra = document.querySelector(".barraCarga");
const alto = document.body.clientHeight;

window.addEventListener("scroll", () => {
    barraDeCarga();
});

const barraDeCarga = () => {
    let anchoBarra = (window.scrollY * 100) / alto;
    barra.style.width = `${anchoBarra}%`;
}