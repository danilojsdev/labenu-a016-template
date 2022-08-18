const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

console.log("Exercício para fixação:");

console.log("Exercício 1:");

//O Homem que copiava, de 2003, dirigido por Jorge Furtado
//Tem no elenco: Lázaro Ramos, Leandra Leal, Pedro Cardoso

// for(let i = 0; i < filmes.length; i++){
//   for(let z = 0; z < filmes[i].elenco.length; z++){
//     console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}. Tem no elenco: ${filmes[i].elenco}.`)
//   }
// }

console.log("Exercício 2:");

// for(let i in filmes){
//   for(let z = 0; z < filmes[i].elenco.length; z++){
//     console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}. Tem no elenco: ${filmes[i].elenco}.`)
//   }
// }

console.log("Exercício 3:");

for(let i in filmes){
  for(let z of filmes){
    console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}. Tem no elenco: ${filmes[i].elenco}.`)
  }
}

// console.log("Prática Guiada I:");

// const resultadoCon2507 = [4, 6, 12, 34, 35, 53];
// const resultadoCon2508 = [41, 45, 48, 51, 53, 58];
// const resultadoCon2509 = [8, 37, 39, 50, 59, 60];
// const resultadoCon2510 = [8, 13, 25, 32, 44, 57];

// const megaSena = [resultadoCon2507, resultadoCon2508, resultadoCon2509, resultadoCon2510];

// console.log(megaSena);
// console.log(megaSena.length);

// if(megaSena.length === 4){

//   for(let i = 0; i < megaSena.length; i++){
//     for(let z = 0; z < megaSena[i].length; z++){
//     console.log(`- Sorteio ${i + 1}: ${megaSena[i]}.`)
//     }
//     }
// }else{
//   console.log('É necessário alterar o número de itens do array.')
// }

// console.log("Prática Guiada II:");

// if(megaSena.length === 4){

//   for(let i in megaSena){
//     for(let z = 0; z < megaSena[i].length; z++){
//     console.log(`- Sorteio ${i}: ${megaSena[i]}.`) 
//     }
//     }
// }else{
//   console.log('É necessário alterar o número de itens do array.')
// }

// console.log("Prática Guiada III:");

// if (megaSena.length === 4) {
    
//     // key in value -> for in
//     for (let i in megaSena) {
//         //elemento do array
//         for (let z of megaSena[i]) {
//             console.log(`sorteio ${i}: ${megaSena[i]}.`)
//         }
//     }  
// } else {
//     console.log('É necessário alterar o número de itens do array')
// }