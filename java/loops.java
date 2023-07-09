import java.util.*;
public class loops {
    public static void main(String args[]){
        System.out.println("main");
        for(int i = 0 ; i < 3 ; i++){
            System.out.println("hello" + i);
        }

        int k= 0;
        while(k<3){
            System.out.println("hello");
            k++;
        int j= 0;
        do{
            System.out.println("print" + j);
            j++;
        } while (j <10);
        }
        Scanner sc = new Scanner(System.in);
        int o = sc.nextInt();
        
        int a = 0;
        for(int n=0 ; n<=o ; n++ ){
            a= a +n ;
            

        }
        System.out.println(a);

        int user_input= sc.nextInt();
        int ans= 0;
        for (int u= 1; u <=10 ;u++ ){
            ans= user_input*u;
            System.out.println("ans is "+ ans);
            
        }

        
    }
}