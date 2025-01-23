var maximumOddBinaryNumber = function (s) {
    count1 = [...s].filter((char) => char === '1').length
    count0 = [...s].filter((char) => char === '0').length

    if (count1 === 0) {
        return "";
    }

    const result = '1'.repeat(count1 - 1) + '0'.repeat(count0) + 1
    return result
};
console.log(maximumOddBinaryNumber("010"));


