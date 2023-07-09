import java.util.*;

import javax.swing.plaf.synth.SynthSpinnerUI;

public class Pattern{
    public static void main (String args[]){
        int a =4;
        int b =5;

        for (int i =1 ; i <=a ; i++){
            for (int j= 1 ;j<= b; j++){
                System.out.print("*");
            }
            System.out.println ();

        }


        for(int i =1; i <=b ; i++){
            for(int j= 1 ; j<=a ; j++){
                if(i==1 || j ==1|| i ==b||j==a){
                    System.out.print("*");
                }else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }


        int n=5;

        for(int i =1; i<= n ; i++){
            for(int j=1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }


        for (int k=n; k>=1 ; k--){
            for (int p =1; p<=k;p++){
                System.out.print("*");
                System.out.print(p);
            }
            System.out.println(k);
            System.out.println();

        }

        
        int number = 1;

        for (int i=1 ; i<=n; i++){
            for (int j = 1; j<=i ; j++){
                System.out.print(number + " ");
                number++;
              

            }
            System.out.println();

            
        }


        for (int i =1 ; i<=n ; i ++){
            for (int j=1 ; j<=i ; j++){
                int sum = i+j;
                if (sum % 2 ==0 ){
                    System.out.print("1");
                }else{
                    System.out.print("0");
                }

            }
            System.out.println();
        }

       



        for (int i=1 ; i<= n ; i++){
            for (int j =1 ; j<=i ; j++){
                System.out.print("*");
            }

            int u = 4*(n-i);
            for(int k = 1 ; k <=u ; u= u-2){
                System.out.print(" ");
            }
            
            for (int p =1 ; p<=i ; p++){
            System.out.print("*");
            }
            System.out.println();
            
            
            
        }
    }
}
