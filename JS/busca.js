const formBusca = document.querySelector('.busca');
const campoBusca = document.querySelector('.busca__campo');

const itemCatalagos = document.querySelectorAll('.bordados'); 

//verificar se o formulario de busca existe na pagina

if(formBusca){
    formBusca.addEventListener('sumbit',  function(event){
        event.preventDefault();

    } )

}

//Agora vamos verificar o texto que foi digitado 

campoBusca.addEventListener('input', function(){
    
    const termoBusca = campoBusca.value.toLowerCase();

    itemCatalagos.forEach(function(item){

        const titulo = item.querySelector('h3').innerText.toLocaleLowerCase()

        if(titulo.includes(termoBusca)){
            item.style.display = 'block';
            
        }else{
           item.style.display = 'none';

        }
    })
})