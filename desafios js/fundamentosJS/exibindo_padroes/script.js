const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit",(e) => {
    e.preventDefault()

  const num = Number(frm.inNumero.value) 
  let asterisco = ""  
   
  for(let i = 1; i <= num; i++) {
    asterisco += "*".repeat(i) + "\n"
  }

  resp.innerText = asterisco
})

