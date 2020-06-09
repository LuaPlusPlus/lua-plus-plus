package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ConstructorHandler extends LuaPPListener {

    public ConstructorHandler() {
        this.setTarget(luappParser.RULE_constructor);
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        luappParser.ConstructorContext constructorContext = (luappParser.ConstructorContext)enterContext;
        constructorContext.getChild(1);
    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
