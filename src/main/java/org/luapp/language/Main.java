package org.luapp.language;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {

    public static Luapp luaPPInstance;


    public static void main(String[] args){
        String path = System.getProperty("user.dir") + "/src/main/java/org/luapp/language/test.lpp";
        Main.luaPPInstance = new Luapp(readPath(path), path);
        Main.luaPPInstance.load();
    }
    public static String readPath(String path){
        try {
            File myObj = new File(path);
            Scanner myReader = new Scanner(myObj);
            StringBuilder data2 = new StringBuilder();
            while (myReader.hasNextLine()) {
                String data = myReader.nextLine();
                data2.append(data+="\n");
            }
            System.out.println("Converting: \n" + data2.toString());
            myReader.close();
            return data2.toString();

        } catch (FileNotFoundException e) {
            System.out.println("An error occurred.");
            e.printStackTrace();
        }
        return "";
    }
}
