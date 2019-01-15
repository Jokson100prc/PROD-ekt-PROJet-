package ExercisesArray;

import java.util.List;

//***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ******   ***   ***   ***   ***   ***
//        3. Utwórz listę ArrayList przechowującą liczby zmiennoprzecinkowe. Dodaj ręcznie 10
//        liczb do listy.
//        a. Wyświetl sumę pierwszego i ostatniego elementu zapisanego w liście..
//        b. Wyświetl iloczyn pierwszego i ostatniego elementu zapisanego w liście.
//        c. Wyświetl iloraz drugiego i przedostatniego elementu zapisanego w liście.
//***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ******   ***   ***   ***   ***   ***
public class ThirdExerciseArrLiDouble {

  List<Double> actionOnDouble(List<Double> actOnDouble) {
    System.out.println(actOnDouble.get(0));


    double summaryDouble = actOnDouble.get(0) + actOnDouble.get(9);
    double productDouble = actOnDouble.get(0) * actOnDouble.get(9);
    double quotientDouble = actOnDouble.get(1) / actOnDouble.get(8);
    System.out.println(summaryDouble + " from third exercise");
    System.out.println(productDouble + " from third exercise");
    System.out.println(quotientDouble + " from third exercise");
    return actOnDouble;
  }
}
