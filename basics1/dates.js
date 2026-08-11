const mydate=new Date
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.toLocaleDateString('en-IN'));
console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getMonth());

const createdate=new Date(2004,0,17)
// console.log(createdate.toDateString());


const createdate1=new Date(2004,0,17,11,11)
// console.log(createdate1.toLocaleString());

 const createdate2=new Date("01-17-2004")    //MM-DD-YY
// console.log(createdate2.toLocaleString());

 const createdate3=new Date("2004-07-13")    //YY-MM-DD
// console.log(createdate3.toLocaleString());

const timestamp=Date.now()
// console.log(timestamp);
// console.log(createdate2.getTime());
// console.log(timestamp/100000);
// console.log(Math.ceil(timestamp/100000));




