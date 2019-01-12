import java.util.Scanner;

public class HiLo {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int theNumber = (int)(Math.random()*123+1);
//		System.out.println(theNumber);
		
		int gues = 0;
		System.out.println("Guess a number between 1 and 123");
		gues = scan.nextInt();
		System.out.println("Your number is " + gues + ".");
		
		if(theNumber != gues && theNumber > gues) {
			System.out.println("Try again Master. Your number qould be little bit bigger");
		} else if(theNumber != gues && theNumber < gues) {
			System.out.println("Try again Master. Your number qould be little bit lower");
		} else {
			System.out.println("Yes! You gues correct! Congratulations!");
		}
	}

}
