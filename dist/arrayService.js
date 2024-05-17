"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performArrayOperations = void 0;
function performArrayOperations(array) {
    const results = {};
    // Concat
    results.concat = array.concat([6, 7, 8]);
    // LastIndexOf
    results.lastIndexOf = array.lastIndexOf(3);
    // Push
    const pushArray = [...array];
    pushArray.push(6);
    results.push = pushArray;
    // Splice
    const spliceArray = [...array];
    results.splice = spliceArray.splice(1, 2);
    // Pop
    const popArray = [...array];
    results.pop = popArray.pop();
    // Slice
    results.slice = array.slice(1, 3);
    // Map
    results.map = array.map((item) => item * 2);
    // Shift
    const shiftArray = [...array];
    results.shift = shiftArray.shift();
    // Filter
    results.filter = array.filter((item) => item > 2);
    // Unshift
    const unshiftArray = [...array];
    unshiftArray.unshift(0);
    results.unshift = unshiftArray;
    // ForEach
    results.forEach = [];
    array.forEach((item) => results.forEach.push(item));
    // Flat
    const nestedArray = [[1, 2], [3, 4], [5, 6]];
    results.flat = nestedArray.flat();
    // Find
    results.find = array.find((item) => item === 3);
    // Join
    results.join = array.join("-");
    // FindIndex
    results.findIndex = array.findIndex((item) => item === 4);
    // ToString
    results.stringRepresentation = array.toString();
    // Some
    results.some = array.some((item) => item > 3);
    // Split
    const stringToSplit = "Hello World";
    results.split = stringToSplit.split(" ");
    // Every
    results.every = array.every((item) => item > 0);
    // Replace
    const stringToReplace = "Hello World";
    results.replace = stringToReplace.replace("World", "Universe");
    // Includes
    results.includes = array.includes(3);
    // IndexOf
    results.indexOf = array.indexOf(2);
    return results;
}
exports.performArrayOperations = performArrayOperations;
//# sourceMappingURL=arrayService.js.map