

// 1 Função simples
function mostrarInfo(){
console.log("Nome: Ana");
console.log("Idade: 18");
console.log("Cidade: São Paulo");
}
mostrarInfo();


// 2 Função com parâmetros
function dividir(a,b){
let resultado = a/b;
console.log("O resultado da divisão foi: " + resultado);
}
dividir(10,2);


// 3 Função com retorno
function multiplicar(a,b,c){
return a*b*c;
}
console.log("Multiplicação: " + multiplicar(2,3,4));


// 4 Verificar idade
function verificarIdade(idade){
if(idade >= 18){
return "Maior de idade";
}else{
return "Menor de idade";
}
}
console.log(verificarIdade(20));


// 5 Função anônima
let media = function(n1,n2){
let m = (n1+n2)/2;

if(m <=5){
return "Reprovado";
}else{
return "Aprovado";
}
}

console.log(media(6,7));


// 6 Arrow function
let triplo = (n) => n*3;
console.log("O triplo do número é: " + triplo(5));


// 7 Arrow function soma
let soma = (a,b,c,d) => a+b+c+d;
console.log("Resultado da soma: " + soma(1,2,3,4));


// ---------------------
// CLIENTES
// ---------------------

let listaClientes = [
{nome:"Ana", endereco:"Rua A", cpf:11111111111},
{nome:"João", endereco:"Rua B", cpf:22222222222},
{nome:"Maria", endereco:"Rua C", cpf:33333333333}
];

listaClientes.forEach(function(cliente){
document.write("Nome: " + cliente.nome + "<br>");
document.write("Endereço: " + cliente.endereco + "<br>");
document.write("CPF: " + cliente.cpf + "<br><br>");
});

// adicionar no final
listaClientes.push({nome:"Carlos", endereco:"Rua D", cpf:44444444444});

// adicionar no início
listaClientes.unshift({nome:"Julia", endereco:"Rua E", cpf:55555555555});

document.write("<br>Lista atualizada:<br>");

listaClientes.forEach(function(cliente){
document.write(cliente.nome + " - " + cliente.endereco + " - " + cliente.cpf + "<br>");
});

document.write("<br>Total de clientes: " + listaClientes.length);