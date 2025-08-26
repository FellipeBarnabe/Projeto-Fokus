const html = document.querySelector('html');
const BtnFoco = document.querySelector('.app__card-button--foco');
const BtnCurto = document.querySelector('.app__card-button--curto');
const BtnLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector(".app__image");

BtnFoco.addEventListener("click",() =>{
    AlterarContexto('foco')

});

BtnCurto.addEventListener("click",()=>{
    AlterarContexto('descanso-curto')
});

BtnLongo.addEventListener("click",() =>{
    AlterarContexto('descanso-longo')
});

function AlterarContexto(contexto){
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`)
}