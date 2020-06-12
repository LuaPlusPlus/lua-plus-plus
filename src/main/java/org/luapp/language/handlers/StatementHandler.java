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
            if(prc.getParent().getRuleIndex() == luappParser.RULE_classbody
                || prc.getParent().getRuleIndex() == luappParser.RULE_block) {
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
        if (context.children == null) return false;

        for (ParseTree child : context.children) {
            if(child instanceof TerminalNodeImpl) continue;
            ParserRuleContext childParser = ((ParserRuleContext)child);

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

        boolean removeSafeIndex = false;


        boolean isNewStatement = false;
        if (enterContext.children != null) {
            for (ParseTree child : enterContext.children) {
                if(child instanceof TerminalNodeImpl) continue;
                if(((ParserRuleContext)child).getRuleIndex() == luappParser.RULE_safeOperator){
                    this.listenerManager
                            .GetInstangeByTarget(luappParser.RULE_safeOperator)
                            .handleEnterContext(enterContext);
                }

                if (child instanceof luappParser.ClassbodyContext) {
                    this.listenerManager
                            .GetInstangeByTarget(luappParser.RULE_classbody)
                            .handleEnterContext(enterContext);
                    return;
                }
                if(((ParserRuleContext) child).getRuleIndex() == luappParser.RULE_newclass){
                    System.out.println("Done?");
                    isNewStatement = true;

                }
            }
        }
        if(isNewStatement){

            this.listenerManager
                    .GetInstangeByTarget(luappParser.RULE_newclass)
                    .handleEnterContext(enterContext);
            return;
        }
        if(this.isParentClass(enterContext)) {
            //System.out.println("Parent is a class!");
            return;
        }

        if(enterContext instanceof luappParser.SafeOperatorContext){
            System.out.println("It's a Safe Op.");
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
