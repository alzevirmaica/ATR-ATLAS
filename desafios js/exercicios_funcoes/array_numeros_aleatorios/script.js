const frm = document.querySelector("form")
const resp = document.querySelector("h3")



frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const tamanhoArray = Number(frm.inNumero1.value)
    const valorMaximo = Number(frm.inNumero2.value)

    function gerarArrayAleatorio(tamanhoArray, valorMaximo) {

        const arr = []

        for(let i = 0; i < tamanhoArray; i++) {
            arr.push(Math.floor(Math.random() * (valorMaximo + 1)))
        }

        return arr

    }
    resp.innerText = `O array gerado de números aleatórios é: [${gerarArrayAleatorio(tamanhoArray,valorMaximo).join(',')}]`
})
