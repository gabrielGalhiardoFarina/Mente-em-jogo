function validarLogin() {
    let email = email_input.value;
    let senha = senha_input.value;

    if (email.trim() == "" || senha.trim() == "") {
        error_login.innerHTML = "Por favor, preencha todos os campos.";
    } else if (senha.length < 6 || senha.length > 20) {
        error_login.innerHTML = "A senha deve ter entre 6 e 20 caracteres.";
    } else {
        window.location.href = "../public/questionario.html";
    }
}

function validarCadastro() {
    let nome = nome_input.value;
    let email = email_input.value;
    let senha = senha_input.value;
    let confirmacaoSenha = confirmacao_senha_input.value;

    button_cadastrar.disabled = true;
    button_cadastrar.innerHTML = "Cadastrando...";
    
    if (nome.trim() == "" || email.trim() == "" || senha.trim() == "" || confirmacaoSenha.trim() == "") {
        error_cadastro.innerHTML = "Por favor, preencha todos os campos.";
        temErroCadastro();
    } else if (senha.length < 6 || senha.length > 20) {
        error_cadastro.innerHTML = "A senha deve ter entre 6 e 20 caracteres.";
        temErroCadastro();
    } else if (!email.includes("@") || !email.includes(".")) {
        error_cadastro.innerHTML = "Por favor, insira um email válido.";
        temErroCadastro();
    } else if (senha != confirmacaoSenha) {
        error_cadastro.innerHTML = "As senhas não coincidem.";
        temErroCadastro();
    } else if (nome.length < 3 || nome.length > 50) {
        error_cadastro.innerHTML = "O nome deve ter entre 3 e 50 caracteres.";
        temErroCadastro();
    } else {
        fetch("http://localhost:3333/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({
                nomeServer: nome,
                emailServer: email,
                senhaServer: senha,
            }),

        }).then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                error_cadastro.style.color = "green";
                error_cadastro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";
                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

            } else {
                error_cadastro.innerHTML = "Houve um erro ao tentar realizar o cadastro!";
                temErroCadastro();
                throw "Houve um erro ao tentar realizar o cadastro!";

            }
        })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                temErroCadastro();
            });

        return false;
    }
}

function temErroCadastro() {
    button_cadastrar.disabled = false;
    button_cadastrar.innerHTML = "Cadastrar";
}