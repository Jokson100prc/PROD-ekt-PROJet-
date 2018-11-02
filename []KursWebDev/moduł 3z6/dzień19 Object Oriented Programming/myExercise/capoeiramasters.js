const date = new Date();
let year = date.getFullYear();
console.log(year);


class CapoeiraMaster {
    constructor(name, comFrom, born, today, style, musican, speed, malisia, age) {
        this.name = name,
            this.comFrom = comFrom,
            this.born = born,
            this.today = today,
            this.style = style,
            this.musican = musican,
            this._speed = speed,
            this._malisia = malisia;
        let _age = age;
    }
    getAge() {
        return this._age
    }
    setAge(value) {
        let age = this.today - this.born;
        return this._age = age

    }
}



const pastinha = new CapoeiraMaster("Pastinha", "Salvador da Bahia", 1889, 1981, "Angola", "of Roots", 97, "Master")
console.log(pastinha);
pastinha.getAge();
pastinha.setAge(pastinha.today - pastinha.born);






const bimba = new CapoeiraMaster("Bimba", "Rio de Janeiro", 1899, 1974, "Regional - Creator", "of Roots", 92, "Master")
console.log(bimba);
bimba.getAge();
bimba.setAge(bimba.today - bimba.born);




const bocaRica = new CapoeiraMaster("Boca Rica", "", 1936, year, "Angola", "Grand Master of Capoeira Music", 55, "Master")
console.log(bocaRica);
bocaRica.getAge();
bocaRica.setAge(bocaRica.today - bocaRica.born);