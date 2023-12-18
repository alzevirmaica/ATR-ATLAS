const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    e.preventDefault() 

    const peso = Number(frm.inPeso.value)
    const altura = Number(frm.inAltura.value)

    const imc = peso / (altura * altura)

    resp.innerText = `O sei IMC é ${imc.toFixed(2)}`
})
