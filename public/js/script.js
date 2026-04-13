let porcentagem = 0;
let carregamento_atual = carregamento;
let intervaloCarregamento;
let intervaloTexto;

function carregarTela() {
    tela_login.style.display = 'none';
    tela_carregamento.style.display = 'flex';
    intervaloCarregamento = setInterval(carregar, 30);
    intervaloTexto = setInterval(mudarTexto, 500);
}


function carregar() {
    porcentagem += 1;
    if (porcentagem > 100) {
        clearInterval(intervaloCarregamento);
        clearInterval(intervaloTexto);
        telaHome()
    }
    carregamento_atual.value = porcentagem;
}

function mudarTexto() {
    if (porcentagem % 3 === 0) {
        texto_carregamento.innerHTML = `Entrando...`;
    } else if (porcentagem % 3 === 1) {
        texto_carregamento.innerHTML = `Entrando.`;
    } else if (porcentagem % 3 === 2) {
        texto_carregamento.innerHTML = `Entrando..`;
    }
}

function telaHome() {
    tela_carregamento.style.display = 'none';
    tela_home.style.display = 'flex';
}