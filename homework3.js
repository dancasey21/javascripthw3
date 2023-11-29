//1: Write out a fast arrow function that adds two numbers

/* const add = (x, y) => {
  return x + y;
};

console.log(add(2, 7));
*/

//2: Add default parameters to the above function

/* const add = (x = 0, y = 0) => {
    return x + y;
  };
  
  console.log(add(2, 7));
  */

//3: Create an object that has a child object, that itself has a child object (3 levels).

/* const car1 = {
  info: 
  { model: "ford fiesta", colour: "black", year: 2008 },
};
*/

//4: Use object destructuring to pull out the parts are level 4.

/*const { model: m, colour: c, year: y } = car1.info;

console.log(
  `The model is ${m},
  the colour is ${c},
  it was bulit in ${y}
  `
);
*/

//5: Add a default value to the above destructuring

/* const { company: c, model: m, year: y, engine: e = "1 Litre" } = car1.info;

console.log(
  `The make is ${c},
  the model is ${m},
  it was bulit in ${y},
  engine size is ${e}`
);
*/

//6: Destructure an array

/* const fruits = ["apple", "banana", "grapes", "pineapple", "mango", "lemon"];

const [fru1, fru2, fru3] = fruits;

console.log(fru1, fru2, fru3);
*/

//7: Create two objects. Add more than two keys/values to both objects.

/* const obj1 = {};

obj1.name = "Dan";

const key1 = "age";
obj1[key1] = 33;

console.log(obj1);

const obj2 = {};

obj2.county = "Essex";

const key2 = "country";
obj2[key2] = "England";

console.log(obj2);
*/

//8. Copy all the items from the first object into the second object, use the spread operator.

/* const copy = { ...obj1, ...obj2 };

console.log(copy);
*/

//9 Send 5 arguments to a function and use the rest operator to group them

/* const cars = ["BMW", "Audi", "Mercedes", "Ford", "Toyota"];

const [car1, car2, car3, ...allTheRest] = cars;

console.log(allTheRest); 
*/

//10: Add a function to one of the objects, use the object method shorthand.

/*const obj = {
  sub(x, y) {
    return x - y;
  },
};
console.log(obj.sub(8, 4));
*/

//11: Scope

/*function outer() {
  const myName = "Dan";

  //console.log(myName);

  function inner() {
    const myAge = 33;
    //console.log(myName, myAge);

    function inner2() {
      const myLocation = "Essex";
      neverUse = "never";
      {
        const myCountry = "England";
        //console.log(myCountry);
      }
      //console.log(myName, myAge, myLocation, neverUse);
    }
    inner2();
  }
  inner();
}
outer();
*/
