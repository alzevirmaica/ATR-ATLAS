const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit",(e) => {
    e.preventDefault()

  const frase = frm.inFrase.value 
  

  function palindromo(frase) {
   const pali = frase.split('').reverse().join('')
   if(frase.toLowerCase()  === pali.toLowerCase() ) {
    return `Essa string é um palídromo`
   }else {
    return `Essa string não é um palídromo`
   }
  
  }

  
  resp.innerText = palindromo(frase)
})


