botao.addEventListener("click", function(){
    let input = document.getElementById("campo").value
    let senha = document.getElementById('senha').value
    
    if(input == 'yury' && senha == 12345) {
        alert('seja bem vindo yury')

    }else {
        alert('usuario nao cadastrado')
    }
   
})
