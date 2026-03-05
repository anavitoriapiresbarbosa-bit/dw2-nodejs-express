// classes java

// nome de classes devem iniciar com a primeira letra maiscula

class carro{
// definido os atributos

constructor(marca,modelo,ano){
    // this e uma referencia as instancias que serao criadas atraves dessa classe
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}
    // definido metodos
    buzinar(){
        return"beep!,beep!";
}

 }

//  instanciando objetos
const carropopular = new carro("fiat", "uno", "2012");

document.write(
`<p>o carro ${carropopular.marca} modelo ${carropopular.modelo} 
e do ano ${carropopular.ano} e quando buzinar faz ${carropopular.buzinar()}</P>`,
);