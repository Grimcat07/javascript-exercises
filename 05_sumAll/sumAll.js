const sumAll = function(start,end) {
    let sum=0;
    if (typeof start !="number" ||typeof end != "number" || !Number.isInteger(start) || !Number.isInteger(end)|| end<0||start<0) {
        return "ERROR";   
    }
    if(start>end)
    {
        let temp=start;
        start=end;
        end=temp;
    }
    
    while(start<=end) 
    {
        sum=sum+start;start++;

    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
