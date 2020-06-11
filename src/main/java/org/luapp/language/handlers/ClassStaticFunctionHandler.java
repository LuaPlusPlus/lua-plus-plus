package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ClassStaticFunctionHandler extends LuaPPListener {
    public ClassStaticFunctionHandler(){
        this.target = luappParser.RULE_classstaticfunction;
    }

    @Override
    public void onSetManager() {
        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        System.out.println("Static?");
        ParseTree name = enterContext.getChild(2);
        ParseTree body = enterContext.getChild(3);
        this.addToLuaPPResult("function " + this.getLuaPP().currentClass
                + "." + name.getText() + this.getLuaPP().getRawFromContext((ParserRuleContext)body));
    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
