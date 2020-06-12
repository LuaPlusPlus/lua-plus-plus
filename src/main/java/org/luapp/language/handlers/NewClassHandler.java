package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;
import org.luapp.language.loader.ListenerManager;

public class NewClassHandler extends LuaPPListener {

    public NewClassHandler(){
        this.setTarget(luappParser.RULE_newclass);
        //this.ignoreCheck = true;
    }

    @Override
    public void onSetManager() {
        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        System.out.println(enterContext.getText());
        boolean isLocal = enterContext.getText().startsWith("local");
        System.out.println(isLocal);
        String name = this.getLuaPP().getRawFromContext((ParserRuleContext) enterContext.getChild(isLocal ? 1 : 0));
        ParseTree newClass = enterContext.getChild(isLocal ? 3 : 2);
        ParseTree paramsChild = newClass.getChild(2);

        String params = paramsChild instanceof luappParser.ArgsContext ?
                "" :
                this.getLuaPP().getRawFromContext((ParserRuleContext) paramsChild);

        String className = this.getLuaPP().getRawFromContext((ParserRuleContext) newClass.getChild(1));
        System.out.println( (isLocal ? "local " : "") + name + " = " + className + ".new" + params);
        this.addToLuaPPResult( (isLocal ? "local " : "") + name + " = " + className + ".new" + params);


    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
