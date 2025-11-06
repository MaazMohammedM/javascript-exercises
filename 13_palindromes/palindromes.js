const palindromes = function (string) {
    let cleanedStr = string.replace(/[^a-zA-z0-9]/g, "").toLowerCase();
    let reversedStr = string.replace(/[^a-zA-z0-9]/g, "").toLowerCase().split('').reverse().join('');
    return cleanedStr === reversedStr ? true : false
};

// Do not edit below this line
module.exports = palindromes;
