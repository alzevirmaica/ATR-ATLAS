const frm = document.querySelector("form")
const resp1 = document.querySelector("#outFahrenheit")
const resp2 = document.querySelector("#outCelsius")


frm.addEventListener("submit",(e) => {
    e.preventDefault();
    
    const valor1 = Number(frm.inCelsius.value)
    const valor2 = Number(frm.inFahrenheit.value)
    const conveCelsius = (valor2 - 32) * 5/9
    const conveFahre = (valor1 * 9/5) + 32

    if(resp1) {
        resp1.innerText = `${valor1} graus celsius equivalem a ${conveFahre.toFixed(1)} graus fahrenheit.`
        resp2 = ''
    }else {
        resp2.innerText = `${valor2} graus fahrenheit equivalem a ${conveCelsius.toFixed(1)} graus celsius.`
        resp1 = ''
    }

})
