
public class Methods {
public static void main(String[] args) {
	sayHelloWorld();
	
	sayHelloTo("Charlie");
	sayHelloTo("Hariet");
	
	int x = returnNr();
	System.out.println(x);
	
	int result = square(returnNr());
	System.out.println(result);
}

static int square(int x) {
	return x*x;
}

static int returnNr() {
	return 5;
}

static void sayHelloTo(String name) {
	
	System.out.println("Hello, " + name);
}
	static void sayHelloWorld() {
		System.out.println("Hello World!");
	}
}
