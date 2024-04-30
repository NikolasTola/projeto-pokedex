const numNomePokemon = document.querySelector('.titulo');
const cryPokemon = document.querySelector('audio');
const pesquisar = document.querySelector('.pesquisar');
const botaoPesquisar = document.querySelector('.botaoRedondo');
const botaoProx = document.querySelector('.botaoProx');
const botaoAnt = document.querySelector('.botaoAnt');


let pokemonAtual = 1;

const pesquisaPokemon = async (pokemon) => {

    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(respostaAPI.status == 200){

        const dados = await respostaAPI.json();
        return dados;
    }
    
};

const renderizaPokemon = async (pokemon) =>{
    
    numNomePokemon.innerHTML = 'Procurando...';
    ledPequenoVerde.setAttribute('style', 'background-color:#345733;');
    ledPequenoVermelho.setAttribute('style', 'background-color:#800417;');
    ledPequenoAmarelo.setAttribute('style', 'background-color:yellow;');
    const dadosPokemon = await pesquisaPokemon(pokemon);


    if (dadosPokemon) {
        numNomePokemon.innerHTML = dadosPokemon.id + ' - ' + dadosPokemon.name;
        imagemPokemon.src = dadosPokemon.sprites.front_default;
        cryPokemon.src = dadosPokemon.cries.latest;
        cryPokemon.volume = 0.09;
        cryPokemon.play();

        pokemonAtual = dadosPokemon.id;
        ledPequenoAmarelo.setAttribute('style', 'background-color:#bda51f;');
        ledPequenoVermelho.setAttribute('style', 'background-color:#800417;');
        ledPequenoVerde.setAttribute('style', 'background-color:lightgreen;');
    } else{
        numNomePokemon.innerHTML = "Pokemon não encontrado!";
        imagemPokemon.src = 'erroSprite.png';
        ledPequenoAmarelo.setAttribute('style', 'background-color:#bda51f;');
        ledPequenoVerde.setAttribute('style', 'background-color:#345733;');
        ledPequenoVermelho.setAttribute('style', 'background-color:red;');
    }   
}

pesquisar.addEventListener('keypress', function(e){
    if (e.key == 'Enter') {
        if (pesquisar.value != "") {
            
            renderizaPokemon((pesquisar.value).toLowerCase());
            pesquisar.value = "";
        }
        
    }
});
botaoPesquisar.addEventListener('click', function(){
        if (pesquisar.value != "") {
            renderizaPokemon((pesquisar.value).toLowerCase());
            pesquisar.value = "";
        }
});
pesquisar.onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
      return false;
};

botaoProx.addEventListener('click', function(){
    pokemonAtual = pokemonAtual + 1;
    renderizaPokemon(pokemonAtual);
})
botaoAnt.addEventListener('click', function(){
    if(pokemonAtual > 1){
        pokemonAtual = pokemonAtual - 1;
    renderizaPokemon(pokemonAtual);
    }
});
window.onload = () => {
    renderizaPokemon(pokemonAtual);
};

  
