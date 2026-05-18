//Pega os botões de adicionar ao carrinho
const botoesBordados = document.querySelectorAll('.btn-adicionar')

//Agora vamos criar o carrinho de compras
let carrinho = JSON.parse(localStorage.getItem('itemCarrinho')) || []

//Função para adicionar itens ao carrinho
botoesBordados.forEach(function(botao){
    botao.addEventListener('click', function(){


        event.preventDefault()
        //Recebe dados do botão
        const nomeProduto = botao.getAttribute('data-nome')
        const precoProduto = botao.getAttribute('data-preco')

        //Cria um objeto para o item do carrinho
        const itemCarrinho = {
            nome: nomeProduto,
            preco: precoProduto
        }

        //Adiciona o item ao carrinho
        carrinho.push(itemCarrinho)

        //Salva o carrinho no localStorage
        localStorage.setItem('itemCarrinho', JSON.stringify(carrinho))

        //Exibe uma mensagem de confirmação
        botao.innerText = 'Adicionado!'
        botao.classList.replace('btn-primary', 'btn-success')

        //Depois de um tempo a mensagem some
        setTimeout(() => {
            botao.innerText = 'Adicionado!'
            botao.classList.replace('btn-success', 'btn-primary')}, 2000)
        })
})