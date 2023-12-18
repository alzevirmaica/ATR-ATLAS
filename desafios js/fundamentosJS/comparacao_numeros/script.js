const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    e.preventDefault() 

    const num1 = Number(frm.inValor1.value)
    const num2 = Number(frm.inValor2.value)

   if(num1 > num2) {
    resp.innerText = `O número ${num1} é maior que o número ${num2}`
   } else if(num1 < num2) {
    resp.innerText = `O número ${num1} é menor que o número ${num2}`
   } else {
    resp.innerText = `O número ${num1} é igual ao número ${num2}`
   }

    
})
