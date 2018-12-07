
public class ClassesAndOjects {
public static void main(String[] args) {



Person john = new Person("John");
john.setAge(20);

Person bob = new Person("Bob");
bob.setAge(25);

john.sayHellowTo(bob);
bob.sayHellowTo(john);

System.out.println(john.getName()+ " is " + john.getAge() + " years old");
System.out.println(bob.getName() + " is " + bob.getAge() + " years old");
}
}
