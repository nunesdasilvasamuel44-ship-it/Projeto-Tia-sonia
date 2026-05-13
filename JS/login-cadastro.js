const FORM_CADASTRAR = document.getElementById("form-cadastrar");

if (FORM_CADASTRAR) {
    FORM_CADASTRAR.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let temErro = false; 

        const campoEmail = document.getElementById("email");
        const erroEmail = document.getElementById("erro-email");
        const emailDigitado = campoEmail.value;

        const bancoDeDados = localStorage.getItem("usuarioCadastro");
        let emailJaExiste = false;

        if (bancoDeDados) {
            const usuarioEncontrado = JSON.parse(bancoDeDados);
            if (emailDigitado === usuarioEncontrado.email) {
                emailJaExiste = true;
            }
        }

        if (emailJaExiste) {
            erroEmail.innerText = "Este e-mail já está cadastrado no sistema!";
            campoEmail.classList.add("erro-input");
            temErro = true;
        } else {
            erroEmail.innerText = "";
            campoEmail.classList.remove("erro-input");
            campoEmail.classList.add("sucesso-input");
        }

        const campoSenha = document.getElementById("senha");
        const erroSenha = document.getElementById("erro-senha");
        const senhaDigitada = campoSenha.value;

        if (senhaDigitada.length < 6) {
            erroSenha.innerText = "Sua senha é muito curta. Mínimo de 6 caracteres!";
            campoSenha.classList.add("erro-input");
            temErro = true;
        } else {
            erroSenha.innerText = "";
            campoSenha.classList.remove("erro-input");
            campoSenha.classList.add("sucesso-input");
        }

        const campoDDD = document.getElementById("ddd");
        const erroDDD = document.getElementById("erro-ddd");
        const dddDigitado = campoDDD.value;

        if (dddDigitado.length !== 2) {
            erroDDD.innerText = "O DDD precisa de exatamente 2 números.";
            campoDDD.classList.add("erro-input");
            temErro = true;
        } else {
            erroDDD.innerText = "";
            campoDDD.classList.remove("erro-input");
            campoDDD.classList.add("sucesso-input");
        }

        if (temErro === true) {
            return; 
        }

        const usuario = {
            nome: document.getElementById("nome").value,
            sobrenome: document.getElementById("sobrenome").value,
            email: emailDigitado,
            senha: senhaDigitada,
            ddd: dddDigitado,
            telefone: document.getElementById("telefone").value,
            endereco: document.getElementById("endereco").value,
            numero: document.getElementById("numero").value,
            cidade: document.getElementById("cidade").value,
            cep: document.getElementById("cep").value,
            dataNascimento: document.getElementById("data-nascimento").value,
            genero: document.getElementById("genero").selectedOptions[0].text, 
        };

        localStorage.setItem("usuarioCadastro", JSON.stringify(usuario));
        alert("Cadastro Realizado com SUCESSO!"); 
        window.location.href = "login.html";
    });
}

const FORM_LOGIN = document.getElementById("form-logar");

if (FORM_LOGIN) {
    FORM_LOGIN.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const usuarioCadastro = localStorage.getItem("usuarioCadastro");

        if (usuarioCadastro) {
            const usuarioEncontrado = JSON.parse(usuarioCadastro);
            const emailDigitado = document.getElementById("email").value;
            const senhaDigitada = document.getElementById("senha").value;

            if (emailDigitado === usuarioEncontrado.email && senhaDigitada === usuarioEncontrado.senha) {
                alert("Usuário Logado com Sucesso!");
                window.location.href = "index.html"; 
            } else {
                alert("ATENÇÃO: Email ou Senha Incorretos. Tente novamente.");
            }

        } else {
            alert("Nenhum usuário cadastrado encontrado no sistema.");
        }
    });
}
