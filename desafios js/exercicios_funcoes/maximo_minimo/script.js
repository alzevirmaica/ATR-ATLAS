const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMaior")
const resp2 = document.querySelector("#outMenor")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num1 = Number(frm.inNumero1.value)
    const num2 = Number(frm.inNumero2.value)

    function valorMaior(num1, num2) {
        if (num1 > num2) {
            return `O número maior é ${num1}`
        } else {
            return `O número maior é ${num2}`
        }
    }
    function valorMenor(num1, num2) {
        if (num1 < num2) {
            return `O número menor é ${num1}`
        } else {
            return `O número menor é ${num2}`
        }
    }
    resp1.innerText = valorMaior(num1, num2)
    resp2.innerText = valorMenor(num1, num2)
})
