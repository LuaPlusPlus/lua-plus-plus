package org.luapp.language;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Main {

    public static Luapp luaPPInstance;

    public static String output = "";

    public static boolean debug = true;

    public static void main(String[] args){
        String path = debug ? System.getProperty("user.dir") + "/src/main/java/org/luapp/language/test.lpp" : args[0];
        Main.luaPPInstance = new Luapp(path);
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
