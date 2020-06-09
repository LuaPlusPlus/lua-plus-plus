package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ClassHandler  extends LuaPPListener {

    public ClassHandler() {
        this.setTarget(luappParser.RULE_classname);
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        this.getLuaPP().currentClass = enterContext.getText();
    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {
        this.getLuaPP().currentClass = "";
    }
}
