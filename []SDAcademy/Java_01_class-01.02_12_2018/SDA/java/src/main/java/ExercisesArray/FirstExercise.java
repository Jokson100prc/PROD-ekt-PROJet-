package ExercisesArray;

//***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ******   ***   ***   ***   ***   ***
//        1. Utwórz 10 elementową tablicę przechowującą liczby całkowite (int)
//        a. Dodaj 10 kolejnych liczb do tablicy rozpoczynając od liczby 1
//        b. Wyświetl długość tablicy
//        c. Wyświetl kolejno elementy tablicy wykorzystując pętlę for.
//        d. Wykorzystując pętlę for pomnóż przez 2 kolejno każdy element w tablicy i
//        zapisz go ponownie w tablicy.
//        e. Wyświetl kolejno elementy tablicy wykorzystując pętlę for.
//***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ******   ***   ***   ***   ***   ***
public class FirstExercise {

  void incrementation(int[] numbers) {
    int number = 0;
    for (int i = 0; i < numbers.length; i++) {
      number++;
      numbers[i] = number;
    }
    System.out.println(numbers[0]);
    System.out.println(numbers[9]);
  }

  void product(int[] numbers){
    int number = 0;
    for (int i = 0; i < numbers.length; i++) {
      number++;
      number *= 2;
      numbers[i] = number;
      System.out.println(numbers[0] + " !!!");
      System.out.println(numbers[9] + " !!!");
    }

  }

}
