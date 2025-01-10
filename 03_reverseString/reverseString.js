const reverseString = function(string) {
    st=""
    for(let i=string.length-1;i>=0;i--)
    {
        st=st+string[i];
    }
    return st

};
let st="";
// Do not edit below this line
module.exports = reverseString;
