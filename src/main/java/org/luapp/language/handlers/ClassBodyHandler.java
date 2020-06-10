package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ClassBodyHandler extends LuaPPListener {

    public ClassBodyHandler() {
        this.setTarget(luappParser.RULE_classbody);
    }

    public boolean isClassFunction(ParseTree context){
        return context instanceof luappParser.ClassfunctionContext;
    }

    public boolean isClassGetSet(ParseTree context){
        return context instanceof luappParser.ClassgetsetContext;
    }

    public boolean isClassConstructor(ParseTree context){
        return context instanceof luappParser.ConstructorContext;
    }


    @Override
    public void onSetManager() {
        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        System.out.println("Being called?" + enterContext.getRuleIndex());

        if(this.getLuaPP().currentClass.isEmpty()) {
            System.out.println("No class name, not completing body.");
            return;
        }
        for (ParseTree child : enterContext.children) {
            if(isClassFunction(child)){
                System.out.println("Class function");
            }else if(isClassConstructor(child)){
                System.out.println("Constructor");
            }else if(isClassGetSet(child)){
                System.out.println("Get/Set");
            }
        }

    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
