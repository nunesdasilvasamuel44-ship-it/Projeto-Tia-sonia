const FORM_CADASTRAR = Document.getlementById("form-cadastrar")

if (FORM_CADASTRAR) {

    FORM_CADASTRAR.addEventListener("sumbit", function (event) {
        event.preventDefault()

        const usuario = {
            nome: document.getElementById("nome").value,

            sobrenome: document.getElementById("sobrenome").value,

            email: document.getElementById("email").value,

            senha: document.getElementById("senha").value,

            telefone: document.getElementById("telefone").value,

            endereco: document.getElementById("endereco").value,

            numero: document.getElementById("numero").value,

            cidade: document.getElementById("cidade").value,

            cep: document.getElementById("cep").value,

            datanacimento: document.getElementById("data-nacimento").value,

            genero: document.getElementById("genero").selecteedOptions[0].text


        }

        localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario))
        alert("cadastro realizado com sucesso!")
        window.location.href = "login.html"
    })

}

const FORM_LOGAR = document.getElementById("form-lgar")


if (FORM_LOGAR) {
    FORM_LOGAR.addEventListener("submit", function (event) {
        event.preventDefault()


        const usuarioCadastrado = localStorage.getItem("usuarioCadastrado")


        if (usuarioCadastrado) {

            const usuarioEncontrado = JSON.parse(usuarioCadastrado)

            var emailDigitado = document.getElementById("email").value
            var senhaDigitada = document.getElementById("senha").value

            if (emailDigitado == usuarioEncontrado.email && senhaDigitada == usuarioEncontrado.senha) {
                

                alert("usuario logado com sucesso!!")
                window.location.href = "index.html"



            }else{ 
                alert("ATENÇÃO: email ou senha incorretos")
            }

        }else{
            alert("nenhum usuario cadastrado encontrado")

        }


    })






}