
public class TypesAndVariables {
public static void main(String[] args) {
	int myVariable;
	myVariable = 5;
	System.out.println(myVariable);

	int myVar2 = 7;
	System.out.println(myVar2 + myVariable);
	
	double x = 2.9;
	System.out.println(x);
	System.out.println(x + myVar2);
	x = myVar2;
	System.out.println(x);
	
	String hi = "Hello World!";
	String whoScreaming = "Hariet: ";
	System.out.println(whoScreaming + hi);
}
}