/*
Sequence Classifier by GiacomoSorbi on codewars, 6kyu
A series or sequence of numbers is usually the product of a function and can either be infinite or finite.

In this kata we will only consider finite series and you are required to return a code according to the type of sequence:
Code 	Type 	                Example
0 	    unordered 	            [3,5,8,1,14,3]
1 	    strictly increasing 	[3,5,8,9,14,23]
2 	    not decreasing 	        [3,5,8,8,14,14]
3 	    strictly decreasing 	[14,9,8,5,3,1]
4 	    not increasing 	        [14,14,8,8,5,3]
5 	    constant 	            [8,8,8,8,8,8]

You can expect all the inputs to be non-empty and completely numerical arrays/lists - no need to validate the data; do not go for 
sloppy code, as rather large inputs might be tested.

Try to achieve a good solution that runs in linear time; also, do it functionally, meaning you need to build a pure function or, 
in even poorer words, do NOT modify the initial input!

*/

function sequenceClassifier(arr){
    let trackedNum = 0;
    let increase = 0;
    let decrease = 0;
    let same = 0;
    for (let i = 0; i < arr.length; i++){
      for (let j = i + 1; j < arr.length; j++){
        trackedNum = arr[i];
        if (trackedNum < arr[j]){
          increase++;
        } else if (trackedNum > arr[j]){
          decrease++;
        } else if (trackedNum === arr[j]){
          same++;
        }
      }
      if (same === arr.length - 1){
        break;
      }
    }
    if (same === arr.length - 1 && increase === 0 && decrease === 0){
      return 5
    } else if (increase != 0 && decrease != 0 && same != 0){
      return 0;
    } else if(increase != 0 && decrease === 0 && same === 0){
      return 1;
    } else if(increase != 0 && decrease === 0 && same != 0){
      return 2;
    } else if (increase === 0 && decrease != 0 && same === 0){
      return 3;
    } else if (increase === 0 && decrease != 0 && same != 0){
      return 4;
    }
  }
  
/*
describe("Basic tests",() =>{
  Test.assertEquals(sequenceClassifier([3,5,8,1,14,3]),0);
  Test.assertEquals(sequenceClassifier([3,5,8,9,14,23]),1);
  Test.assertEquals(sequenceClassifier([3,5,8,8,14,14]),2);
  Test.assertEquals(sequenceClassifier([14,9,8,5,3,1]),3);
  Test.assertEquals(sequenceClassifier([14,14,8,8,5,3]),4);
  Test.assertEquals(sequenceClassifier([8,8,8,8,8,8]),5);
  Test.assertEquals(sequenceClassifier([8,9]),1);
  Test.assertEquals(sequenceClassifier([8,8,8,8,8,9]),2);
  Test.assertEquals(sequenceClassifier([9,8]),3);
  Test.assertEquals(sequenceClassifier([9,9,9,8,8,8]),4);
})
*/