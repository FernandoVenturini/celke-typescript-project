// Criar a funcao para receber duas variaveis do tipo string e retornar a string:
function getUser(name:string, lastName:string):string {
    return `${name} ${lastName}`;
}
// Chamar a funcao e imprimir o valor:
console.log(getUser('Fernndo', 'Venturini'));

// Criar a funcao para receber duas variaveis do tipo number e retornar a number:
function getSpeed(current:number, add:number):number {
    return current + add;
}
// Chamar a funcao e imprimir o valor:
console.log(getSpeed(9, 3));

// Criar a funcao para receber uma variavel do tipo number e retornar um boolean:
function getSituation(current:number):boolean {
    return (current >= 7 ? true : false);
}
// Chamar a funcao e imprimir o valor:
console.log(getSituation(9));

// Criar a funcao para receber uma variavel do tipo any e retornar uma string:
function getValue(value:any):string {
    if (typeof value === 'string') {
        return 'Valor do tipo string!';
    } else {
        return 'Valor diferente de string';
    }
}
// Chamar a funcao e imprimir o valor:
console.log(getValue(7));

// Criar a funcao para receber uma variavel do tipo string ou numero e retornar uma string:
function getType(valueType:string | number):string {
    if (typeof valueType === 'string'){
        return 'Valor do tipo string!';
    } else {
        return 'Valor diferente de numero!';
    }
}
// Chamar a funcao e imprmir o valor:
console.log(getType('Cesar'));