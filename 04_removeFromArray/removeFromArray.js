const removeFromArray = function(arr,...num) {
    const ar=[];
    for(let i=0;i<arr.length;i++)
    {
        if(num.includes(arr[i]))
        {
            continue;
        }
        else
        ar.push(arr[i]);
    }
    return ar;
};

// Do not edit below this line
module.exports = removeFromArray;
