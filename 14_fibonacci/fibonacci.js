const fibonacci = function (n) {
    if (+n === 0) {
        return 0
    }

    if(+n < 0){
        return 'OOPS'
    }
    
    let arr = [0, 1];
    for (let i = 2; i <= +n; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr.at(-1)
};

// Do not edit below this line
module.exports = fibonacci;
