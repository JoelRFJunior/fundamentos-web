let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.width = '100%';

email.style.width = '100%';

function validaNome(){
   let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML='nome invalido'
        txt.style.color = 'red'
        nome.style.border = '2px solid red'
    } else {
        txt.innerHTML=''
        nome.style.border = '2px solid green'
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') ==-1) {
        txtEmail.innerHTML='E-mail invalido'
        txtEmail.style.color = 'red'
        email.style.border = '2px solid red'
    } else {
        txtEmail.innerHTML=''
        email.style.border = '2px solid green'
    }
}

