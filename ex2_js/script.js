/*
<aside>
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

</aside>

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

let studentsList = [
{
name: 'Lucas Barros',
nota_1: 4,
nota_2: 5,
},
{
name: 'Daniela Vincenzi',
nota_1: 7,
nota_2: 8,   
},
{
name: 'Vanielle Guimarães',
nota_1: 7,
nota_2: 7,   
}
]

function calculoMedia (nota_1,nota_2){
let media = (nota_1 + nota_2) / 2
return media
}
for(let student of studentsList) {
    mediaIndividual = calculoMedia(student.nota_1,student.nota_2)
    let aprovadoOuNão = mediaIndividual < 7 ? 'Voce foi reprovado, sentimos muito, não desista! :)' : 'Você foi aprovado!'

    alert(`A média do Aluno ${student.name} foi de ${mediaIndividual} e ${aprovadoOuNão}`)
}
 
