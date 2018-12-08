package car;

public class Car {

    private String carId;
    private int power;
    private double capacityFuel;
    private double levelFuel;
//    public String carId;
//    public int power;

    Car(){
        carId = "";
    }

    public Car(String carId, int power){
        this.carId = carId;
        this.power = power;
    }

    public String toString(){
        return carId + " " + power;
    }

    public double refuel(double level){
        if (capacityFuel >= levelFuel + level) {
            levelFuel = levelFuel + level;
        } else {
            double diff = capacityFuel - levelFuel;

        }
    }


    public String getCarId(){
        return carId;
    }

    public int getPower(){
        return power;
    }

}
