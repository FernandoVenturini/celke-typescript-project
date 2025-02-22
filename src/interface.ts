// Usar interface par definir a estrutura do objeto:
interface User {
    name:string;
    speed:number;
}

// Criar a funcao para receber uma variavel do tipo User (objeto) e nao retornar valor:
function printUser(user:User):void {
    console.log(`Nome do usuario: ${user.name}, velocidade do usuario: ${user.speed}`);
}
// Criar o objeto de dados:
let dataUser:User = {
    name: 'Fernando',
    speed: 12,
}
// Chamar a funcao e enviar o parametro:
printUser(dataUser);