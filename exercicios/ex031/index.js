const verdadeira = true;

//let tem escopo de bloco {... bloco }
// var so tem escopo de funcao

let nome = 'Suzana';
var nome2 = 'Suzana';

if (verdadeira) {
    let nome = 'Suzana';
    console.log(nome, nome2);
}
