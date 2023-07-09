 import java.util.*;

 public class Fuction {
    // it is like def in python
    //void means it will not perform any operations
    //my is fuction MyName
    public static void MyName(String name){
        System.out.println(name);
        return;
    }
    public static int Sum(int a, int b){
        int sum=a+b;
        return sum;
    }
    public static int mul(int c , int d){
        int mul = c*d;
        return mul;
    }

    public static void facto(int e){

        if (e<0){
            System.out.println("Invaid number");
            return;
        }
        int fac =1;
        for(int i=e; i>=1;i--){
            fac=fac * i;
        }
        System.out.println(fac);    
    }

  
    public static void main (String args[]){
        //Scanner is input
        //like name.sc
        Scanner sc = new Scanner(System.in);
        String name = sc.next();
        MyName(name);

        int a = sc.nextInt();
        int b =sc.nextInt();
        int cal = Sum(a, b);
        System.out.println("Sum of two intergeral is :"+ cal);

        int c= sc.nextInt();
        int d= sc.nextInt();
        int mul= mul(c, d);
        System.out.println("Multipication is : " + mul);

        int e= sc.nextInt();
        facto(e);
    }
 }