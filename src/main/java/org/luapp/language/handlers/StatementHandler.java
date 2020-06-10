package org.luapp.language.handlers;

import org.antlr.v4.runtime.Parser;
import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.RuleContext;
import org.antlr.v4.runtime.tree.ParseTree;
import org.antlr.v4.runtime.tree.TerminalNodeImpl;
import org.luapp.language.generator.luappParser;
import org.luapp.language.listeners.LuaPPListener;

public class StatementHandler extends LuaPPListener {

    public StatementHandler() {
        this.setTarget(luappParser.RULE_stat);
    }

    public boolean isParentClass(ParserRuleContext context){
        ParseTree parent = context.parent;
        for(int i =0; i < 1000000; i++){ // This is because I KNOW someone's gonna have some weird edge cases.
            ParserRuleContext prc = (ParserRuleContext)parent;
            if(prc == null) return false;
            if(prc.parent == null) return false;
            if(prc.getParent().getRuleIndex() == luappParser.RULE_classbody) {
                return true;
            }
            parent = prc.parent;
        }

        return false;
    }

    public boolean isClassName(ParseTree context){
        return ((ParserRuleContext)context).getRuleIndex() == luappParser.RULE_classname;
    }


    public boolean isChildIgnored(ParserRuleContext context){

        for (ParseTree child : context.children) {
            if(child instanceof TerminalNodeImpl) continue;
            ParserRuleContext childParser = ((ParserRuleContext)child);

            if(childParser.getRuleIndex() == 44){
                System.out.println("This is a FUCKING CLAS?");
            }

            for (int ignoredStatement : this.listenerManager.ignoredStatements) {

                if( childParser.getRuleIndex() == ignoredStatement){
                    System.out.println("Ignored Grammar Rule: " + childParser.getRuleIndex());
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * This will handle all default geneartion.
     * @param enterContext The actual context.
     */
    @Override
    public void onEnterContext(ParserRuleContext enterContext) {

        for (ParseTree child : enterContext.children) {
            if(child instanceof luappParser.ClassbodyContext){
                this.listenerManager.GetInstangeByTarget(luappParser.RULE_classbody).handleEnterContext(enterContext);
                return;
            }

        }

        if(enterContext.parent instanceof luappParser.ClassbodyContext){
            System.out.println("Parent is class ignoring");
            return;
        }

        if(this.isParentClass(enterContext)) {
            System.out.println("Parent is a class!");
            return;
        }

        if(this.isChildIgnored(enterContext)){
            return;
        }

        //System.out.println("NewLine:" + this.getLuaPP().getRawFromContext(enterContext));
        this.addToLuaPPResult(this.getLuaPP().getRawFromContext(enterContext));
    }

    @Override
    public void onExitContext(ParserRuleContext exitContext) {
        //this.addToLuaPPResult(this.getLuaPP().getRawFromContext(exitContext));
    }
}
