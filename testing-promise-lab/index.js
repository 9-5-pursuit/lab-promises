const { logResult, logTwoResults, logThreeResultsCities } = require("./func");

// logResult({ first: "Ora", last: "Valentine" });
// logResult({ first: "Ora" });
// logResult({ first: "Rita", last: "Ora" });

//second
// logTwoResults(
//   { first: "Tyler", last: "Yates" },
//   { first: "Yvette", last: "Glenn" }
// );

// logTwoResults({ first: "Tyler" }, { first: "Yvette", last: "Glenn" });
// logTwoResults(
//   { first: "Tyler", last: "Manchin" },
//   { first: "Yvette", last: "Glenn" }
// );
// logTwoResults({ first: "Tyler", last: "Yates" }, { last: "Glenn" });
// logTwoResults(
//   { first: "Tyler", last: "Yates" },
//   { first: "Yvette", last: "Yates" }
// );

//third

logThreeResultsCities(
  { first: "Joyce", last: "Wilkins" }, // Kohatk
  { first: "Marshall", last: "Short" }, // Soham
  { first: "Janet", last: "Evans" } // Lafferty
);

logThreeResultsCities(
  { first: "Joyce", last: "Wilkins" }, // Kohatk
  { first: "Marshall" }, // Soham
  { first: "Janet", last: "Evans" } // Lafferty
);

logThreeResultsCities(
  { first: "Joyce", last: "Wilkins" }, // Kohatk
  { first: "Marshall", last: "Short" }, // Soham
  { first: "Janet", last: "Peterson" } // Lafferty
);
