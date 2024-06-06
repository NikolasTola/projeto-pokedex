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
