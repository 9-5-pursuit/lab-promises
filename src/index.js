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
function logResult(data) {
  finder(data.first, data.last)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
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
function logTwoResults(data1, data2) {
  /*
      { first: "Tyler", last: "Yates" },
      { first: "Yvette", last: "Glenn" }

      argumments 
      [
        { first: "Tyler", last: "Yates" },
        { first: "Yvette", last: "Glenn" }
      ]
  */
  for (let i = 0; i < arguments.length; i++) {
    finder(arguments[i].first, arguments[i].last)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

//alternative method below:
// function logTwoResults(...data) {
//   data.forEach((item) => {
//     finder(item.first, item.last)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });
// }

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
// function logThreeResultsCities(data1, data2, data3) {
//   for (let i = 0; i < arguments.length; i++) {
//     finder(arguments[i].first, arguments[i].last, arguments[i].city)
//       .then((result) => {
//         console.log(arguments[i].city);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// }

function logThreeResultsCities(...data) {
  data.forEach((item) => {
    finder(item.first, item.last)
      .then((result) => {
        result.forEach((item) => {
          console.log(item.city);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

// Do not change any of the code below this line.
module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities
};
