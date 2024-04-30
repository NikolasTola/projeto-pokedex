const setaCima = document.querySelector('.setaCima');
const setaCimaCorpo = document.querySelector('.corpoSetaCima');
const setaCimaBaixo = document.querySelector('.baixoSetaCima')

const setaDireita = document.querySelector('.setaDireita');
const setaDireitaCorpo = document.querySelector('.corpoSetaDireita');
const setaDireitaBaixo = document.querySelector('.baixoSetaDireita')

const setaBaixo = document.querySelector('.setaBaixo');
const setaBaixoCorpo = document.querySelector('.corpoSetaBaixo');
const setaBaixoBaixo = document.querySelector('.baixoSetaBaixo')

const setaEsquerda = document.querySelector('.setaEsquerda');
const setaEsquerdaCorpo = document.querySelector('.corpoSetaEsquerda');
const setaEsquerdaBaixo = document.querySelector('.baixoSetaEsquerda')

const ledPequenoVermelho = document.querySelector('.ledPequenoVermelho');
const ledPequenoAmarelo = document.querySelector('.ledPequenoAmarelo');
const ledPequenoVerde = document.querySelector('.ledPequenoVerde');

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







const imagemPokemon = document.querySelector('.imagemPokemon');
/*
const botaoCima = document.querySelector('.setaCima');
const botaoDireita = document.querySelector('.setaDireita');
const botaoBaixo = document.querySelector('.setaBaixo');
const botaoEsquerda = document.querySelector('.setaEsquerda');
const estiloImagem = window.getComputedStyle(imagemPokemon);

var espacoEsquerda = estiloImagem.getPropertyValue('left');
var espacoBaixo = estiloImagem.getPropertyValue('bottom');

botaoCima.addEventListener('click', function(){
    espacoBaixo = estiloImagem.getPropertyValue('bottom');
    espacoBaixo = espacoBaixo.replace(/px/g, "");
    console.log(espacoBaixo);

    if(parseInt(espacoBaixo) < 25){
        espacoBaixo = parseInt(espacoBaixo) + 4;

        imagemPokemon.setAttribute('style', 'bottom:' + espacoBaixo + 'px;');
    }
});

botaoBaixo.addEventListener('click', function(){
    espacoBaixo = estiloImagem.getPropertyValue('bottom');

    espacoBaixo = espacoBaixo.replace(/px/g, "");

    
    if( parseInt(espacoBaixo) > -28){
        espacoBaixo = parseInt(espacoBaixo) - 4;

        imagemPokemon.setAttribute('style', 'bottom:' + espacoBaixo + 'px;');
    }
});

botaoEsquerda.addEventListener('click', function(){
    espacoEsquerda = estiloImagem.getPropertyValue('left');

    espacoEsquerda = espacoEsquerda.replace(/px/g, "");
    if(parseInt(espacoEsquerda) > -20){
        espacoEsquerda = parseInt(espacoEsquerda) - 4;

        imagemPokemon.setAttribute('style', 'left:' + espacoEsquerda + 'px;');
    }
    
});

botaoDireita.addEventListener('click', function(){
    espacoEsquerda = estiloImagem.getPropertyValue('left');

    espacoEsquerda = espacoEsquerda.replace(/px/g, "");
    if(parseInt(espacoEsquerda) < 71){
        espacoEsquerda = parseInt(espacoEsquerda) + 4;

        imagemPokemon.setAttribute('style', 'left:' + espacoEsquerda + 'px;');
    }
});
*/




