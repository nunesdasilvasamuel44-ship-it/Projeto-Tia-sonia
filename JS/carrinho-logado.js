const usuarioLogado = localStorage.getItem('usuarioCadastro')

if (!usuarioLogado) {

    document.innerHTML =
        '<div class= "container text-center mt-5">' +
        '< h2 class="text-danger" ><i class="fa-solid fa-lock"></i> Acesso Negado </h2 >' +
        '<p class= "mb-4">Voce precisa estar logado.</p>' +
        '<p class= "text-muted">Aguarde....</p>'
    '</div>'

    setTimeout(() => {
        window.location.href = 'login.html'
    }, 2500)
} else {
    //reunido as informacões  do usuareio logado 
    const carrinho = JSON.parse(localStorage.getItem('itemCarrinho')) || []
    const listaProdutosHTML = document.getElementById('lista-produtos')
    const textoTotal = document.getElementById('texto-total')
    let valorTotal = 0
    let textoPedindoPorEmail = 'olá gostaria de fazer um pedido:\n\n'
    //vamos verificar se o carrinho está vazio

    //cada item do carrinho é exibido na tabela
    //Vamos verificar se o carrinho está vazio
    if (carrinho.length === 0) {
        listaProdutosHTML.innerHTML =
            '<tr>' +
            '<td colspan="2" class="text-center">Seu carrinho está vazio.</td>' +
            '</tr>'
    } else {
        //Cada item do carrinho é exibido na tabela
        carrinho.forEach(function (item) {
            listaProdutosHTML.innerHTML =
                '<tr>' +
                '<td> + item.nome + </td>' +
                '<td> + item.preco + </td>' +
                '</tr>'

            //Somar o total
            valorTotal += parseFloat(item.preco)

            //Colocando os itens no e-mail
            textoPedidoPorEmail += '- ' + item.nome + ': R$ ' + item.preco + '\n'
        })

        textoTotal.innerText = 'Total: R$' + valorTotal
        textoPedindoPorEmail += '\nValor Total: R$ ' + valorTotal

    }
}