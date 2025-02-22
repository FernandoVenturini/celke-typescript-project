"use strict";
// Criar a funcao para receber uma variavel do tipo User (objeto) e nao retornar valor:
function printUser(user) {
    console.log(`Nome do usuario: ${user.name}, velocidade do usuario: ${user.speed}`);
}
// Criar o objeto de dados:
let dataUser = {
    name: 'Fernando',
    speed: 12,
};
// Chamar a funcao e enviar o parametro:
printUser(dataUser);
