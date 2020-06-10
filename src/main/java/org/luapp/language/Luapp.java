package org.luapp.language;

import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.Interval;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.ParseTreeListener;
import org.antlr.v4.runtime.tree.ParseTreeWalker;
import org.antlr.v4.runtime.tree.TerminalNode;
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
    public String path;
    public String currentClass;
    public String currentAbstract;

    /**
     *
     * @param path The path to the file.
     */
    public Luapp(String path){

        this.currentResult = "";
        this.path = path;

    }

    public void load(){
        try {
            this.listenerManager = new ListenerManager();
            this.listenerManager.Load();
            luappLexer lexer = new luappLexer(new ANTLRFileStream(this.path));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            luappParser parser = new luappParser(tokens);
            ParseTree tree = parser.chunk();
            ParseTreeWalker walker = new ParseTreeWalker();
            walker.walk(new MasterLuaPPListener(), tree);

            String newPath = this.path.substring(0, this.path.length()-3) + "lua";
            File newFile = new File(newPath);
            newFile.createNewFile();
            FileWriter writeFile = new FileWriter(newPath);
            writeFile.write("--[[\nWritten by nosharp (https://nosharp.cc),\ntom.bat (tomdotbat.dev),\nsammy milton (smilton.dev)\n]]--" + this.currentResult);
            writeFile.close();
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
        Token startToken = context.start;
        Token stopToken = context.stop;
        CharStream cs = context.start.getTokenSource().getInputStream();
        return cs.getText(new Interval(startToken.getStartIndex(), stopToken.getStopIndex()));
    }

    public void appendToResult(String target){
        this.currentResult += "\n" +  target;
    }
}
