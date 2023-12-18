function encontrarElementoMaisFrequente(arr) {
    // Cria um objeto para armazenar a contagem de cada elemento no array
    const contagemElementos = {};
  
    // Preenche o objeto contagemElementos com as contagens de elementos
    for (const elemento of arr) {
      if (contagemElementos[elemento]) {
        contagemElementos[elemento]++;
      } else {
        contagemElementos[elemento] = 1;
      }
    }
  
    // Inicializa variáveis para acompanhar o elemento mais frequente e sua contagem
    let elementoMaisFrequente;
    let contagemMaxima = 0;
  
    // Encontra o elemento mais frequente e sua contagem
    for (const elemento in contagemElementos) {
      if (contagemElementos[elemento] > contagemMaxima) {
        contagemMaxima = contagemElementos[elemento];
        elementoMaisFrequente = elemento;
      }
    }
  
    return elementoMaisFrequente;
  }
  
  // Exemplo de uso da função
  const array = ['maçã', 'banana', 'laranja', 'banana', 'uva', 'banana', 'abacaxi'];
  const maisFrequente = encontrarElementoMaisFrequente(array);
  console.log(`O elemento mais frequente é: ${maisFrequente}`);


  