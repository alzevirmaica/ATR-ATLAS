const frm = document.querySelector('form')
const resp = document.querySelector('h3')


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    const cidade = frm.inCidade.value

    resp.innerText = `O seu nome é ${nome}, você tem ${idade} anos e mora na cidade de ${cidade}`
})