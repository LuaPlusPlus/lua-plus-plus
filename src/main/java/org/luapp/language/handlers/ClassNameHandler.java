package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ClassNameHandler extends LuaPPListener {

    public ClassNameHandler() {
        this.setTarget(luappParser.RULE_classname);
    }

    @Override
    public void onSetManager() {
        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
//        StackTraceElement[] cause = Thread.currentThread().getStackTrace();
//        System.out.println(cause[2]);
        System.out.println("");
        this.getLuaPP().currentClass = enterContext.getText();
        String currentClass = enterContext.getText();
        this.addToLuaPPResult(currentClass +  " = {}\n" + currentClass + ".__index = " + currentClass);
    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
