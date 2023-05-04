function doubleArray(arr,callback){
    const doublearr =arr.map(callback);
    return doublearr;
}
const num =[6,4,3,2,1,8];
function double(num){
    return num*2;
}
const doubleNumber =doubleArray(num,double);
console.log(doubleNumber);