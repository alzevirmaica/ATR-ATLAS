const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit",(e) => {
    e.preventDefault()

   const num = Number(frm.inNumero.value)
   
   let a = 0
   let b = 1

   let sequencia = ""

   for(let i = 0; i < num; i++) {
    sequencia += a + ","
    const temp = a + b
    a = b
    b = temp
   }

   resp.innerText= sequencia
})

