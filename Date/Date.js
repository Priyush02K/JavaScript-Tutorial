let a = new  Date();
console.log( a);

//method
let otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date('June 13 1976');
otherDate = new Date('09/16/1976');
console.log(otherDate);

let b;
c =otherDate.getDate();
c=otherDate.getDay();
c=otherDate.getMinutes();

c=otherDate.getTime();
c=otherDate.getMilliseconds();
c=otherDate.getMonth();
console.log(c);

otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);
