//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'David', 'Thiago', 'Suely'];

// Unshift
nomes.splice(2, 0, 'Suzana', 'Santos');
console.log(nomes);

// nomes.splice(índice atual, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);
