


console.log(worker.bind(person1)("Malika", "Zafar"));
/* Name: Alisher,
Contact: 945398853,
Job: backend developer,
Age: 21,
Wife: Malika,
Child: Zafar
*/


console.log(worker.call(person2, "", "Ozoda"));
/* Name: Nabi,
Contact: 996548527,
Job: frontend developer,
Age: 28,
Wife: null,
Child: Ozoda
*/


console.log(worker.apply(person3,  ["Dilbar"]));
/* Name: Murodbek,
Contact: 913454898,
Job: android developer,
Age: 22,
Wife: Dilbar,
Child: null
*/

const obj = {
    Name:" Alisher",
    Contact: "945398853",
    Job: "backend",
    Age: "21",
    Wife: "Malika",
    Child: "Zafar"
}