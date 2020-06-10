package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class AbstractClassNameHandler extends LuaPPListener {

    public AbstractClassNameHandler(){
        this.setTarget(luappParser.RULE_abstractclassname);
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        this.getLuaPP().currentAbstract = enterContext.getText();
    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
