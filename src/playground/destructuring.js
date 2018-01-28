//
// Object Destructuring
//

// const person = {
//     name: 'Andres',
//     age: 23,
//     location: {
//         city: 'EARTH',
//         temp: 12
//     }
// };

// const { name: firstName = 'ANDRES', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature }  = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// };


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryane Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);



//
// Array Destructuring
//

const address = [
    '12399 S Juniper Street', 
    'Philadelphia', 
    'Pennsylvania', 
    '19147'
];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.78'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}`)







// //
// // Object Destructuring
// //

// const person = {
//     name: 'Andres',
//     age: 23,
//     location: {
//         city: 'EARTH',
//         temp: 100
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;


// console.log(`${firstName} is ${age}`);

// const {temp: temperature, city} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// };

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// /*-------------------------------------------------------------------------------*/

// //
// // Array Destructuring
// //

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// const [, city, state = 'New York'] = address;
// console.log(`You're in ${city} ${state}`)

// const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
// const [coffee, , mediumValue] = item;

// console.log(`A medium ${coffee} costs ${mediumValue}`);
