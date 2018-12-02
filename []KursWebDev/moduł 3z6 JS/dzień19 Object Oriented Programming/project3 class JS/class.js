const OldFamily = function (name) {
    this.name = name;
};

OldFamily.prototype.addMember = function () {};
const flintstones = new OldFamily('Flintstones');
console.log(flintstones);

class NewFamily {
    constructor(name) {
        this.name = name;
    }
    addMember() {}
}
const jetsons = new NewFamily('Jetsons');
console.log(jetsons);



class SchoolClass {
    constructor(members, name, ...students) {
        this.name = name;
        this.members = members;
        this.students = students;
    }
    addMember(newMember) {
        this.members++;
        this.students.push(newMember);
    }

    static addSchoolTeacher(...teachers) {
        return teachers
    }
}

const firstB = new SchoolClass(5, 'First B', "Andrea", "Bob", "Frank", "Helen", "Stuart");

firstB.addMember("Bbarbara");
console.log(firstB);

const schoolTeachers = SchoolClass.addSchoolTeacher("Eleonor Fox", "Ivan MacClay")
console.log(schoolTeachers);




// extend super 
class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    breathing() {
        console.log('The Animal is breathing');
    }
}

const frog = new Animal(2, 'Frog');
console.log(frog);




class Mammal extends Animal {
    constructor(age, name, hairs) {
        super(age, name)
        this.hairs = hairs;
    }
    milkFeeding() {
        console.log('The Mammal eat milk his mother');
    }
}

const hamster = new Mammal(1, 'Hamster', 'dark brown');
console.log(hamster);

hamster.breathing()




class Human extends Mammal {
    //inside could be nothin...
}

const simpleton = new Human(34, "Bob", "dark blond/grey")
console.log(simpleton);
simpleton.breathing();