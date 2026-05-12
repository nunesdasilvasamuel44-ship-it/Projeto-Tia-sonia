




const nomeUsuario1 = "user@gmail.com"
const senha1= "123456"
const nomeUsuario2 = "user@gmail.com"
const senha2= "123456"




let nomeDigitado= prompt("Digite seu email:")
let senhaDigitado= prompt("Digite seu senha:")


if(nomeDigitado=== nomeUsuario1 && senhaDigitado === senha1)
{
    alert("Login bem-sucedido! Bem-vindo," + nomeUsuario1 + "!")
}else if(nomeDigitado=== nomeUsuario2 && senhaDigitado === senha2)
{
      alert("Login bem-sucedido! Bem-vindo," + nomeUsuario2 + "!")

}else
{
    alert("Login falhou emai ou senha incorretos.")

    document.body.classList.add("acesso-negado")

    document.getElementById("bannner__imagem").src= "img/acesso-negado-img"
}




/*


const senhaCartao= "123"
const tipoCartao= "Nubenk"

let tipoDigitado= prompt("tipoCartao:")
let senhaDigitado= prompt("Digite seu senha:")


if(senhaCartao=== "123" && tipoCartao===Nubenk)
{
    alert("Login bem-sucedido")
}else{
      alert("Login falhou senha incorreta.")

}


*/