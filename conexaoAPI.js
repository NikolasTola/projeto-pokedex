const telaSecundaria = document.querySelector('#telaSecundaria')
const titulo = telaSecundaria.querySelector('.titulo');
const descricao = telaSecundaria.querySelector('.descricao');
const audioPrincipal = document.querySelector('#audioPrincipal');
const inputPesquisa = document.querySelector('#inputPesquisa');
const botaoPesquisar = document.querySelector('#botaoPesquisar');
const botaoProximo = document.querySelector('#botaoProximo');
const botaoAnterior = document.querySelector('#botaoAnterior');
const ledPesquisa = document.querySelector('#ledPesquisa');
const ledPesquisaVermelho = ledPesquisa.querySelector('.ledVermelho');
const ledPesquisaAmarelo = ledPesquisa.querySelector('.ledAmarelo');
const ledPesquisaVerde = ledPesquisa.querySelector('.ledVerde');
const imagemTelaPrincipal = document.querySelector('#imagemTelaPrincipal');

const botaoPokemonCostas = document.querySelector('#botaoPokemonCostas');
const botaoPokemonFrente = document.querySelector('#botaoPokemonFrente');

const ledNotShiny = document.querySelector('#ledNotShiny');
const ledShiny = document.querySelector('#ledShiny');

const botaoPokemonNomeNum = document.querySelector('#botaoPokemonNomeNum');
const botaoPokemonDescricao = document.querySelector('#botaoPokemonDescricao')
const botaoPokemonTipo = document.querySelector('#botaoPokemonTipo')
const botaoPokemonAlturaPeso = document.querySelector('#botaoPokemonAlturaPeso');
const botaoPokemonSom = document.querySelector('#botaoPokemonSom');
const botaoPokemonHabilidades = document.querySelector('#botaoPokemonHabilidades');
const botaoPokemonCadeiaEvolutiva = document.querySelector('#botaoPokemonCadeiaEvolutiva');
const botaoPokemonStatusBase = document.querySelector('#botaoPokemonStatusBase');
const botaoPokemonShiny = document.querySelector('#botaoPokemonShiny');
const botaoPokemonGenero = document.querySelector('#botaoPokemonGenero');
const estrela = document.querySelector('#estrela');
const simboloMacho = document.querySelector('#maleSymbol');
const simboloFemea = document.querySelector('#femaleSymbol');
var isShiny = false;
var estaDeCostas = false;
var genero = 'macho';


let pokemonAtual = 1;
var dadosPokemon;



const pesquisaPokemon = async (pokemon) => {

    const respostaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(respostaAPI.status == 200){

        const dados = await respostaAPI.json();
        return dados;
    }
    
};

const renderizaPokemon = async (pokemon) =>{
    
    var isShiny = false;
    acendeLedNotShiny();
    titulo.innerHTML = 'Procurando...';
    ledPesquisaVerde.setAttribute('style', 'background-color:#345733;');
    ledPesquisaVermelho.setAttribute('style', 'background-color:#800417;');
    ledPesquisaAmarelo.setAttribute('style', 'background-color:yellow;');
    dadosPokemon = await pesquisaPokemon(pokemon);


    if (dadosPokemon) {
        titulo.innerHTML = dadosPokemon.id + ' - ' + dadosPokemon.name;
        imagemTelaPrincipal.src = dadosPokemon.sprites.front_default;
        audioPrincipal.src = dadosPokemon.cries.latest;
        audioPrincipal.volume = 0.09;
        audioPrincipal.play();

        pokemonAtual = dadosPokemon.id;
        ledPesquisaAmarelo.setAttribute('style', 'background-color:#bda51f;');
        ledPesquisaVermelho.setAttribute('style', 'background-color:#800417;');
        ledPesquisaVerde.setAttribute('style', 'background-color:lightgreen;');
    } else{
        titulo.innerHTML = "Pokemon não encontrado!";
        estrela.setAttribute('style', 'display: none');
        simboloFemea.setAttribute('style', 'display:none');
        simboloMacho.setAttribute('style', 'display:none');
        audioPrincipal.src = '';
        ledShiny.setAttribute('style', 'bacground-color: #800417');
        ledNotShiny.setAttribute('style', 'bacground-color: #141477');
        imagemTelaPrincipal.src = 'erro.png';
        ledPesquisaAmarelo.setAttribute('style', 'background-color:#bda51f;');
        ledPesquisaVerde.setAttribute('style', 'background-color:#345733;');
        ledPesquisaVermelho.setAttribute('style', 'background-color:red;');
    }   
}

function acendeLedNotShiny(){
    ledNotShiny.setAttribute('style', 'background-color: red');
    ledShiny.setAttribute('style', 'background-color: #141477')
}
function acendeLedShiny(){
    ledNotShiny.setAttribute('style', 'background-color: #800417');
    ledShiny.setAttribute('style', 'background-color: blue')
}

window.onload = () => {
    renderizaPokemon(pokemonAtual);
};

inputPesquisa.addEventListener('keypress', function(e){
    if (e.key == 'Enter') {
        if (inputPesquisa.value != "") {
            
            renderizaPokemon((inputPesquisa.value).toLowerCase());
            isShiny = false;
            acendeLedNotShiny();
            estrela.setAttribute('style', 'display: none');
            estaDeCostas = false;
            inputPesquisa.value = "";
        }
        
    }
});
botaoPesquisar.addEventListener('click', function(){
        if (inputPesquisa.value != "") {
            renderizaPokemon((inputPesquisa.value).toLowerCase());
            isShiny = false;
            acendeLedNotShiny();
            estrela.setAttribute('style', 'display: none');
            estaDeCostas = false;
            inputPesquisa.value = "";
        }
});
inputPesquisa.onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
      return false;
};

botaoProximo.addEventListener('click', function(){
    if (pokemonAtual < 1025) {
        genero = 'macho';
        simboloMacho.setAttribute('style', 'display: block');
        simboloFemea.setAttribute('style', 'display: none');
        descricao.innerHTML = "";
        estaDeCostas = false;
        pokemonAtual = pokemonAtual + 1;
        estrela.setAttribute('style', 'display: none');
        isShiny = false
        acendeLedNotShiny();
        renderizaPokemon(pokemonAtual);
    }
});
botaoAnterior.addEventListener('click', function(){
    
    if(pokemonAtual > 1){
        genero = 'macho';
        simboloMacho.setAttribute('style', 'display: block');
        simboloFemea.setAttribute('style', 'display: none');
        descricao.innerHTML = "";
        estaDeCostas = false;
        pokemonAtual = pokemonAtual - 1;
        estrela.setAttribute('style', 'display: none');
        isShiny = false
        acendeLedNotShiny();
        renderizaPokemon(pokemonAtual);
    }
});

botaoPokemonCostas.addEventListener('click', async function(){
    let dados = await pesquisaPokemon(pokemonAtual);
    if (imagemTelaPrincipal.src != 'erro.png' ) {
        if (isShiny) {
            if (genero == 'macho') {
                imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemonAtual}.png`
                acendeLedShiny();
            } else {
                if (dados.sprites.back_female){
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/${pokemonAtual}.png`
                    acendeLedShiny();
                } else {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemonAtual}.png`
                    acendeLedShiny()
                }
            }
        } else{
            if (genero == 'macho') {
                imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonAtual}.png`
                acendeLedNotShiny();
            } else {
                if (dados.sprites.back_female){
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/${pokemonAtual}.png`
                    acendeLedNotShiny();
                } else {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonAtual}.png`
                    acendeLedNotShiny();
                }
            }
        }
        estaDeCostas = true;
    } 
});

botaoPokemonFrente.addEventListener('click', async function(){
    let dados = await pesquisaPokemon(pokemonAtual);
    if (imagemTelaPrincipal.src != 'erro.png' ) {
        if (isShiny) {
            if (genero == 'macho') {
                imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonAtual}.png`
                acendeLedShiny();
            } else {
                if (dados.sprites.back_female){
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${pokemonAtual}.png`
                    acendeLedShiny();
                } else {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonAtual}.png`
                    acendeLedShiny();
                }
            }
        } else{
            if (genero == 'macho') {
                imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonAtual}.png`
                acendeLedNotShiny();
            } else {
                if (dados.sprites.back_female){
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${pokemonAtual}.png`
                    acendeLedNotShiny();
                } else {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonAtual}.png`
                    acendeLedNotShiny();
                }
            }
        }
        estaDeCostas = false;
    } 
});
botaoPokemonNomeNum.addEventListener('click', async function(){
    descricao.innerHTML = ""

    let dados = await pesquisaPokemon(pokemonAtual);
    titulo.innerHTML = dados.id + ' - ' + dados.name;
    
});
botaoPokemonDescricao.addEventListener('click', function(){
    titulo.innerHTML = "";

    descricao.innerHTML = "FUNÇÃO NÃO IMPLEMENTADA..." 
});
botaoPokemonTipo.addEventListener('click', async function(){

    descricao.innerHTML = "";

    let dados = await pesquisaPokemon(pokemonAtual)
    let tipos = dados.types[0].type.name;

    if (dados.types.length > 1) {
        tipos = tipos + " - " + dados.types[1].type.name
    }

    titulo.innerHTML = tipos;
})
botaoPokemonSom.addEventListener('click', function(){
    titulo.innerHTML = '';
    descricao.innerHTML = '';

    audioPrincipal.play();
});
botaoPokemonAlturaPeso.addEventListener('click', function(){
    titulo.innerHTML = '';
    
    descricao.innerHTML = "FUNÇÃO NÃO IMPLEMENTADA..." ;
});

botaoPokemonHabilidades.addEventListener('click', async function(){
    descricao.innerHTML = "";

    let dados = await pesquisaPokemon(pokemonAtual);

    let habilidades = '- ' + dados.abilities[0].ability.name;

    if (dados.abilities.length > 1) {
        for (let i = 1; i < dados.abilities.length; i++) {
            
            if (dados.abilities[i].is_hidden){

                habilidades = habilidades + '\n - ' + dados.abilities[i].ability.name + ' (H)';
            } else {
                habilidades = habilidades + '\n - ' + dados.abilities[i].ability.name;
            }
            
        }
    }
   
    titulo.innerHTML = habilidades;
});
botaoPokemonCadeiaEvolutiva.addEventListener('click', function(){
    titulo.innerHTML = "";

    descricao.innerHTML = "FUNÇÃO NÃO IMPLEMENTADA..."
});
botaoPokemonStatusBase.addEventListener('click', async function(){
    titulo.innerHTML = "";

    let dados = await pesquisaPokemon(pokemonAtual);
    let status = dados.stats[0].stat.name.toUpperCase() + ': ' + dados.stats[0].base_stat;
    for (let i = 1; i < dados.stats.length; i++) {
        
        status =  status + '\n' + dados.stats[i].stat.name.toUpperCase() + ': ' + dados.stats[i].base_stat;
    }
    descricao.innerHTML = status;
})
    

botaoPokemonShiny.addEventListener('click', async function(){
    titulo.innerHTML = '';
    descricao.innerHTML = '';

    let dados = await pesquisaPokemon(pokemonAtual);
    if (estaDeCostas) {
        if(isShiny){
            if (genero == 'macho') {
                imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonAtual}.png`;
                acendeLedNotShiny();
            } else {
                if(dados.sprites.back_female){
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/${pokemonAtual}.png`; 
                    acendeLedNotShiny();
                }
                else{
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonAtual}.png`;
                    acendeLedNotShiny();
                }
             }
            estrela.setAttribute('style', 'display: none');
            isShiny = false 
        } else{
            if (genero == 'macho') {
                imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemonAtual}.png`;
                acendeLedShiny();  
            }
            else{
                if(dados.sprites.back_female){
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/${pokemonAtual}.png`; 
                    acendeLedShiny();
                } else {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemonAtual}.png`;
                    acendeLedShiny();  
                }
            }
            estrela.setAttribute('style', 'display: block');
            isShiny = true;
        }
    } else{
        if(isShiny){
            if (genero == 'macho') {
                imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonAtual}.png`;
                acendeLedNotShiny();
            } else {
                if(dados.sprites.back_female){
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${pokemonAtual}.png`; 
                    acendeLedNotShiny();
                } else {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonAtual}.png`;
                    acendeLedNotShiny();
                }
             }
            estrela.setAttribute('style', 'display: none');
            isShiny = false
        } else{
            if (genero == 'macho') {
                imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonAtual}.png`;
                acendeLedShiny();
            } else {
                if (dados.sprites.back_female){
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${pokemonAtual}.png`;
                    acendeLedShiny();
                } else {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonAtual}.png`;
                    acendeLedShiny();
                }
            }
            estrela.setAttribute('style', 'display: block');
            isShiny = true;
        }
    } 
});

botaoPokemonGenero.addEventListener('click', async function(){
    titulo.innerHTML = '';
    descricao.innerHTML = '';
    
    let dados = await pesquisaPokemon(pokemonAtual);

    if (genero == 'macho'){
        simboloMacho.setAttribute('style', 'display: none');
        simboloFemea.setAttribute('style', 'display: block');

        if (dados.sprites.back_female) {
            if (estaDeCostas) {
                if (isShiny) {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/${pokemonAtual}.png`;
                    acendeLedShiny();
                } else{
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/${pokemonAtual}.png`;
                    acendeLedNotShiny();
                }
            } else {
                if (isShiny) {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/${pokemonAtual}.png`;
                    acendeLedShiny();
                } else{
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/${pokemonAtual}.png`;
                    acendeLedNotShiny();
                }
            }
        }
        genero = 'femea';
    } else {
        simboloMacho.setAttribute('style', 'display: block');
        simboloFemea.setAttribute('style', 'display: none');
            
            if (estaDeCostas) {
                if (isShiny) {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${pokemonAtual}.png`;
                    acendeLedShiny();
                } else {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonAtual}.png`;
                    acendeLedNotShiny();
                }
            } else {
                if (isShiny) {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonAtual}.png`;
                    acendeLedShiny();
                } else {
                    imagemTelaPrincipal.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonAtual}.png`
                    acendeLedNotShiny();
                }
            }
        genero = 'macho';
    }
});