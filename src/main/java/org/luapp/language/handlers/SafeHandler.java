package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class SafeHandler extends LuaPPListener {

    public SafeHandler() {
        this.setTarget(luappParser.RULE_safeOperator);
        this.ignoreCheck = true;
    }

    @Override
    public void onSetManager() {
        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }


    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        //luappParser.SafeOperatorContext safeOperatorContext = (luappParser.SafeOperatorContext)enterContext;
        System.out.println("here?");
        StringBuilder stat = new StringBuilder("if ");
        String name = "";
        boolean first = false;

        String[] elems = enterContext.getChild(0).getText().split("\\.");
        for (String elem : elems) {
            if(!first){
                name = elem;

            }else{
                name += "." + elem;
            }

            if(!first){
                first = true;
                stat.append(name);
                break;
            }

            stat.append(" and ").append(name);
        }

    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}