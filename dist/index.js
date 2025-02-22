"use strict";
// Cria variavel do tipo string
const user = "Cesar!";
console.log(`Usuario: ${user}`);
// Cria variavel do tipo number
const age = 44;
console.log(`Age: ${age}`);
// Cria variavel do tipo boolean
const situation = true;
console.log(`Situation: ${situation}`);
// Cria variavel do tipo array de string
const courses = ["Curso de React", "Curso de Node.js"];
console.log(`Courses: ${courses}`);
// Cria variavel do tipo array de numero
const amount = [5, 2, 7];
console.log(`Amount: ${amount}`);
// Cria variavel do tipo "tuple" array com tipos diferentes
var person;
person = ['Cesar', 12, true];
console.log(`User: ${person[0]}`);
console.log(`Age: ${person[1]}`);
console.log(`Situation: ${person[2]}`);
// Cria variavel do tipo enum. Representa um conjunto de valores nomeados.
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["Sunday"] = 1] = "Sunday";
    DayOfTheWeek[DayOfTheWeek["Monday"] = 2] = "Monday";
    DayOfTheWeek[DayOfTheWeek["Tuesday"] = 3] = "Tuesday";
    DayOfTheWeek[DayOfTheWeek["Wednesday"] = 4] = "Wednesday";
    DayOfTheWeek[DayOfTheWeek["Thursday"] = 5] = "Thursday";
    DayOfTheWeek[DayOfTheWeek["Friday"] = 6] = "Friday";
    DayOfTheWeek[DayOfTheWeek["Saturday"] = 7] = "Saturday";
})(DayOfTheWeek || (DayOfTheWeek = {}));
let day;
console.log(`Number that represent sunday: ${DayOfTheWeek.Sunday}`);
console.log(`Number that represent friday: ${DayOfTheWeek.Friday}`);
// Criar variavel do tipo any, atribuir qualquer tipo de valor para a variavel
let data;
data = 10;
console.log(`Assigned value and number: ${data}`);
data = 'Celke';
console.log(`Assigned value and text: ${data}`);
// Criar variavel do tipo null e undefined
let variableNull = null;
let variableUndefined = undefined;
console.log(`Variable null: ${variableNull}`);
console.log(`Variable undefined: ${variableUndefined}`);
let client = {
    name: "Cesar",
    amount: 7
};
console.log(`Customer name: ${client.name}`);
console.log(`Customer purchase quantity: ${client.amount}`);
// Criar variavel utilizando union indicando um ou mais tipo
const value = 'Cesar';
console.log(`Value can be string or boolean: ${value}`);
// Create function and define parameter type and return type
