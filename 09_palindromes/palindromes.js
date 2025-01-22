const palindromes = function (str) {
    let arr=[];let arr_rev=[];
    for (let i = 0; i < str.length; i++) {
        if((str[i].toLowerCase()>='a' && str[i].toLowerCase()<='z' )|| (str[i]>='0' && str[i]<='9'))
        {
            arr.push(str[i].toLowerCase());
        }
        
    }
    arr_rev=[...arr].reverse();
    if(arr_rev.join("")===arr.join(""))
        return true;
    else 
        return false;

};

// Do not edit below this line
module.exports = palindromes;
