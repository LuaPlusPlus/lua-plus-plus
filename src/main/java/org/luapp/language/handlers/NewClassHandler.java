package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;
import org.luapp.language.loader.ListenerManager;

public class NewClassHandler extends LuaPPListener {
    public NewClassHandler(){
        this.setTarget(luappParser.RULE_newclass);
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
