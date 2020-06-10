package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
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

    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
