function manipulateString(str){
    const manipulateStr = str.toUpperCase();
    function logString(){
        console. log(`the manipulated string is : ${manipulateStr}`)
    }
    return logString;
}
const callbackFn = manipulateString('hello world');
callbackFn();