let consertos = require('./consertos.js');

    consertos.forEach(conserto => {
    if(conserto.pronto === true) {
      valorTotal = 0;
  
      conserto.valoresItens.forEach(valor => {
        valorTotal += valor
      })
      
      console.log(`
      O seguinte aparelho está pronto: 
        Aparelho: ${conserto.aparelho}
        Itens Consertados: 
        * ${conserto.itensConsertados[0]},
        * ${conserto.itensConsertados[1]},
        * ${conserto.itensConsertados[2]},
        Valor Total: R$ ${valorTotal}
      `)
    }})

let aparelhosProntos = consertos.filter(conserto => conserto.pronto === true);
console.log`Os aparelhos prontos são: ${aparelhosProntos}`;

let aparelhosNaoProntos = consertos.filter(conserto => conserto.pronto === false);
console.log`Os aparelhos não prontos são: ${aparelhosNaoProntos}`;	

