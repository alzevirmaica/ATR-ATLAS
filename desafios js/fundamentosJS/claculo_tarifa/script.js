const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    e.preventDefault() 

    const idade = Number(frm.inIdade.value)
    const tipoPasse = frm.inPasse.value
    const tarifa = 2.50

    if(idade <= 6) {
        resp.innerText = `passe: grátis`
    }

    if(tipoPasse === 'estudante') {
         const descontoEstudante = tarifa / 2
         resp.innerText = `Por ser estudante a tarifa fica: $${descontoEstudante.toFixed(2)}`
    } else if(tipoPasse === 'idoso') {
         const descontoIdoso = tarifa -(tarifa * 30 / 100)
         resp.innerText = `Por ser idoso a tarifa fica: $${descontoIdoso.toFixed(2)}`
    } else {
        resp.innerText = `Por ser regular a tarifa fica: $${tarifa.toFixed(2)}`
    }

})