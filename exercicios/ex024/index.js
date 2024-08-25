/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
*/

function falaoi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaoi());