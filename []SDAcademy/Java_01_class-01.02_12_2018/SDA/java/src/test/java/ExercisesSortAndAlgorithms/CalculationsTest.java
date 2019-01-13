package ExercisesSortAndAlgorithms;

import org.junit.Assert;
import org.junit.Test;

import java.util.Arrays;
import java.util.List;

public class CalculationsTest {
  List<Integer> numbers = Arrays.asList(5, 2, 4, 7, 9);

  @Test
  public void findMax() {
    Integer maxNumber = new Calculations().findMax(numbers);
    Assert.assertTrue(9 == maxNumber);
  }

  @Test
  public void findMin() {
    Integer maxNumber = new Calculations().findMin(numbers);
    Assert.assertTrue(2 == maxNumber);
  }

  @Test
  public void findArithmeticAvg() {
    Float arithmeticAvg = new Calculations().findArithmeticAvg(numbers);
    Assert.assertTrue(5.4f == arithmeticAvg);
  }

  @Test
  public void findGeometricAvg() {
    Float geometricAvg = new Calculations().findGeometricAvg(numbers);
    Assert.assertTrue(4.789389f == geometricAvg);
  }
}