
// let obj = {
//   chopish(sana, gacha) {
//     return this.persen + ` ${sana}dan  ${gacha} gacha  ${this.contact} ` + this.work;
//   },
// };
// let obj1 = {
//   persen: "Botir",
//   work: "ishlatish",
//   contact: 945398853
// };

// console.log(obj.chopish.bind(obj1)("21.12.2022", "22.12.2022"));

// let alsh = {
//   persen: "Nabi",
//   work: "backend developer",
//   chopish(sana, gacha) {
//     return this.persen + ` ${sana}dan  ${gacha} gacha ` + this.work;
//   },
// };
// let alsh1 = {
//   persen: "Murodbek",
//   work: "android developer",
// };

// console.log(alsh.chopish.bind(alsh1)("21.12.2022", "22.12.2022"));


// function worker(wife, child) {
//   this.wife = wife ? wife : null;
//   this.child = child ? child : null;
//   return this;
// }

// let persen = {
//   name: "Alisher",
//   contact: "998994562312",
//   job: "Developer",
//   age: 35
// };
// let persen2 = {
//   name: "Anvar",
//   contact: "998994556422",
//   job: "worker",
//   age: 25
// }

// console.log(worker.call(persen, "Ozoda"));
// console.log(worker.call(persen2, "", "Sobir"));


// let person1 = {
//   name: "Sarvar",
//   car:{
//     type:"Gentra",
//     price:15000
//   },
//   money: 5000
// };

// let person2 = {
//   name: "Aziz",
//   car:null,
//   money: 15000
// };

// let person3 = {
//   name: "Obid",
//   car:{
//     type:"Matiz",
//     price:5000
//   },
//   money: 10000
// };

// function sotish(client) {
//   if(client.money >= this?.car?.price){
//     if(client.car){
//       client.car1 = this.car;
//     } else{
//       client.car = this.car;
//     }
  
//     client.money -= this.car.price;
//     this.money += this.car.price;
//     this.car = null
//   } else console.log(client.name+"ning puli yetmadi!");
// }
// console.log(person1);
//console.log(person2);
// console.log(person3);
// sotish.call(person1,person2);
// sotish.call(person3, person1);
// sotish.call(person3, person1);
// console.log(person1);
// console.log(person2);
// console.log(person3);

// let person4 = {
//   name: "Obid",
//   car:{
//     type:"Matiz",
//     price:5000
//   },
//   a: [1],
//   money: 10000
// };

// if(person4?.a?.length){
//   console.log(1);
// }