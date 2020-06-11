package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.TerminalNodeImpl;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ClassBodyHandler extends LuaPPListener {

    public ClassBodyHandler() {
        this.setTarget(luappParser.RULE_classbody);
    }

    public boolean isClassFunction(ParseTree context){
        return ((ParserRuleContext)context).getRuleIndex() == luappParser.RULE_classfunction;
    }

    public boolean isClassGetSet(ParseTree context){
        return ((ParserRuleContext)context).getRuleIndex() == luappParser.RULE_classgetset;
    }

    public boolean isClassConstructor(ParseTree context){
        return ((ParserRuleContext)context).getRuleIndex() == luappParser.RULE_constructor;
    }
    public boolean isClassName(ParseTree context){
        return ((ParserRuleContext)context).getRuleIndex() == luappParser.RULE_classname;
    }

    @Override
    public void onSetManager() {
        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        if(this.getLuaPP().currentClass.isEmpty()) {
            System.out.println("No class name, not completing body.");
            return;
        }
        for (ParseTree child : enterContext.children) {
            if(child instanceof TerminalNodeImpl) continue;
            if(isClassFunction(child)){
                this.listenerManager
                        .GetInstangeByTarget(luappParser.RULE_classfunction)
                        .handleEnterContext((ParserRuleContext)child);
            }else if(isClassConstructor(child)){
                System.out.println("Constructor!");
                this.listenerManager
                        .GetInstangeByTarget(luappParser.RULE_constructor)
                        .handleEnterContext((ParserRuleContext)child);
            }else if(isClassGetSet(child)){
                this.listenerManager
                        .GetInstangeByTarget(luappParser.RULE_classfunction)
                        .handleEnterContext((ParserRuleContext)child);
            }else if(isClassName(child)){

            }
        }

    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {
        this.getLuaPP().currentClass = "";
        this.getLuaPP().currentAbstract = "";
    }
}
