package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ClassBodyHandler extends LuaPPListener {

    public ClassBodyHandler() {
        this.setTarget(luappParser.RULE_classbody);
    }

    public boolean isClassFunction(ParserRuleContext context){
        return context.getRuleIndex() == luappParser.RULE_classfunction;
    }

    public boolean isClassGetSet(ParserRuleContext context){
        return context.getRuleIndex() == luappParser.RULE_classgetset;
    }

    public boolean isClassConstructor(ParserRuleContext context){
        return context.getRuleIndex() == luappParser.RULE_constructor;
    }


    @Override
    public void onSetManager() {

        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {

    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
