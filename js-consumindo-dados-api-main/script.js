
async function addressSearch(cep) {
    try {
        const response = await axios.get(`http://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;
        
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');
        let bairro = document.getElementById('bairro')

        cidade.value = data.localidade;
        logradouro.value = data.logradouro;
        estado.value = data.uf;
        bairro.value = data.bairro;

        console.log(response.data)

    } catch (error) {
        console.log(error);
    } finally {
        console.log('Processamento concluído!');
    }
}

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => {
    const enteredCep = cep.value;
    // Verifique se o CEP possui a quantidade correta de dígitos (8 no caso do Brasil)
    if (enteredCep.length === 8) {
        addressSearch(enteredCep);
    } else {
        alert('CEP inválido');
    }
});
