// Declarando e Exibindo itens de um Array
let produtos = [];
document.write(typeof produtos);

let products = ["Computador", "Notebook", "Celular", "Tablet"];
document.write(`<p>${products}</p>`);

document.write("<p>Exibindo os elementos do vetor através do índice:</p>");
document.write(`<p>${products[0]}</p>`);
document.write(`<p>${products[1]}</p>`);
document.write(`<p>${products[2]}</p>`);
document.write(`<p>${products[3]}</p>`);

document.write("<p>Exibindo elementos do vetor através do forEach:</p>");
products.forEach((product) => {
  document.write(`<p>${product}</p>`);
});

document.write(
  "<p>Exibindo elementos do vetor através do forEach com os Índices:</p>",
);
products.forEach((product, i) => {
  document.write(`<p>${i+1} - ${product}</p>`);
});

products.forEach((product, i)=>{
    document.write(`<p>${i+1} -${product}<p/>`);
});

// metodos de manipulacao de vetores

let frutas = [`laranja`,`maça`,`banana`]
document.write(`<p>nossa lista de frutas e: ${frutas}</p>`)
frutas[3] = `morango`

document.write (`<p> agora nossa lista de frutas e: ${frutas}</p>`)

document.write (`<h4> o metodo PUSH- insere um novo elemento no final do vetor.</h4>`)
frutas.push(`abacaxi`)
document.write(`<p> agora  nossa lista de frutas e:{frutas}</p>`)

document.write(`<h4> o metodo UNSHIFT - insere um novo elemento do vetor </h4>`)
frutas.unshift(`pera`)
document.write (`<p> agora nossa lista de frutas e: ${frutas}</p>`)

// como contar os Elementos de um vetor -metodo-metodo length

const itens= frutas.length
document.write(`<p>  na nossa lista temos ${itens}frutas.</P>`)