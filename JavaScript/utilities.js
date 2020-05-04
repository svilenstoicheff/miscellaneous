//remove duplicates
var stringArray = ["a", "b", "a", "c", "d", "a", "b", "e", "e", "e", "a", "e", "e", "b"],
    numbersArray = [5, 6, 5, 6, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 4, 4],
    stringWithDuplicates = 'aabbbcdddefffrrrgggttttt';

var Util = {
    dedupeStringMap: function (input) {
        var deduped = [];
        input.sort()
            .map(function (val, i) {
                if (val !== input[i - 1]) {
                    deduped.push(val);
                }
            });
        return deduped;
        //3525.8 ms per million runs
    },

    dedupeStringReduce: function (input) {
        var deduped = [];
        input.sort()
            .reduce(function (prev, curr, i, arr) {
                if (curr !== prev) {
                    if (deduped.length === 0) {
                        deduped.push(prev, curr);
                    } else {
                        deduped.push(curr);
                    }
                }
                return curr;
            });
        return deduped;
        //1571.2 ms per million runs
    },

    dedupeStringWhile: function (input) {
        deduped = [], index = 0;
        input.sort();
        while (index < input.length) {
            index++;
            if (input[index] !== input[index - 1]) {
                deduped.push(input[index - 1]);
            }
        }
        return deduped;
        //1341.0 ms per million runs
    },

    dedupeStringFor_Obj: function (input) {
        var obj = {};
        for (var i = 0; i < input.length; i++) {
            obj[input[i]] = input[i]; //Object keys are unique. In this case, the values don't matter.
        }
        return Object.keys(obj);
        //242.1 ms per million runs - fastest: no need to sort
    },

    dedupeStringFor_Arr: function (input) {
        deduped = [];
        input.sort();
        for (var i = input.length; i >= 0; i--) {
            if (input[i] !== input[i + 1]) {
                deduped.push(input[i]);
            }
        }
        return deduped;
        //1315.9 ms per million runs
    },

    dedupeStringForEach_Arr: function (input) {
        deduped = [];
        input.sort().forEach(function (item, idx) {
            var last = deduped.length - 1;
            if (item !== deduped[last]) {
                deduped.push(item);
            }
        });
        return deduped;
        //1392.7 ms per million runs
    },
    dedupeStringForEach_ArrSplice: function (input) {
        var newArr;
        input.sort().forEach(function (item, idx, arr) {
            while (item === arr[idx + 1]) {
                arr.splice(idx, 1);
            }
            newArr = arr;
        });
        return newArr;
        //680.3 ms per million runs
    },

    dedupeStringWithSet: function (input) {
        let strArray = Array.from(input);
        let strSet = new Set(strArray);
        return Array.from(strSet.keys()).join('');
        //1600 ms per million runs
    },

    //TO DO: work on dedupe function for objects. 

    checkPalindrome: function (input) {
        let inputStr = input.replace(/[\W_]/g,''),
            inputReverse = inputStr.split('').reverse().join('');
        return inputStr === inputReverse;
        //1253.2 ms per million runs
    },

    reverseString: function (input) {
        return input.split('').reverse().join('');
        //1184.0 ms per million runs
    },

    reverseInteger: function (input) {
        var reverseInt = 0;
        while (input !== 0) {
            reverseInt = reverseInt * 10 + input % 10;
            input = parseInt(input / 10);
        }
        return reverseInt;
        //100.5 ms per million runs
    },

    reverseIntAsString: function (input) {
        var neg = input < 0 ? '-' : '';
        return parseInt(neg + input.toString().split('').reverse().join(''));
        //1299.0 ms per million runs
    },
    findLongestStringContainingAllCharcters: function (a, b) {

        var returnValueArray = [], returnValue = '';

        a.map(function (element, idx) {
            var helper = '';
            for (var i = 0; i < b.length; i++) {
                if (element.indexOf(b[i]) > -1) {

                    helper = element;
                } else {
                    helper = '';
                }

            }
            returnValueArray.push(helper);

        });

        returnValueArray.map(function (val, j) {

            if (val.length > returnValue.length) {
                returnValue = val;
            }
        });

        return returnValue;
        // 4075.4 ms per million runs
    },

    // e.g. findLongestStringContainingAllCharcters (["ab","abc","abcde","abbddee"], ['a','b','c']);

    perfTest: function (times) {
        for (var i = times; i >= 0; i--) {
            //Util.dedupeStringMap(stringArray);
            //Util.dedupeStringReduce(stringArray);
            //Util.dedupeStringWhile(stringArray);
            //Util.dedupeStringFor_Arr(stringArray);
            //Util.dedupeStringFor_Obj(stringArray);
            //Util.dedupeStringForEach_Arr(stringArray);
            //Util.checkPalindrome('popopop');
            //Util.reverseString('abcdef');
            //Util.reverseInteger(123456);
            //Util.reverseIntAsString(123456);
            //Util.dedupeStringForEach_ArrSplice(stringArray);
            //Util.findLongestStringContainingAllCharcters(["ab", "abc", "abcde", "abbddee"], ['a', 'b', 'c']);
            Util.dedupeStringWithSet(stringWithDuplicates);
        }
    }

};

//Util.perfTest(1000000);