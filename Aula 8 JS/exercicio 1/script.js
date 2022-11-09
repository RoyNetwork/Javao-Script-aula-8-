function calculadoraIdade(anos) {
    // declarado a função calculadoraIdade.
                      return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
                      // irá falar daqui a tantos anos a pessoa terá tantos anos, com base nas declaravéis "Idade" e "anos".
};

const pessoa1 = {
    nome: 'Amelia',
    idade: 23,
};
const pessoa2 = {
    nome: 'Márcia',
    idade: 20,
};
const pessoa3 = {
    nome: 'Jonas',
    idade: 13,
};
const pessoa4 = {
    nome: 'Carl Johnson',
    idade: 24,
};
const pessoa5 = {
    nome: 'Jimmy Hopikins',
    idade: 15,
};
// Declaraveis em forma de objeto
//             |
alert(calculadoraIdade.call(pessoa3, 40));
alert(calculadoraIdade.apply(pessoa2, [24]));
// Nesta parte ele imprime no console e faz algumas alterações. Call ele conecta os objeto. O apply basicamente faz o mesmo.