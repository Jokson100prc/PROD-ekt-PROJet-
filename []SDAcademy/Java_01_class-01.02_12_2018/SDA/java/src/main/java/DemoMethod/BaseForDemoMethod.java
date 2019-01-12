package DemoMethod;

public class BaseForDemoMethod {
  public static void main(String[] args){



    String[] houses = {"Mławska","Pławska", "Argentyńska"};
    House house = new House();
    house.property(houses);

  }
}


class House {

  void inmate(String fName, String lName, int loyalty){
    System.out.println(fName + " " + lName + " period: " + loyalty);
  }

  String property(String[] adress){
    String proper = "";
    for (int i = 0; i < adress.length; i++) {
      proper = adress[i];
      System.out.println(proper);
    }
    return proper;
  }

  int rent(int fee, int area,int members){
    return fee * area *members;
  }

}
