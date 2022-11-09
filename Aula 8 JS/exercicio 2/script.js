const alunos = [
    {nome: 'João',
     nota: 5,
     turma: '10',},
     {nome: 'Sofia',                  // objetos declaraveis
      nota: 9,
      turma: '18',},
      {nome: 'Paulo',
       nota: 6,
    turma: '2C',},
    {nome: 'Goku',
    nota: 3,
    turma: '2B',}
];
function alunosAprovados(alunos, media) {       // função que irá analisar alunos e media
        let aprovados = [];
        for (let i = 0; i < alunos.length; i++) {     
        let {nota, nome} = alunos[i];    
        if (nota >= media){
            aprovados.push(nome);
        }
        }
        return aprovados;         //esse trecho de código tira a média da nota e verifica se a nota é maior ou igual a média e imprime no console. 
    }
    console.log(alunosAprovados(alunos, 5)); // nesta parte alunos com 5 ou mais irão aparecer seus nomes no console caso sejam aprovados pelas notas iguais ou maiores do que 5.