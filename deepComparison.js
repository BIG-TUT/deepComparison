var deepEqual = function deepEqual (val1, val2) {
        var doObjectsHaveSameProperties = function doObjectsHaveSameProperties (object1, object2) {
                return Object.keys(object1).length === Object.keys(object2).length &&
                       Object.keys(object1).every(function (key) {
                           return key in object2;
                       });
            };
        return typeof val1 !== "object" ?
                   val1 === val2:
               val1 === null ?
                   val1 === val2:
               //ELSE
                   doObjectsHaveSameProperties(val1, val2) && Object.keys(val1).every(function (key) {
                       return deepEqual(val1[key], val2[key]);
                   });
    };

var obj1 = {
        prop1: 3,
        prop2: "THE BIG TEXAS!",
        prop3: {beef: 5, stew: null},
        prop4: {lisp: {someParenthesis: "()", moreParenthesis: "((()()(()))(())("}, goto: "structured programming"}
    },
    obj2 = {
        prop1: 3,
        prop2: "THE BIG TEXAS!",
        prop3: {beef: 5, stew: null},
        prop4: {lisp: {someParenthesis: "()", moreParenthesis: "((()()(()))(())("}, goto: "structured programming"}
    };
console.log(deepEqual(obj1, obj2));
