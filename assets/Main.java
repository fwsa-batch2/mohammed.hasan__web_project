import java.util.Scanner;

// import java.lang.System.Logger;
public class Main {
    public static void main(String[] name) {
        System.out.println("first" + name[0].toLowerCase());
        System.out.println("second" + name[1].toUpperCase());
        final int a = 5;
        int b = 10;
        returnName();
        // System.out.println("Sum is " + (a+b));
        // main h = new main();
        // System.out.println(h.sample1());
        // arrayTraversing();
    }
    private String sample1(){       // Here string means , it "must" return a string value
        System.out.println("Hello guys");
        if( 5 < 5 ){
        return "Hasan";
    }
        else{
            return "DON";
        }
    } 
    static void arrayTraversing(){
        String[] arr = {"hasan", "ismail", "mushraf" , "aswath"};
        for(String i : arr){  // for each loop
            System.out.println(i);
        }
    }
    static void returnName(){
        Scanner input = new Scanner(System.in);
        System.out.print("Enter name :");
        String nameOfUser = input.nextLine();
        System.out.println("Hello " + nameOfUser);
        input.close();
    }
}