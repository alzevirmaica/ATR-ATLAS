class cliente { //Classe (molde)
    nome; //Atributos ou propriedades
    cpf;
}

class contaCorrente {
    agencia;
    //#saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; //campos privados

  //comportamentos da classe
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
        }
    }
}


//Cliente é uma instância da classe
const cliente1 = new cliente(); //Quando executa o new cria um objeto. (Instanciando um cliente)
cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

const cliente2 = new cliente();  //novo cliente 
cliente2.nome = 'Alice'
cliente2.cpf = 88822233309;


const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo._saldo = 0;
contaCorrenteRicardo.agencia = 1001;


contaCorrenteRicardo.depositar(300)

const valorSacado = contaCorrenteRicardo.sacar(100)
console.log(valorSacado)

console.log(contaCorrenteRicardo)
