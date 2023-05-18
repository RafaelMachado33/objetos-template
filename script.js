/*const estudante = {
    nome: "Ana",
    sobrenome: "sanmi",
    numeroMatricula: "1234",
    notasSemestres: [3, 10, 5]

}

estudante.modulo = 1;

console.log(estudante.nome);

console.log(estudante.notasSemestres[1]);
console.log(estudante.modulo);

const copiaEstudante = {
    ...estudante,
    nome:"Astrodev",
    notasSemestre:[...estudantes.notasSemestres,9],
    modulo:estudante.modulo+1
}*/

const carrinho = {  //objeto
    nome: "Rafael",
    formaPagamento: "Credito",
    endereço: "General Camara",
    compras: [{ nome: "Carne", preco: 12, quantidade: "4kg" }]  //array

}

carrinho.compras.push({ nome: "suco", preco: 6, quantidade: "2 litros" })
carrinho.compras.push({ nome: "Aveia", preco: 2, quantidade: "0,5 Kg" })

console.log(carrinho);
console.log(carrinho.compras.length)

const carrinhoPresente = { ...carrinho, nome: "Bruna", formaPagamento: "cartão presente" }

console.log("..................................................");
console.log(carrinho);
console.log(carrinhoPresente);
console.log("..................................................");
carrinho.compras[0].preco = 15;//Troca de preço

console.log(carrinho);