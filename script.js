const html = document.querySelector('html');
const BtnFoco = document.querySelector('.app__card-button--foco');
const BtnCurto = document.querySelector('.app__card-button--curto');
const BtnLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const contadorEl = document.getElementById("contador");
const Btns = document.querySelectorAll(".app__card-button")
const musicaFocoInput =  document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

musicaFocoInput.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})

BtnFoco.addEventListener("click", () => {
    AlterarContexto('foco')
    BtnFoco.classList.add("active")

});

BtnCurto.addEventListener("click", () => {
    AlterarContexto('descanso-curto')
    BtnCurto.classList.add("active")
});

BtnLongo.addEventListener("click", () => {
    AlterarContexto('descanso-longo')
    BtnLongo.classList.add("active")
});

function AlterarContexto(contexto) {

    Btns.forEach(function (contexto) {
        contexto.classList.remove('active')
    })

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`)

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;
    }
}

