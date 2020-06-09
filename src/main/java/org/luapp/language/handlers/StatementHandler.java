package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class StatementHandler extends LuaPPListener {

    public StatementHandler() {
        super(luappParser.RULE_stat);
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {

//        this.addToLuaPPResult(this.getLuaPP().getRawFromContext(enterContext));
    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {
//        this.addToLuaPPResult(this.getLuaPP().getRawFromContext(exitContext));
    }
}
