package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ConstructorHandler extends LuaPPListener {

    public ConstructorHandler() {
        this.setTarget(luappParser.RULE_constructor);

    }
    @Override
    public void onSetManager() {
        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {

        luappParser.ConstructorContext constructorContext = (luappParser.ConstructorContext)enterContext;
        ParseTree funcParams = constructorContext.getChild(2);
        ParseTree funcBody = constructorContext.getChild(4);
        if(funcBody == null || funcParams == null){
            System.out.println("Function Body or Function Parameters are null");
            return;
        }
        String params = this.getLuaPP().getRawFromContext((ParserRuleContext)funcParams);
        String body = this.getLuaPP().getRawFromContext((ParserRuleContext) funcBody);

        String abstractClass = this.getLuaPP().currentAbstract == null ? "" : this.getLuaPP().currentAbstract;
        String currentClass = this.getLuaPP().currentClass == null ? "" : this.getLuaPP().currentClass;
        this.addToLuaPPResult("function " + currentClass + ":new(" + params + ")\n" +
                "\tlocal self = {}\n" +
                "\tsetmetatable(self, " + currentClass +")" +
                "\n" + (abstractClass.isEmpty() ? "" : ("\n\tfor k,v in pairs(" + abstractClass + ") do \n" +
                "        self[k] = v\n" +
                "    end ")) +
                "\n\t" + body +
                "\n\treturn self\nend");

    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
