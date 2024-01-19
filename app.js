let listaSorteados = [];
let tentativas;
let numeroSecreto;
let maiorNumero = 10;
configuraInicio();

function configuraInicio(){
    limparCampo();
    tentativas = 0;
    numeroSecreto = gerarNumeroAleatorio();
    exibirTexto('h1','Jogo do número secreto');
    exibirTexto('p',`Escolha um número entre 1 a ${maiorNumero}`);
}

function gerarNumeroAleatorio() {
    let escolhido = parseInt(Math.random() * maiorNumero + 1);
    if(listaSorteados.length == maiorNumero){
        listaSorteados = [];
    }

    if (listaSorteados.includes(escolhido)){
        return gerarNumeroAleatorio()
    }
    listaSorteados.push(escolhido);
    console.log(listaSorteados)
    return escolhido;
}

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute(){
    tentativas++;
    let plural = tentativas > 1 ? 's' : '';
    let chute = document.querySelector('input').value;
    limparCampo();
    if(chute == numeroSecreto){
        exibirTexto('h1','Acertou!');
        exibirTexto('p', `Você descobriu o número secreto com ${tentativas} tentativa${plural}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (chute < numeroSecreto){
        exibirTexto('p', `O número secreto é maior que ${chute}.`);
    }
    else {
        exibirTexto('p', `O número secreto é menor que ${chute}.`);
    }
}

function limparCampo(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo(){
    configuraInicio();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}