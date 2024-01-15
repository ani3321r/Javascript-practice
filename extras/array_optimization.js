const myArr = []
%DebugPrint(myArr)

//continous, Holey

//SMI(small integer)
//Packed element
//Double (float,string,function)

const arrTwo = [1, 2, 3, 4, 5]
//Packed_SMI_ELEMENTS

arrTwo.push(6.0)
//Packed_DOUBLE_ELEMENTS

arrTwo.push('7')
//Packed_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

//ORDER OF OPTIMIZATION
//SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrFour[0] = '1' //HOLEY_ELEMENTS
arrFour[1] = '2'//HOLEY_ELEMENTS
arrFour[2] = '3'//HOLEY_ELEMENTS

const arrFive = [] // this one is more optimised than arrFour
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]
//PACKED_DOUBLE
arrSix.push(NaN)// once we push Nan or infinity there is no going back to a more optimised code so be aware of that

// it is always prefered to use for, for-of, forEach loop as javascript is optimised for these methods