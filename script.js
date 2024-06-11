const setaCima = document.querySelector('#setaCima');
const setaCimaCorpo = setaCima.querySelector('.corpoCima');
const setaCimaBaixo = setaCima.querySelector('.pontaCima');

const setaDireita = document.querySelector('#setaDireita');
const setaDireitaCorpo = setaDireita.querySelector('.corpoDireita');
const setaDireitaBaixo = setaDireita.querySelector('.pontaDireita');

const setaBaixo = document.querySelector('#setaBaixo');
const setaBaixoCorpo = setaBaixo.querySelector('.corpoBaixo');
const setaBaixoBaixo = setaBaixo.querySelector('.pontaBaixo');

const setaEsquerda = document.querySelector('#setaEsquerda');
const setaEsquerdaCorpo = setaEsquerda.querySelector('.corpoEsquerda');
const setaEsquerdaBaixo = setaEsquerda.querySelector('.pontaEsquerda');

const ledPesquisa = document.querySelector('#ledPesquisa');
const ledPesquisaVermelho = ledPesquisa.querySelector('.ledVermelho');
const ledPesquisaAmarelo = ledPesquisa.querySelector('.ledAmarelo');
const ledPesquisaVerde = ledPesquisa.querySelector('.ledVerde');
const luzLedPesquisaVerde = ledPesquisaVerde.querySelector('.luz');
const luzLedPesquisaVermelho = ledPesquisaVermelho.querySelector('.luz');
const luzLedPesquisaAmarelo = ledPesquisaAmarelo.querySelector('.luz');

const ledGrande = document.querySelector('#ledGrande');
const ledGrandeLed = ledGrande.querySelector('.led');
const ledGrandeLuz = ledGrandeLed.querySelector('.luz');

const ledClick = document.querySelector('.ledGrandeAmarelo');
const ledClickLuz = ledClick.querySelector('.luz');
const audioClick = document.querySelector('#audioClick');

function acendeLedPesquisaVerde(){
    ledPesquisaAmarelo.setAttribute('style', 'background-color: var(--ledP-amarelo);');
    luzLedPesquisaAmarelo.setAttribute('style', 'background-color: var(--ledP-amarelo-luz);');
    ledPesquisaVermelho.setAttribute('style', 'background-color: var(--ledP-vermelho);');
    luzLedPesquisaVermelho.setAttribute('style', 'background-color: var(--ledP-vermelho-luz);');
    ledPesquisaVerde.setAttribute('style', 'background-color: var(--ledP-verde-aceso);  box-shadow: 0px 0px 20px 5px var(--ledP-verde-aceso);');
    luzLedPesquisaVerde.setAttribute('style', 'background-color: var(--ledP-verde-luz-aceso);');

}

function acendeLedPesquisaVermelho(){
    ledPesquisaAmarelo.setAttribute('style', 'background-color: var(--ledP-amarelo);');
    luzLedPesquisaAmarelo.setAttribute('style', 'background-color: var(--ledP-amarelo-luz);');
    ledPesquisaVermelho.setAttribute('style', 'background-color: var(--ledP-vermelho-aceso); box-shadow: 0px 0px 20px 5px var(--ledP-vermelho-aceso);');
    luzLedPesquisaVermelho.setAttribute('style', 'background-color: var(--ledP-vermelho-luz-aceso);');
    ledPesquisaVerde.setAttribute('style', 'background-color: var(--ledP-verde);');
    luzLedPesquisaVerde.setAttribute('style', 'background-color: var(--ledP-verde-luz);');
}

function acendeLedPesquisaAmarelo(){
    ledPesquisaAmarelo.setAttribute('style', 'background-color: var(--ledP-amarelo-aceso); box-shadow: 0px 0px 20px 5px var(--ledP-amarelo-aceso);');
    luzLedPesquisaAmarelo.setAttribute('style', 'background-color: var(--ledP-amarelo-luz-aceso);');
    ledPesquisaVermelho.setAttribute('style', 'background-color: var(--ledP-vermelho);');
    luzLedPesquisaVermelho.setAttribute('style', 'background-color: var(--ledP-vermelho-luz);');
    ledPesquisaVerde.setAttribute('style', 'background-color: var(--ledP-verde);');
    luzLedPesquisaVerde.setAttribute('style', 'background-color: var(--ledP-verde-luz);');
}

function acendeLedGrande(){
    ledGrandeLed.setAttribute('style', 'background-color: var(--ledGrande-aceso); box-shadow: 0px 0px 20px 5px var(--ledGrande-aceso);');
    ledGrandeLuz.setAttribute('style', 'background-color: var(--ledGrande-luz-aceso);');
}

function apagaLedGrande(){
    ledGrandeLed.setAttribute('style', 'background-color: var(--ledGrande);');
    ledGrandeLuz.setAttribute('style', 'background-color: var(--ledGrande-luz);');
}

function piscaLedGrande(){
    acendeLedGrande();
    setTimeout(() => {
        apagaLedGrande();
      }, 250);
      setTimeout(() => {
        acendeLedGrande();
      }, 500);
      setTimeout(() => {
        apagaLedGrande();
      }, 750);
}

function acendeLedClick(){
    ledClick.setAttribute('style', 'background-color: var(--ledClick-aceso); box-shadow: 0px 0px 20px 5px var(--ledClick-aceso);');
    ledClickLuz.setAttribute('style', 'background-color: var(--ledClick-luz-aceso);');
}

function apagaLedClick(){
    ledClick.setAttribute('style', 'background-color: var(--ledClick);');
    ledClickLuz.setAttribute('style', 'background-color: var(--ledClick-luz);');
}
function piscaLedClick(){
    audioClick.play();
    acendeLedClick();
    setTimeout(() => {
        apagaLedClick();
      }, 75);
}

setaCima.addEventListener('mouseover', function(){
    setaCimaCorpo.setAttribute('style', 'background-color: blue');
    setaCimaBaixo.setAttribute('style', 'border-top: 15px solid blue');
});

setaCima.addEventListener('mouseout', function(){
    setaCimaCorpo.setAttribute('style', 'background-color: #232323');
    setaCimaBaixo.setAttribute('style', 'border-top: 15px solid #232323');
});

setaDireita.addEventListener('mouseover', function(){
    setaDireitaCorpo.setAttribute('style', 'background-color: blue');
    setaDireitaBaixo.setAttribute('style', 'border-top: 15px solid blue');
});

setaDireita.addEventListener('mouseout', function(){
    setaDireitaCorpo.setAttribute('style', 'background-color: #232323');
    setaDireitaBaixo.setAttribute('style', 'border-top: 15px solid #232323');
});

setaBaixo.addEventListener('mouseover', function(){
    setaBaixoCorpo.setAttribute('style', 'background-color: blue');
    setaBaixoBaixo.setAttribute('style', 'border-top: 15px solid blue');
});

setaBaixo.addEventListener('mouseout', function(){
    setaBaixoCorpo.setAttribute('style', 'background-color: #232323');
    setaBaixoBaixo.setAttribute('style', 'border-top: 15px solid #232323');
});

setaEsquerda.addEventListener('mouseover', function(){
    setaEsquerdaCorpo.setAttribute('style', 'background-color: blue');
    setaEsquerdaBaixo.setAttribute('style', 'border-top: 15px solid blue');
});

setaEsquerda.addEventListener('mouseout', function(){
    setaEsquerdaCorpo.setAttribute('style', 'background-color: #232323');
    setaEsquerdaBaixo.setAttribute('style', 'border-top: 15px solid #232323');
});
