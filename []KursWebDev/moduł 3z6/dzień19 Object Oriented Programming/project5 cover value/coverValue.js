// _RECORD _CONVENTION says: that _value is SECRET value;

class Car {
    constructor(brand) {
        this._brand = brand; // secret value  _RECORD _CONVENTION
    }

    getColor() {
        return this._brand // _CONVENTION: _brand
    }

    setColor(value) {
        return this._brand = value
    }
}

const ford = new Car("Ford");
console.log(ford);



// _record _convention and use VARIABLE for realy  COVER  _VALUE;

class Dog {
    constructor(color, name) {
        this.color = color;
        let _name = name; // VARIABLE is a secret value + _CONVENTION: _name

        this.getName = () => _name; // got secret _value
        this.setName = (name) => _name = name; // set secret _value
    }
}
console.log(this.rex); // got only public value
const rex = new Dog('grey', "Rexio");
console.log(rex.getName());
console.log(rex.setName("Azor"));