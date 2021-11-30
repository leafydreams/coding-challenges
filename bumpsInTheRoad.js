// Codewars Kata by user PG1
// 7kyu
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 
// 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x){
    let bumps = 0;
    for (let i = 0; i < x.length; i++){
      if (x[i] == 'n'){
        bumps++
      }
    }
    return (bumps <= 15) ? 'Woohoo!' : 'Car Dead';
  }


// Sample Tests: 
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Bumps in the Road", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(bump("n"), "Woohoo!");
//     assert.strictEqual(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
//     assert.strictEqual(bump("______n___n_"), "Woohoo!");
//   });
// });