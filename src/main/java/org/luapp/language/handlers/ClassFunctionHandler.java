package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ClassFunctionHandler extends LuaPPListener {

    public ClassFunctionHandler(){
        this.target = luappParser.RULE_classfunction;
    }

    @Override
    public void onSetManager() {
        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        ParseTree name = enterContext.getChild(1);
        ParseTree body = enterContext.getChild(2);
        this.addToLuaPPResult("function " + this.getLuaPP().currentClass
            + ":" + name.getText() + this.getLuaPP().getRawFromContext((ParserRuleContext)body));
    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
