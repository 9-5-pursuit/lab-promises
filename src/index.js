// Do not change the line directly below.
const finder = require("./helpers/finder");

/**
 * logResult()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function.
 *
 * @param {Object} person - A person's names.
 * @param {Object} person.first - The person's first name.
 * @param {Object} person.last - The person's last name.
 */
// finder(); //> Promise { <pending> }

// finder("Rhea", "Callahan");
//> Will eventually return:
//> [{ first: "Rhea", last: "Callahan", city: "Roosevelt", age: 40 }]
// setTimeout(() => {
// setTimeout(() => {
//   console.log("This will be logged after about 1 second.");
// }, 1000)
// const promise = new Promise((resolve, reject) => {
//   const position = 5;
// getParticipantAtPosition(position)
//   .then((name) => {
//     // `name` will be the person in 5th place.
//     console.log(name);
//   })
//   .catch((error) => {
//     console.log(`ERROR: ${error}`);
//   });
  
function logResult(person) {
  // use finder to search through people list just for names first and last
  finder(person.first, person.last)
  // .then will log result given from finder
  .then((result)=>{
    console.log(result)
  })
  //if ther is an issue will handle mistake
  .catch((error) => {
  console.log(`${error}`)
})
}

/**
 * logTwoResults()
 * ========================
 * Logs out the entire array of objects returned from the `finder()` function for two different people.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 */
// copy  from above  problem just added person 2 doubled finder
function logTwoResults(person1,person2) {
  finder(person1.first, person1.last)
  .then((result)=>{
    console.log(result)
  })
  .catch((error) => {
  console.log(`${error}`)
})
finder(person2.first, person2.last)
.then((result)=>{
  console.log(result)
})
.catch((error) => {
console.log(`${error}`)
})
}



/**
 * logThreeResultsCities()
 * ========================
 * Logs out just the cities from all three people given to the function. You may assume that each search result will only return a single person.
 *
 * @param {Object} person1 - A person's names.
 * @param {Object} person1.first - The person's first name.
 * @param {Object} person1.last - The person's last name.
 * @param {Object} person2 - A person's names. In the same format as person1.
 * @param {Object} person3 - A person's names. In the same format as person1.
 */
function logThreeResultsCities() {
  // copy past add person 3 and city???
  finder(person1.first, person1.last)
  .then((result)=>{
    console.log(result)
  })
  .catch((error) => {
  console.log(`${error}`)
})
finder(person2.first, person2.last)
.then((result)=>{
  console.log(result)
})
.catch((error) => {
console.log(`${error}`)
})
finder(person3.first, person3.last)
.then((result)=>{
  console.log(result)
})
.catch((error) => {
console.log(`${error}`)
})
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
