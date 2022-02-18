/*You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an 
integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.



Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees. */

function pickFruits (input) {
   let fruits = {};
    for(let index = 0 ; index < input.length ;index ++) {
        if(fruits.hasOwnProperty(input[index])) {
            let key = input[index];
            fruits[key] += 1; 
        }
        else {
            key = input[index];
            fruits[key] = 1
        }
    }
    let max = fruits[input[0]] ; let secondmax = 0;

    for(let keys in fruits) {
        let temp = fruits[keys];
        if(temp > max) {
            max = temp;
        }
        else{
            let temp = fruits[keys]
            secondmax = temp;
        }
    }
    
    return max+secondmax;
}

console.log("first" ,pickFruits([0,1,2,2])); //3

console.log("second" ,pickFruits([1,2,3,2,2])); //4

console.log("third",pickFruits([1,2,1])); //3




