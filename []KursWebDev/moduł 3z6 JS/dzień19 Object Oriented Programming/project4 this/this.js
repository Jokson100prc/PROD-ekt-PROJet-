// "use strict"


// const nf = function () {
//     console.log(this.element);
//     return "it returned the function";
// }

// const obj = {
//     element: "square",
//     showNf: nf,
// }

// // nf() //with "use trict" this gives error, without gives "undefned"
// // obj.showNf();
// // console.log(obj);
// const connect = obj.showNf();
// console.log("connect: " + connect);


// function one() {
//     this.name = "one";
//     return console.log(this.name);
// }
// window.one(); //with "use trict" and 'window.' this gives 'name="one"', without some of them gives error or... 'name="one"';


// const object1 = {
//     two: one,
//     four() {
//         console.log(this);
//     }
// }

// // object1.two();

// object1.four();
// const five = object1.one;
// const six = object1.two;
// const seven = object1.four;
// console.log(six);




// bound THIS to the...:

// 1.this - default bound to Window object

const thisExampleFunc = function () {
    console.log(this.example, this);
    const inside = function () {

        console.log(this.example, this);
    }
    inside()

}
thisExampleFunc()


// 2.this - Secret bound (wher is invoke/ where is object);

const thisSecret = {
    number: 33,

    showNumber() {
        console.log(this.number);
    },
    showNumber2: function () {
        console.log(this.number);
    }
}
thisSecret.showNumber();
// thisSecret.showNumber2();

const child = {
    number: 22,
    // showNumber: thisSecret.showNumber,
    showNumber2: thisSecret.showNumber2,
}

// child.showNumber();
child.showNumber2();




// 3.this - Public bound .call  .aplly


// A
const man = {
    id: "cdc 232141",
}

const showID = function () {
    console.log(`This is your ID: ${this.id}`);
}

showID(); // undefined;
showID.call(man); // this defind as parameter from call - .call(parameter);


// B
const showID2 = function (name, age) {
    console.log(`.CALL(this, x, y) -> User Name: ${name}, age ${age} and ID: ${this.id}`);
}

showID2.call(man, "Iktorn", 359);


// C
const showID3 = function (name, age) {
    console.log(`.APPLY(this, [x, y]) -> User Name: ${name}, age ${age} and ID: ${this.id}`);
}

showID3.apply(man, ["Iktorn", 359]);

// /
// //4.this - hard bound .bind(this);
// /

const showID4 = showID.bind(man);
showID4();




// 5.this - bound with 'new' operator;

class IsThis {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

const thisIsIt = new IsThis("This", 1);
console.log(thisIsIt);




// FAT ARROW 

const fatArrow = {
    num: 44,

    showNum() {
        console.log(this.num);
        console.log(this);
    },
    showNum2: () => {
        console.log(this.num);
        console.log(this);
    },
}

fatArrow.showNum();
fatArrow.showNum2(); // this defoult - window;