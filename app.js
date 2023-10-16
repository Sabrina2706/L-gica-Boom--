let listaDeNumerosSorteados=[];
let numeroLimite=70;
let numeroSecreto=gerarNumeroAleatorio();
let tentativas= 1;

function exibirTextoNaTela(tag,texto){
let campo= document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Lógica Boom!');
exibirTextoNaTela('p',`Escolha um número entre 1 e 10`);

}
    exibirMensagemInicial();

function verificarChute(){
    let chute =document.querySelector('input').value;
    let palavraTentativas= tentativas > 1 ? 'tentativas' : 'tentativa' 
    if(chute == numeroSecreto){
       let mensagemTentativa=`Parabéns você impediu a bomba de explodir! , Com ${tentativas} ${palavraTentativas}!`
        exibirTextoNaTela('h1','A resposta está EEEEEExata!');
        exibirTextoNaTela('p',mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p',`O seu chute, ${chute} , é maior que a senha da bomba`);
        }else{
            exibirTextoNaTela('p',`O seu chute , ${chute} , é menor que a senha da bomba` );
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
     let numeroEscolhido= parseInt(Math.random()* numeroLimite + 1);
     let quantidadeDeElementosNaLista=listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista==numeroLimite) {
        listaDeNumerosSorteados=[];
     } 
     if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
     }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
     }
}

function limparCampo() {
    chute=document.querySelector('input');
    chute.value='';
}

function reiniciarJogo() {
    numeroSecreto= gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
   
}   