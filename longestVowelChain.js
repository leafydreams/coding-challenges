/*
Longest vowel chain by KenKamau
Codewar Kata 7kyu
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

*/

function solve(s){
    let counter = 0;
    let total = 0;
   for (let i = 0; i < s.length; i++){
     let reg = /[aeiou]/g;
     reg.test(s[i]) ? total++ : total = 0;
     total > counter ? counter = total : null;
   }
    return counter;
  }

  /*
  tests
  describe("Basic tests", function(){
Test.assertEquals(solve("codewarriors"),2);
Test.assertEquals(solve("suoidea"),3);
Test.assertEquals(solve("ultrarevolutionariees"),3);
Test.assertEquals(solve("strengthlessnesses"),1);
Test.assertEquals(solve("cuboideonavicuare"),2);
Test.assertEquals(solve("chrononhotonthuooaos"),5);
Test.assertEquals(solve("iiihoovaeaaaoougjyaw"),8);
});
  */