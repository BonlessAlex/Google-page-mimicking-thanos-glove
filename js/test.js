console.log("Hellow");

console.log(3 + '42');
console.log(3 + '4' + 2);
console.log(3 + 4 + 2);
console.log(3 * '42');
console.log([1,2,3] + [4,5,6]);

console.log(typeof "Alex");
console.log(typeof 66);
console.log(typeof false);

console.log(typeof function(){});
console.log(typeof {});
console.log(typeof class {});

console.log("\"\"");
console.log("\\");
console.log("\\\\");

//** comment   "ctrl /" */
//**  垂直选中 shift alt */ 

const a = 1234;
// a = 12345;
//* console.log(a); 报错

let counter= 1;
function adder() {
    counter += 1;
} 

let n = 123;
n = "1234";
n = false;
console.log(typeof n)

//Hoisting
x = 5;
console.log(x);
var x;

let ar = [1,2];
ar[3] = 4;
console.log(ar)


//connect array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

console.log([255,255,255,255].join('.'));
arr1.push(100);
console.log(arr1);
console.log(arr1.pop());

arr2.reverse();
console.log(arr2);

arr4 = [1,5,2,9,[1,3,2]];
arr4.sort();
console.log(arr4);

arr5 = [1,4,2,5,7,3,8,2];
console.log(arr5.slice(1,4));

let cond = 99;
if (cond < 100) {
    console.log("Yes");
}
else {
    console.log("no");
}

// if else
cond < 100 ? console.log("Yes 666") : console.log("No 666");

cond > 100 ? console.log("No") : 
    (cond > 99.5 ? console.log("Noo") : console.log("Yessss"));

// loop
arrayeven = [];
for (let i = 6; i < 666; i += 6) { 
    if (i%6==0) {arrayeven.push(i);}
}
console.log(arrayeven);

let foreacharray = [21,21,32,43,54,324];
foreacharray.forEach(ele => console.log(ele))

//function
function times(a, b) {
    return a * b;
}
let timesresult = times(4, 3);

//objects 
var todoItem = {
    id: 1,
    content: 'TODO something',
    toString: function() { return this.id + " - " + this.content; }
}
console.log(todoItem[2, 'content']); // string value
console.log(todoItem.toString());

////////////////////////////////////////////

var objectdic = { key:21 };
function doSomething(args) {
    args.key = args.key + args.key;
}
doSomething(objectdic);
console.log(objectdic.key);


// Lambda
(x,y) => x * y;
// equal to (x,y) => return x * y;
setTimeout(function() {console.log("time out");}, 1000);
setTimeout(()=>console.log("time out"),1000);

//JSON
console.log(JSON.stringify({ x: 5, y: 6 }));
text = JSON.stringify({ x: 5, y: 6 });
let obj = JSON.parse(text); // json to obj
console.log(obj);

//Ajax
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
   
async function work() {
    await sleep(5000);
}
   
work();
