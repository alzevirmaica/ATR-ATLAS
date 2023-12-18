const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit",(e) => {
    e.preventDefault()

   const num = Number(frm.inNumero.value)

   let numDivisores = 0 //Declara  e inicializa o contador
   
   for (let i = 1; i <= num; i++) { //percorre todos os possíveis divisores do num

        if(num % i == 0) { //verifica se (1,2,3...)é divisor do num

            numDivisores++ //se é, incrementa o contador
        }
   }

   if(numDivisores == 2) {
    resp.innerText = `${num} é primo`
   }else {
    resp.innerText = `${num} não é primo`
   }
})

