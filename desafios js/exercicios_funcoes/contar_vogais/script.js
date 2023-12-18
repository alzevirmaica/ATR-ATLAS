const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit",(e) => {
    e.preventDefault()

  const frase = frm.inFrase.value 
  

  function contarVogais(frase) {
    const vogais = "aeiouAEIOU"

    let count = 0

    for(let i = 0; i < frase.length; i++) {
        if(vogais.includes(frase[i])) {
            count++
            
        }
    }
    return count
  }

  
  resp.innerText = `A string "${frase}" tem ${contarVogais(frase)} vogais`
})
