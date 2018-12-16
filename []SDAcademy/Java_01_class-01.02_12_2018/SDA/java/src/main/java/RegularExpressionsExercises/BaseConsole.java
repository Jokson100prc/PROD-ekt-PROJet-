package RegularExpressionsExercises;

import java.util.Scanner;

public class BaseConsole {
  private static Scanner scanner = new Scanner(System.in);

  public static String getTextFromConsole() {
    return scanner.nextLine(); // przykład zastosowania dziedziczenia metody i reUżywania
  }
}
