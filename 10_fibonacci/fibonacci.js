const fibonacci = function(number) {
    if(typeof num!='number')
        num=parseInt(number);
    else
        num=number
    let fib=0; let a=0; let b=1;
    if((num>0)){
    for (let i = 0; i < num; i++) {
        fact =a+b;
        b=a;
        a=fact;
        
    }}
    else if((num==0))
     fact=0;
    else
        return 'OOPS'
    return fact;
};

// Do not edit below this line
module.exports = fibonacci;
