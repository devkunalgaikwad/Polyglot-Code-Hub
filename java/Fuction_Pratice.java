import java.util.*;

import javax.swing.ToolTipManager;
import javax.swing.plaf.synth.SynthSpinnerUI;


public class Fuction_Pratice{
    
    public static int average(int number1, int number2, int number3){
        int aver= (number1+number2+number3)/(3);
        return aver;
    }

    public static void odd_number(int sample_number){
        int total_number=1;
        for (int a=1 ; a >= sample_number; a=a+2){
            total_number= total_number+a;
        }
        System.out.println(total_number);
    }
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int number1 =sc.nextInt();
        int number2 = sc.nextInt();
        int number3 = sc.nextInt();

        int averr = average(number1, number2, number3);
        System.out.println("Average of three number : "+ averr);

        int sample_number= sc.nextInt();
        odd_number(sample_number);




    }
}
