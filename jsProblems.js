const perf = require('execution-time')();

//========== Sum Zero ================== Complexity O(n^2)
const addToZero = arr =>{
    if(arr.length > 1){
        for(i = 0; i < arr.length; i++){
            let check = arr[i]
            for(j = 0; j < arr.length; j++){
                if(check + arr[j] == 0){
                    return console.log(true)
                }
            } 
        }
        return console.log(false)
    }else{
        return console.log(false)
    }

}
perf.start();
addToZero([]);
let results = perf.stop();
console.log("Add to zero", results.preciseWords);

// -> False

perf.start();
addToZero([1]);
// -> False
results = perf.stop();
console.log("Add to zero", results.preciseWords);

perf.start();
addToZero([1, 2, 3]);
// -> False
results = perf.stop();
console.log("Add to zero", results.preciseWords);

perf.start();
addToZero([1, 2, 3, -2]);
// -> True
results = perf.stop();
console.log("Add to zero", results.preciseWords);

console.log('===========================')
//========== Unique Characters ========= Complexity O(n)
const hasUniqueChars = str =>{
        for (i = 0; i < str.length; i ++){
            let j = i + 1;
            if (str[i] === str[j]){
                return console.log(false)
            }
      }
    return console.log(true)
}

perf.start();
hasUniqueChars("Monday");
// -> True
results = perf.stop();
console.log("Unique Chars", results.preciseWords);

perf.start();
hasUniqueChars("Moonday");
// -> False
results = perf.stop();
console.log("Unique Chars", results.preciseWords);

console.log('===========================')
//========== Pangram Sentence ========== Complexity O(n)
const isPangram = str =>{
    let strLetters = str.toLowerCase()
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(i = 0; i < alphabet.length; i++){
        if (strLetters.indexOf(alphabet[i]) < 0) {
            return console.log(false);
        }
    }
    console.log(true)
}

perf.start();
isPangram("The quick brown fox jumps over the lazy dog!");
// -> True
results = perf.stop();
console.log("panagram", results.preciseWords);

perf.start();
isPangram("I like cats, but not mice");
// -> False
results = perf.stop();
console.log("panagram", results.preciseWords);

console.log('===========================')
//========== Longest Word ============== Complexity O(n^3)
const findLongestWord = arr =>{
    let comparison = []
    let longest = 0;
    for(i = 0; i < arr.length; i++){
        comparison.push(arr[i].length)
    }
    for(i = 0; i < comparison.length; i++){
        longest = i;
        for(j = 1; j < comparison.length; j++){
            if(longest < comparison[j]){
                longest = comparison[j]
            }
        }
    }
    console.log(longest)
}
perf.start();
findLongestWord(["hi", "hello"]);
results = perf.stop();
console.log("longest runtime", results.preciseWords);
// -> 5
perf.start();
findLongestWord(["hi", "hello",'he','Alongerword']);
results = perf.stop();
console.log("longest runtime", results.preciseWords);
// -> 11
