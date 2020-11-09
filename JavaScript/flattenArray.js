// Write a function that takes an array and returns a flattened
// version of the input array.
// Examples:
// flatten([ 1, 2, [ 3, [ 4, 5, [ 6, [ 7 ] ], 8 ], 9 ] ])
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// flatten([[[[1]]]])
// [1]

//const flatten: (number | Array<any>) => Array<any>;
// Given a second, optional, parameter depth
// flatten(arr: Array<any>, depth: number | undefined)
// flatten([[[[1]]]]) // [ 1 ]
// flatten([[[[1]]]], 0) // [[[[1]]]]
// flatten([[[[1]]]], 1) // [[[ 1 ]]]
// flatten([[[[1]]]], 2) // [[ 1 ]]
// flatten([[[[1]]]], 3) // [ 1 ]

const arr = [ 1, 2, [ 3, [ 4, 5, [ 6, [ 7 ] ], 8 ], 9 ] ];
const arr2 = [[[[1]]]];


//my first pass

function flattenArray (arr, depth, res, ct) {
  let result = res || [];
  let dep = depth;
  let count = ct || 0;
  console.log('depth', depth);
  console.log('count', count);
  if(Array.isArray(arr)) {
    
     arr.forEach(el => {
    
      if(Array.isArray(el) && count < dep){
        el.forEach(el2 => flattenArray(el2, dep, result, count));
      } else {
        result.push(el);
        count++;
      }
      
    });
  } else {
  
    result.push(arr);
    count++;
  }
  
  return result;
  
}

console.log(flattenArray(arr, 5));

//with generator function

function* flatten (arr) {
    for (const val of arr) {
        Array.isArray(val) ? yield* flatten(val) : yield val;
    }
}
 
const arr = [[1,2],[3,[4,[5]]]];
 
const flattened = [...flatten(arr)];
console.log(flattened);