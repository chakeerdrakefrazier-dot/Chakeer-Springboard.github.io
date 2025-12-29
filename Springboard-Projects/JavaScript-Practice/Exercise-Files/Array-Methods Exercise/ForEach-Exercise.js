// Array Methods - forEach Exercise

// Part 1 - forEach Exercise

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
}

// test 
console.log(doubleValues([1,2,3])); // [5,10,15]
console.log(doubleValues([5,1,2,3,10])); // [25,5,10,15,50] 


/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
}

// test
console.log(onlyEvenValues([1,2,3])); // [2]
console.log(onlyEvenValues([5,1,2,3,10])); // [2,10]

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
}

// test
console.log(showFirstAndLast(['colt','matt', 'tim', 'test'])); // ["ct", "mt", "tm", "tt"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])); // ['hi', 'ge', 'se']

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let newArr = [];
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
}

// test
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')); 
// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   let splitArr = str.split("");
   let obj = {};
   const vowels = "aeiou";

   splitArr.forEach(function(letter) {
     let lowerCasedLetter = letter.toLowerCase()
     if (vowels.indexOf(lowerCasedLetter) !== -1) {
       if (obj[lowerCasedLetter]) {
         obj[lowerCasedLetter]++;
       } else {
         obj[lowerCasedLetter] = 1;
       }
     }
   });
   return obj;  
}

// test
console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};

// Part 2 - Map & Filter Exercise

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap
(arr) {
    return arr.map(function(val) {
      return val * 2;
    })

}

// test
console.log(doubleValuesWithMap([1,2,3])); // [2,4,6]
console.log(doubleValuesWithMap([1,-2,-3])); // [2,-4,-6]   

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/
function valTimesIndex(arr, key,){
    return arr.map(function(val, index) {
        return val * index;
    });
}   

// test
console.log(valTimesIndex([1,2,3])); // [0,2,6]
console.log(valTimesIndex([1,-2,-3])); // [0,-2,-6]


/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key)
{
    return arr.map(function(val) {
      return val[key];
    }); 
}

// test
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')); // ['Elie', 'Tim', 'Matt', 'Colt']

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(val) {
        return val[key] !== undefined;
    });
}

// test
console.log(filterByValue(
    [{first: 'Elie', last:"Schoppik"}, 
     {first: 'Tim', last:"Garcia", isCatOwner: true}, 
     {first: 'Matt', last:"Lane"}, 
     {first: 'Colt', last:"Steele", isCatOwner: true}], 
    'isCatOwner')); 
// [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]

