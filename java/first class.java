import java.util.Scanner;

class FirstClass {
    public static void main (String args[]){
    //it is used to print the string
    //println is for to print string in next line another line
    System.out.println("Hello World");
    //"\n" it is alternative method for print next string in next line
    System.out.print("hello world\n");
    System.out.print("hello world");
    //to print strings in new lines one after one
    System.out.print("hello world \nit is next line\nbye");



    String name = "Tony Stark";
    int age = 23;
    //double is used for float values
    double prices = 432;
    System.out.println(name);
    System.out.print(age);
    int a =45;
    int b = 32;
    int sum = a +b ;
    System.out.println(sum);


    //Scanner is used to get input
    //sc.nextInt()
    //sc.nextFloat()
    Scanner sc= new Scanner(System.in);
    String Name = sc.nextLine();
    System.out.print(Name);

    Scanner cs= new Scanner(System.in);
    String number =cs.next();
    System.out.println("Hello world");

    
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    int sum =a + b;
    System.out.println(sum);

    //if and else loop 

    Scanner sc = new Scanner(System.in);
    int age = sc.nextInt();

    if (age >18) {
        System.out.println("You are adult");
    } else {
        System.out.println("You are not adult");
    }
    int number = sc.nextInt();

    if (number%2==0) {
        System.out.println("Number is even");
    }else {
        System.out.println("number is odd");
    }


    //elif loop like python
    Scanner sc= new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();

    if (a==b){
        System.out.println("Number is equal");
    }else {
        if (a>b) {
            System.out.println("a number is greater than b");
        } else {
            System.out.println("b number is greater than a");
        }
    }

    // it is alternative method
    if (a==b){
        System.out.println("Number is equal");
    } else if (a>b){
        System.out.println("a is greater than b");
    } else {
        System.out.println("b is greater than a");
    }

    //button is like if else loop
    int button = sc.nextInt();

    switch(button){
        case 1 : System.out.println("Hello");
        break;
        case 2 : System.out.println("Namaste");
        break;
        case 3 : System.out.println("Bonjour");
        break;
        default: System.out.println("Invalid command");
    }



import java.util.Scanner;

import javax.swing.plaf.synth.SynthOptionPaneUI;

class Pratice {
    public static void main(String args[]) {
        //first cond is intial, second is final, last is increamental cond
        for (int counter = 0; counter < 3; counter= counter +1){
            System.out.println("hello world");
        }

        for (int count = 1; count < 5; count++){
            System.out.print(count+ "");
        }

        for (int i = 0; i < 11 ; i++ ){
            System.out.println(i);
        }

        int j=0;

        while(j<5){
            System.out.println("hello");
            j++;
        }
        // do is work to do for while loop
        int k= 0;
        do {
            System.out.println(k + " hello");
            k++;
        } while ( k <10);
    }
}





    }
}
