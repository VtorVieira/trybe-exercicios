let btnenviar = document.getElementById('enviar');
let nome = document.getElementById('input-nome');
let email = document.getElementById('input-email')

btnenviar.addEventListener('click', function(event){
    
    event.preventDefault();

    console.log(nome.value);
    console.log(nome.email);
})