
    const num1 = 10
    const num2 = 2
    const operacao = "/"
    let resultado;
    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;  
        default:
            return "Operador inválido!"   
    }


console.log(`O resultado é ${resultado}`)