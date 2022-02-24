const btnEnviar = document.getElementById('enviar');
const btnApagar = document.getElementById('apagar');
const myForm = document.getElementById('form')

btnEnviar.addEventListener('click', function(event){
    event.preventDefault();
    console.log("to aqui");
})

//botão para apagar as informações do forms
btnApagar.addEventListener('click', function (event) {
    event.preventDefault();
    myForm.reset();
});


let date = document.getElementById('datepicker').DatePickerX.init();
//let picker = new Pikaday({ field: document.getElementById('datepicker') });



/*validação dos campos nome e email*/
const validation = new JustValidate('#form');
validation
    .addField('#input-nome', [
        {
            rule: 'required',
            errorMessage: 'Quantidade de caracteres invalida!',
        },
        {
            rule: 'minLength',
            value: 10,
        },
        {
            rule: 'maxLength',
            value: 40,
        },
    ])
    .addField('#input-email', [
        {
            rule: 'required',
            errorMessage: 'Email é obrigatório',
        },
        {
            rule: 'email',
            errorMessage: 'Email invalido',
        },
    ]);