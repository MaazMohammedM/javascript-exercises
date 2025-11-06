const findTheOldest = function(arr) {
    
let currentYear = new Date().getFullYear();


return arr.reduce((oldest,current)=>((oldest.yearOfDeath || currentYear) - oldest.yearOfBirth)>((current.yearOfDeath || 2025) - current.yearOfBirth) ? oldest : current);

};

// Do not edit below this line
module.exports = findTheOldest;
