package RegularExpressionsExercises;

import java.util.Scanner;

public class BaseConsole {
  private Scanner scanner = new Scanner(System.in);

  public String getTextFromConsole() {
    return scanner.nextLine(); // przykład zastosowania dziedziczenia metody i uzywania
  }
}
