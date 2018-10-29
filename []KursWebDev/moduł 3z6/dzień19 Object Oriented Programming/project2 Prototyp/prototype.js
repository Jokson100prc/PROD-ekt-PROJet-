const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    this.addChildren = function (name) {
        this.children.push(name);
    }
}

const arek = new Person('Arek', 28);
const beata = new Person('Beata', 24);

arek.addChildren('Zosia');
beata.addChildren('Zosia');

console.table(arek.children);
console.table(beata.children);







const SolarSystem = function (planet, size) {
    this.planet = planet;
    this.size = size;
    this.moons = [];
};

class SunPlanets {

}

SolarSystem.prototype.addMoon = function (moon) {
    this.moons.push(moon);
}

const jupiter = new SolarSystem("Jupiter", "XXL");
const saturn = new SolarSystem('Saturn', 'XXL');

jupiter.addMoon('Europa');
jupiter.addMoon('Io');
saturn.addMoon('Titan');

console.table(jupiter.moons);
console.log(saturn);
console.log(jupiter.constructor); // refer to the prototype


const venus = new SunPlanets("Venus", "S");

console.log(venus.constructor); // refer to the prototype






function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
    // this.changeCitizenship = function (citizenship) {
    //     this.citizenship = citizenship;
    //     console.log(`Change of citizenship by the method in the object instance to the ${this.citizenship}`);
    // } // uncomments this, yuo'll should go to console ;)(before and after)
};

// changeCitizenship() PROTO
Citizen.prototype.changeCitizenship = function (citizenship) {
    this.citizenship = citizenship;
    console.log(`Change of citizenship by the method prototype from constructor, to the ${this.citizenship}`)
}

const zenek = new Citizen();
const albert = new Citizen;
const sue = new Citizen;

zenek.citizenship = "Irish"
albert.citizenship = "Polish"
sue.citizenship = "American"

zenek.country = "Irland"
albert.country = "Poland"
sue.country = "Croatia"

zenek.changeCitizenship('Polish');





// Exchange
const newArr = [8, 5, 75, 2, 4];
Array.prototype.delete = function (index) {
    return this.splice(index, 1);
}

console.log(newArr);
newArr.delete(2);
console.log(newArr);




// Chine Proto

newArr.__proto__; // proto contructor
newArr.__proto__.__proto__; // proto Object
newArr.__proto__.__proto__.__proto__; // proto null




// instanceOf
console.log(newArr instanceof Array);
console.log(newArr instanceof Object);
console.log(newArr instanceof SolarSystem);

console.log(jupiter instanceof Array);
console.log(jupiter instanceof Object);
console.log(jupiter instanceof SolarSystem);



// getPrototypeOf
console.log('getPrototypeOf');
console.log(Object.getPrototypeOf(newArr));
Object.getPrototypeOf(saturn);
Object.getPrototypeOf(arek);


const gregory = new Citizen();
// gregory.__proto__ = Citizen.prototype
console.log(gregory);