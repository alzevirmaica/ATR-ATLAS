const frm = document.querySelector('form')
const resp = document.querySelector('#outComprimento', '#outLargura')



frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const comprimento = Number(frm.inComprimento.value)
    const largura = Number(frm.inLargura.value)

    const area = comprimento * largura
    const perimetro = 2 * (comprimento + largura)

    resp.innerText = `A area do seu retângulo é ${area} e perimetro é ${perimetro}`
})