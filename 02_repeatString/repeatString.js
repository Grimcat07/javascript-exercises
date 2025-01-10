const repeatString = function(string,num) {
    st=""
    if(num<0) return "ERROR"
    else{
    for(let i=0;i<num;i++){
        st=st+string;
    }
    return st;
}
};
let st=""

// Do not edit below this line
module.exports = repeatString;
