//QUESTION 1
/* Create a function with a function name printSum( ) and 
 print the sum of an array.*/

let arr = [1, 2, 3, 4];

function printSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

printSum(arr);




//QUESTION 2
/* Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]
If a[i]>b[i] then alice is awarded 1point

If a[i]<b[i] then bob is awarded 1 point

If a[i]===b[i] then none of them gets a point

The comparison points should be the total points a person earned. */

let alice = [60, 0, 80];
let bob = [50, 20, 100];

function compareFunc(a, b) {
    let aPoints = 0;
    let bPoints = 0;
    for (let i = 0; i < alice.length; i++) {
        if (a[i] > b[i]) {
            aPoints++;
        } else if (a[i] < b[i]) {
            bPoints++;
        }
    }

    return [aPoints, bPoints];
}

compareFunc(alice, bob);





//QUESTION 3
/* Given an array of integers, calculate the ratio of its elements that are 
positive, negative and zero. Print the decimal value of each fraction on a new line with places after the decimal. */

let arrayOfInt = [6, -8, 2, -5, 0];

function plusMinus(arr) {
    let positiveNum = 0;
    let negativeNum = 0;
    let zeroNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNum++;
        }
        if (arr[i] < 0) {
            negativeNum++;
        }
        if (arr[i] === 0) {
            zeroNum++;
        }
    }
    console.log(parseFloat(positiveNum / arr.length));
    console.log(parseFloat(negativeNum / arr.length));
    console.log(parseFloat(zeroNum / arr.length));
}

plusMinus(arrayOfInt);





//QUESTION 4
/* Given an array of integers, calculate the ratio of its elements that are positive, negative and zero. 
Print the decimal value of each fraction on a new line with places after the decimal. */


function firstFunction(num1, num2) {
    return num1 + num2;
}

firstFunction(2, 7);