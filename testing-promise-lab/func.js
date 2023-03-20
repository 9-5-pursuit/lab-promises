const finder = require("./helper");

function logResult() {
  finder({ first: "Rita", last: "Ora" })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

function logTwoResults() {}

function logThreeResultsCities() {}

module.exports = {
  logResult,
  logTwoResults,
  logThreeResultsCities,
};
