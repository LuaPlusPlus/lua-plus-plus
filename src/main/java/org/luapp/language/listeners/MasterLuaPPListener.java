package org.luapp.language.listeners;

import org.antlr.v4.runtime.ParserRuleContext;
import org.antlr.v4.runtime.tree.ErrorNode;
import org.antlr.v4.runtime.tree.TerminalNode;
import org.luapp.language.Luapp;
import org.luapp.language.Main;
import org.luapp.language.generator.luappListener;
import org.luapp.language.generator.luappParser;

public class MasterLuaPPListener implements luappListener {
    public Luapp getLuaPP(){
        return Main.luaPPInstance;
    }

    @Override
    public void enterChunk(luappParser.ChunkContext ctx) {

    }

    @Override
    public void exitChunk(luappParser.ChunkContext ctx) {

    }

    @Override
    public void enterBlock(luappParser.BlockContext ctx) {
    }

    @Override
    public void exitBlock(luappParser.BlockContext ctx) {
    }

    @Override
    public void enterStat(luappParser.StatContext ctx) {
        Main.luaPPInstance.handleEnterContext(ctx);
    }

    @Override
    public void exitStat(luappParser.StatContext ctx) {
        Main.luaPPInstance.handleExitContext(ctx);
    }

    @Override
    public void enterRetstat(luappParser.RetstatContext ctx) {
    }

    @Override
    public void exitRetstat(luappParser.RetstatContext ctx) {

    }

    @Override
    public void enterLabel(luappParser.LabelContext ctx) {

    }

    @Override
    public void exitLabel(luappParser.LabelContext ctx) {

    }

    @Override
    public void enterFuncname(luappParser.FuncnameContext ctx) {

    }

    @Override
    public void exitFuncname(luappParser.FuncnameContext ctx) {

    }

    @Override
    public void enterClassname(luappParser.ClassnameContext ctx) {
        Main.luaPPInstance.handleEnterContext(ctx);
    }

    @Override
    public void exitClassname(luappParser.ClassnameContext ctx) {
        Main.luaPPInstance.handleExitContext(ctx);
    }

    @Override
    public void enterAbstractclassname(luappParser.AbstractclassnameContext ctx) {
        Main.luaPPInstance.handleEnterContext(ctx);
    }

    @Override
    public void exitAbstractclassname(luappParser.AbstractclassnameContext ctx) {
        //Main.luaPPInstance.handleExitContext(ctx);
    }

    @Override
    public void enterVarlist(luappParser.VarlistContext ctx) {

    }

    @Override
    public void exitVarlist(luappParser.VarlistContext ctx) {

    }

    @Override
    public void enterNamelist(luappParser.NamelistContext ctx) {

    }

    @Override
    public void exitNamelist(luappParser.NamelistContext ctx) {

    }

    @Override
    public void enterExplist(luappParser.ExplistContext ctx) {

    }

    @Override
    public void exitExplist(luappParser.ExplistContext ctx) {

    }

    @Override
    public void enterExp(luappParser.ExpContext ctx) {

    }

    @Override
    public void exitExp(luappParser.ExpContext ctx) {

    }

    @Override
    public void enterPrefixexp(luappParser.PrefixexpContext ctx) {

    }

    @Override
    public void exitPrefixexp(luappParser.PrefixexpContext ctx) {

    }

    @Override
    public void enterFunctioncall(luappParser.FunctioncallContext ctx) {

    }

    @Override
    public void exitFunctioncall(luappParser.FunctioncallContext ctx) {

    }

    @Override
    public void enterVarOrExp(luappParser.VarOrExpContext ctx) {

    }

    @Override
    public void exitVarOrExp(luappParser.VarOrExpContext ctx) {

    }

    @Override
    public void enterVar(luappParser.VarContext ctx) {

    }

    @Override
    public void exitVar(luappParser.VarContext ctx) {

    }

    @Override
    public void enterVarSuffix(luappParser.VarSuffixContext ctx) {

    }

    @Override
    public void exitVarSuffix(luappParser.VarSuffixContext ctx) {

    }

    @Override
    public void enterNameAndArgs(luappParser.NameAndArgsContext ctx) {

    }

    @Override
    public void exitNameAndArgs(luappParser.NameAndArgsContext ctx) {

    }

    @Override
    public void enterArgs(luappParser.ArgsContext ctx) {

    }

    @Override
    public void exitArgs(luappParser.ArgsContext ctx) {

    }

    @Override
    public void enterFunctiondef(luappParser.FunctiondefContext ctx) {
        //Main.luaPPInstance.handleEnterContext(ctx);
    }

    @Override
    public void exitFunctiondef(luappParser.FunctiondefContext ctx) {
        //Main.luaPPInstance.handleExitContext(ctx);
    }

    @Override
    public void enterFuncbody(luappParser.FuncbodyContext ctx) {

    }

    @Override
    public void exitFuncbody(luappParser.FuncbodyContext ctx) {

    }

    @Override
    public void enterParlist(luappParser.ParlistContext ctx) {

    }

    @Override
    public void exitParlist(luappParser.ParlistContext ctx) {

    }

    @Override
    public void enterTableconstructor(luappParser.TableconstructorContext ctx) {

    }

    @Override
    public void exitTableconstructor(luappParser.TableconstructorContext ctx) {

    }

    @Override
    public void enterFieldlist(luappParser.FieldlistContext ctx) {

    }

    @Override
    public void exitFieldlist(luappParser.FieldlistContext ctx) {

    }

    @Override
    public void enterField(luappParser.FieldContext ctx) {

    }

    @Override
    public void exitField(luappParser.FieldContext ctx) {

    }

    @Override
    public void enterFieldsep(luappParser.FieldsepContext ctx) {

    }

    @Override
    public void exitFieldsep(luappParser.FieldsepContext ctx) {

    }

    @Override
    public void enterOperatorOr(luappParser.OperatorOrContext ctx) {

    }

    @Override
    public void exitOperatorOr(luappParser.OperatorOrContext ctx) {

    }

    @Override
    public void enterOperatorAnd(luappParser.OperatorAndContext ctx) {

    }

    @Override
    public void exitOperatorAnd(luappParser.OperatorAndContext ctx) {

    }

    @Override
    public void enterOperatorComparison(luappParser.OperatorComparisonContext ctx) {

    }

    @Override
    public void exitOperatorComparison(luappParser.OperatorComparisonContext ctx) {

    }

    @Override
    public void enterOperatorStrcat(luappParser.OperatorStrcatContext ctx) {

    }

    @Override
    public void exitOperatorStrcat(luappParser.OperatorStrcatContext ctx) {

    }

    @Override
    public void enterOperatorAddSub(luappParser.OperatorAddSubContext ctx) {

    }

    @Override
    public void exitOperatorAddSub(luappParser.OperatorAddSubContext ctx) {

    }

    @Override
    public void enterOperatorMulDivMod(luappParser.OperatorMulDivModContext ctx) {

    }

    @Override
    public void exitOperatorMulDivMod(luappParser.OperatorMulDivModContext ctx) {

    }

    @Override
    public void enterOperatorBitwise(luappParser.OperatorBitwiseContext ctx) {

    }

    @Override
    public void exitOperatorBitwise(luappParser.OperatorBitwiseContext ctx) {

    }

    @Override
    public void enterOperatorUnary(luappParser.OperatorUnaryContext ctx) {

    }

    @Override
    public void exitOperatorUnary(luappParser.OperatorUnaryContext ctx) {

    }

    @Override
    public void enterOperatorPower(luappParser.OperatorPowerContext ctx) {

    }

    @Override
    public void exitOperatorPower(luappParser.OperatorPowerContext ctx) {

    }

    @Override
    public void enterNumber(luappParser.NumberContext ctx) {

    }

    @Override
    public void exitNumber(luappParser.NumberContext ctx) {

    }

    @Override
    public void enterString(luappParser.StringContext ctx) {

    }

    @Override
    public void exitString(luappParser.StringContext ctx) {

    }


    @Override
    public void enterClassdef(luappParser.ClassdefContext ctx) {

    }

    @Override
    public void exitClassdef(luappParser.ClassdefContext ctx) {

    }

    @Override
    public void enterClassfunction(luappParser.ClassfunctionContext ctx) {

    }

    @Override
    public void exitClassfunction(luappParser.ClassfunctionContext ctx) {

    }

    @Override
    public void enterClassstaticfunction(luappParser.ClassstaticfunctionContext ctx) {

    }

    @Override
    public void exitClassstaticfunction(luappParser.ClassstaticfunctionContext ctx) {

    }

    @Override
    public void enterClassgetorset(luappParser.ClassgetorsetContext ctx) {

    }

    @Override
    public void exitClassgetorset(luappParser.ClassgetorsetContext ctx) {

    }

    @Override
    public void enterClassgetset(luappParser.ClassgetsetContext ctx) {
        Main.luaPPInstance.handleEnterContext(ctx);
    }

    @Override
    public void exitClassgetset(luappParser.ClassgetsetContext ctx) {
        Main.luaPPInstance.handleExitContext(ctx);
    }

    @Override
    public void enterConstructor(luappParser.ConstructorContext ctx) {
        //Main.luaPPInstance.handleEnterContext(ctx);
    }

    @Override
    public void exitConstructor(luappParser.ConstructorContext ctx) {
        //Main.luaPPInstance.handleExitContext(ctx);
    }

    @Override
    public void enterClassmember(luappParser.ClassmemberContext ctx) {

    }

    @Override
    public void exitClassmember(luappParser.ClassmemberContext ctx) {

    }

    @Override
    public void enterClassbody(luappParser.ClassbodyContext ctx) {
        Main.luaPPInstance.handleEnterContext(ctx);
    }

    @Override
    public void exitClassbody(luappParser.ClassbodyContext ctx) {
//        Main.luaPPInstance.handleEnterContext(ctx);
    }

    @Override
    public void enterAddOne(luappParser.AddOneContext ctx) {

    }

    @Override
    public void exitAddOne(luappParser.AddOneContext ctx) {

    }

    @Override
    public void enterPlusEqual(luappParser.PlusEqualContext ctx) {

    }

    @Override
    public void exitPlusEqual(luappParser.PlusEqualContext ctx) {

    }

    @Override
    public void enterMultiplyEqual(luappParser.MultiplyEqualContext ctx) {

    }

    @Override
    public void exitMultiplyEqual(luappParser.MultiplyEqualContext ctx) {

    }

    @Override
    public void enterDivEqual(luappParser.DivEqualContext ctx) {

    }

    @Override
    public void exitDivEqual(luappParser.DivEqualContext ctx) {

    }

    @Override
    public void enterMinusEqual(luappParser.MinusEqualContext ctx) {

    }

    @Override
    public void exitMinusEqual(luappParser.MinusEqualContext ctx) {

    }

    @Override
    public void enterSafeOperator(luappParser.SafeOperatorContext ctx) {

    }

    @Override
    public void exitSafeOperator(luappParser.SafeOperatorContext ctx) {

    }

    @Override
    public void visitTerminal(TerminalNode terminalNode) {

    }

    @Override
    public void visitErrorNode(ErrorNode errorNode) {

    }

    @Override
    public void enterEveryRule(ParserRuleContext parserRuleContext) {

    }

    @Override
    public void exitEveryRule(ParserRuleContext parserRuleContext) {

    }
}
