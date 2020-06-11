package org.luapp.language.handlers;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.TerminalNodeImpl;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class ClassGetSetHandler extends LuaPPListener {

    public ClassGetSetHandler(){
        this.target = luappParser.RULE_classgetset;
    }

    @Override
    public void onSetManager() {
        this.listenerManager.RegisterIgnoredContext(this.getTarget());
    }

    @Override
    public void onEnterContext(ParserRuleContext enterContext) {
        luappParser.ClassgetsetContext ctx = (luappParser.ClassgetsetContext)enterContext;

        ParseTree name = ctx.getChild(0);
        String nameText = name.getText();

        for (int i=2; i < ctx.getChildCount(); i++) {
            ParseTree getset = ctx.getChild(i);
            if(getset == null){
                return;
            }
            if(getset instanceof TerminalNodeImpl) continue;
            if(((ParserRuleContext)getset).getRuleIndex() == luappParser.RULE_classgetorset){
                String getSet = getset.getText();
                String camelCaseName = nameText.substring(0, 1).toUpperCase() + nameText.substring(1);
                if(getSet.equals("get")){
                    this.addToLuaPPResult("function " + this.getLuaPP().currentClass + ":get" + camelCaseName + "()" +
                            "\n\treturn self." + nameText + "\nend" );
                }else if(getSet.equals("set")){
                    this.addToLuaPPResult("function " + this.getLuaPP().currentClass + ":set" + camelCaseName + "(obj)" +
                            "\n\tself." + nameText +  " = obj\nend" );
                }
            }
        }


    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {

    }
}
