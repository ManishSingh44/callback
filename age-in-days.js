function ageInDays(person){
    const fullName =`${person.firstName} ${person.lastName}`;
    const ageInDays = person.age*365;
    function logMessage(){
        console .log (` the person's full name is ${fullName} and their age in days is ${ageInDays}`);
    }return logMessage;
}
const person ={
    firstName: 'Manish',
    lastName: 'Singh' ,
    age: 19 ,
};
const logMessageFn = ageInDays(person);
logMessageFn();

    