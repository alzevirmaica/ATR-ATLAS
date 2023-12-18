const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit",(e) => {
    e.preventDefault()

   const num = Number(frm.inNumero.value)
   
   function parImpar(num) {
     if(num % 2 == 0) {
        return `O número ${num} é par`
     }else {
        return `seu número ${num} é impar`
     }
   }
   resp.innerText = parImpar(num)
})
