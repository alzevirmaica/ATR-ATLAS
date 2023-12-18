const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit",(e) => {
    e.preventDefault()

   const num = Number(frm.inNumero.value)
   
   function fatorial(num) {
     if(num === 0 || num === 1) {
        return 1
     }else {
        // let resultado = 1
        // for(let i = 2; i <= num; i++)
        // resultado *= i
        // return resultado
        return num * fatorial(num - 1) // função se auto invocando
    }
     
   }
   resp.innerText = fatorial(num)
})
