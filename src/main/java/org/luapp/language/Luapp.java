package org.luapp.language;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.ParseTreeListener;
import org.antlr.v4.runtime.tree.ParseTreeWalker;
import org.luapp.language.generator.luappLexer;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;
import org.luapp.language.listeners.MasterLuaPPListener;
import org.luapp.language.loader.ListenerManager;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class Luapp {

    public ListenerManager listenerManager;

    public String currentResult;
    public String raw;

    public String currentClass;
    public String currentAbstract;

    /**
     * @param raw The actual code.
     */
    public Luapp(String raw, String path){
        this.listenerManager = new ListenerManager();
        this.currentResult = "";
        this.raw = raw;
        this.listenerManager.Load();

        try {
            luappLexer lexer = new luappLexer(new ANTLRFileStream(path));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            luappParser parser = new luappParser(tokens);
            ParseTree tree = parser.chunk();
            ParseTreeWalker walker = new ParseTreeWalker();
            walker.walk(new MasterLuaPPListener(), tree);
            String newPath = path.substring(0, path.length()-3) + "lua";
            File newFile = new File(newPath);
            newFile.createNewFile();
            FileWriter writeFile = new FileWriter(newPath);
            writeFile.write(this.currentResult);
        }catch(IOException ex){
            ex.printStackTrace();
        }
    }

    public ListenerManager getListenerManager() {
        return listenerManager;
    }

    public String getCurrentAbstract() {
        return currentAbstract;
    }

    public String getCurrentClass() {
        return currentClass;
    }

    public String getCurrentResult() {
        return currentResult;
    }

    public void handleEnterContext(ParserRuleContext context){
        this.listenerManager.listeners.forEach((LuaPPListener listener)->{
            listener.handleEnterContext(context);
        });
    }

    public void handleExitContext(ParserRuleContext context){
        this.listenerManager.listeners.forEach((LuaPPListener listener)->{
            listener.handleExitContext(context);
        });
    }

    public String getRaw(){
        return this.raw;
    }

    public String getRawFromContext(ParserRuleContext context){
        return this.raw.substring(context.start.getStartIndex(), context.stop.getStopIndex() +1);
    }

    public void appendToResult(String target){
        this.currentResult += "\n" +  target;
    }
}
