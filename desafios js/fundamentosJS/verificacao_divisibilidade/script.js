const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener("submit", (e) =>  {
    e.preventDefault() 

    const num1 = Number(frm.inValor1.value)
    const num2 = Number(frm.inValor2.value)

   

    if(num1 % num2 === 0) {
        resp.innerText = `Esses numeros são divisíveis`
    }else {
        resp.innerText = `Esses números não são divisíveis`
    }
})
