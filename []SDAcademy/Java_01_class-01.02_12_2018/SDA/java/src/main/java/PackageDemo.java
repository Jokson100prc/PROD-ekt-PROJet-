import car.Car;

public class PackageDemo {
    public static void main(String[] args){
        Car porshe = new Car("LGA 18895", 300);
        System.out.println(porshe);
//        System.out.println(porshe.carId);
//        System.out.println(porshe.power);

        System.out.println(porshe.getCarId());
        System.out.println(porshe.getPower());

    }
}
