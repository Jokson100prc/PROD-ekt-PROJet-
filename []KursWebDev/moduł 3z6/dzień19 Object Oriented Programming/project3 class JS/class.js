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