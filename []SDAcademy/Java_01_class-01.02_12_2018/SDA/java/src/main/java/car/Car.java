package car;

public class Car {

//    final private String carId;
//    final private int power;
//    final private double capacityFuel;


    public final String carId;
    public final int power;
    public final double capacityFuel;
    private double levelFuel;
//    public String carId;
//    public int power;

//    Car(){
//        carId = "";
//    }

    public Car(String carId, int power, double capacityFuel){
        this.carId = carId;
        this.power = power;
        this.capacityFuel = capacityFuel;
    }

    public String toString(){
        return carId + " " + power;
    }

    public double refuel(double level){
        if (capacityFuel >= levelFuel + level) {
            levelFuel = levelFuel + level;
            return 0;
        } else {
            double diff = capacityFuel - levelFuel;
            levelFuel = capacityFuel;
            return level - diff;
        }
    }


//    public String getCarId(){
//        return carId;
//    }
//
//    public int getPower(){
//        return power;
//    }

    public double getFuelLevel(){
        return levelFuel;
    }

}
