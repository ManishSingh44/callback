function greet(name){
    return new Promise((resolve,reject)=>{
        if (typeof name === 'string'){
            resolve (`hello, ${name}`);
        }
        else{
            reject(new Error ('Name must be a string'));
        }
    });
}
greet('manish')
.then(message => console.log(message))
.catch(error => console.error(error));