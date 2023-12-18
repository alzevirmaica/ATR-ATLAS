const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener("submit", (e) => {
    e.preventDefault() 

    const idade = Number(frm.inIdade.value)

    if(idade < 0) {
        resp.innerText = `Idade inválida!`
    }
    
    if(idade >= 0 && idade <= 12) {
        resp.innerText = `Você tem ${idade} anos, por isso você esta classificado(a) como criança`
    } else if(idade === 13 && idade <= 17) {
        resp.innerText = `Você tem ${idade} anos, por isso você esta classificad0(a) como adolescente`
    } else if(idade >= 18 && idade <= 59) {
        resp.innerText = `Você tem ${idade} anos, por isso você esta classificado(a) como adulto`
    }else {
        resp.innerText = `Você tem ${idade} anos, por isso você esta classificado(a) como idoso`
    }
})
