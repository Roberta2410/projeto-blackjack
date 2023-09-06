// DANDO BOAS VINDAS AO USUÁRIO

console.log ("Boas vindas ao jogo blackjack!")

//O usuário deve ser questionado se deseja iniciar uma nova rodada

 if (confirm("Deseja iniciar uma nova rodada?")){

    iniciarNovaRodada ()

 } else {
    console.log("O jogo acabou!");
 }
 function iniciarNovaRodada (){
   //chamando a função para sorteio 

   const usuarioCarta1 = comprarCarta() 
   const usuarioCarta2 = comprarCarta() 
   const computadorCarta1 = comprarCarta()
   const computadorCarta2 = comprarCarta()

// Salvando valores das cartas sorteadas 
let valorUsuarioCarta1 = usuarioCarta1.valor 
let valorUsuarioCarta2 = usuarioCarta2.valor 
let valorComputadorCarta1 = computadorCarta1.valor 
let valorComputadorCarta2 = computadorCarta2.valor 

//Salvando texto das cartas 
let textoUsuarioCarta1 = usuarioCarta1.texto
let textoUsuarioCarta2 = usuarioCarta2.texto
let textoComputadorCarta1 = computadorCarta1.texto 
let textoComputadorCarta2 = computadorCarta2.texto 

//Pontuacao de jogador

const pontuacaoUsuario = valorUsuarioCarta1 + valorUsuarioCarta2
const pontuacaoComputador = valorComputadorCarta1 + valorComputadorCarta2
 
//Mostrando as cartas no console 

console.log(`Usuário - Cartas: ${textoUsuarioCarta1} ${textoUsuarioCarta2} - Pontuação: ${pontuacaoUsuario} 
Computador - Cartas: ${textoComputadorCarta1} ${textoComputadorCarta2} - Pontuação: ${pontuacaoComputador}`) 

// Condicional da informação do vencedor 

if(pontuacaoUsuario === pontuacaoComputador){
   console.log ("Empate!")
} else if (pontuacaoUsuario > pontuacaoComputador){
   console.log("Usuário ganhou!")

} else{
   console.log("O computador ganhou")
}

 } 