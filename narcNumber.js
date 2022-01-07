/*
Does my number look big in this? Codewars kata by Julian Nicholls (6kyu)
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will 
restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your
language, e.g. PHP.
Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

*/

function narcissistic(value) {
    let arr = value.toString().split('').map(Number);
    let length = arr.length;
    let num = 0;
    for (let i = 0; i < length; i++){
      num += Math.pow(arr[i], length);
    }
    return num === value ? true : false;
  }
  

  /*
  describe( "Narcissistic Function", function() {
  it( "should find small numbers are all narcissistic", function() {
    Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
  });
  
  it( "should find these numbers are narcissistic", function() {
    Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
  });
});  
  */