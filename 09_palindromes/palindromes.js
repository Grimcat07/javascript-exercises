const palindromes = function (str) {


    let subst=str.split("").reverse().join("");
    if(subst==str)
        return true;
    else 
        return false;

};

// Do not edit below this line
module.exports = palindromes;
