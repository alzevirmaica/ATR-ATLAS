const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit",(e) => {
    e.preventDefault()

  const frase = frm.inFrase.value 

  function inverteFrase(frase) {
    return frase.split('').reverse().join('')
  }

  resp.innerText = inverteFrase(frase)
})
