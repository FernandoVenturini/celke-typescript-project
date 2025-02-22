// Criar a funcao definida com um parametro array do tipo T[], onde e um tipo generico.
// A funcao pode trabalhar com qualquer tipo de array.
function printArray<T>(fruits:T[]):void {
    // Percorrer o array de dados:
    for (let fruit of fruits) {
        // Imprimir os dados do item do array:
        console.log(fruit);
    }

// Criar o array com valores do tipo string:
let nameFruitArray:string[] = ['Apple','Orange', 'Acai'];

// Criar o array com valores do tipo number:
let amountFruitArray:number[] = [10, 3, 4, 7];

// Chamar a funcao e enviar o array de string como parametro:
printArray(nameFruitArray);
// Chamar a funcao e enviar o array de number como parametro:
printArray(amountFruitArray);