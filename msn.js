botao.addEventListener("click", function(){
    let input = document.getElementById("campo").value
    let senha = document.getElementById('senha').value
    
    if(input == 'yury' && senha == 12345) {
        alert('Seja bem-vindo yury')

    }else {
        alert('Usuário não Cadastrado, Cadastre-se!')
    }
   
})
