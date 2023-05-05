const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

let allArrays = [extraLargeArray,largeArray,mediumArray,smallArray,tinyArray];
let arrNames = ['extraLargeArray','largeArray','mediumArray','smallArray','tinyArray']

// How long does it take to double every number in a given 
// array? 
console.log('===============================')
// Try it with first function
for(i = 0; i < allArrays.length; i++){

    perf.start();                     // Starts timer
    doublerAppend(allArrays[i]);
    let resultsAppend = perf.stop();  // Stops timer and save time results
    
    
    // Try it with second function
    perf.start();
    doublerInsert(allArrays[i]);
    let resultsInsert = perf.stop();
    
    
    console.log(`Results for the ${arrNames[i]}`);
    console.log("insert", resultsInsert.preciseWords);
    console.log("append", resultsAppend.preciseWords);
    console.log('===============================')
}
