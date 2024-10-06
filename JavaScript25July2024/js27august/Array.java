import java.io.*;
import java.util.Scanner;
public class Array{

    public static void main(String args[]){

        String str = "Anika";
        char ch ;
        String reverse="";
        for(int i = 0; i<str.length(); i++){

            ch = str.charAt(i);

            reverse = ch+reverse;
        }
        System.out.println(reverse);
             
        }
    }
