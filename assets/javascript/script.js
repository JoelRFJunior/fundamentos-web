let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%';

email.style.width = '100%';

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'nome invalido'
        txt.style.color = 'red'
        nome.style.border = '2px solid red'
    } else {
        txt.innerHTML = ''
        nome.style.border = '2px solid green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
        email.style.border = '2px solid red'
    } else {
        txtEmail.innerHTML = ''
        email.style.border = '2px solid green'
        emailOk = true
    }

    function validaAssunto() {
        let txtAssunto = document.querySelector("txtAssunto")
        if (assunto.value.length > 100 && assunto.value.length > 0) {
            txtAssunto.innerHTML = 'texto muito grande digite no máximo 100 caracteres'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'
        } else {
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }
    }

    function enviar() {
        if (nomeOk == true && emailOk == true && assuntoOk == true) {
            alert("formulario enviado com sucesso!")
        } else {
            alert("Por Favor, preencha o formulario corretamente")
        }
    }
}

