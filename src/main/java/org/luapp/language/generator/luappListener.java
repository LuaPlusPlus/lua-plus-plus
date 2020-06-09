// Generated from C:/Users/Harry/Desktop/Lua/lpp/src/main/java/org/luapp/language/parser\luapp.g4 by ANTLR 4.8
package org.luapp.language.generator;
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link luappParser}.
 */
public interface luappListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link luappParser#chunk}.
	 * @param ctx the parse tree
	 */
	void enterChunk(luappParser.ChunkContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#chunk}.
	 * @param ctx the parse tree
	 */
	void exitChunk(luappParser.ChunkContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(luappParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(luappParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterStat(luappParser.StatContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitStat(luappParser.StatContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#retstat}.
	 * @param ctx the parse tree
	 */
	void enterRetstat(luappParser.RetstatContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#retstat}.
	 * @param ctx the parse tree
	 */
	void exitRetstat(luappParser.RetstatContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#label}.
	 * @param ctx the parse tree
	 */
	void enterLabel(luappParser.LabelContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#label}.
	 * @param ctx the parse tree
	 */
	void exitLabel(luappParser.LabelContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#funcname}.
	 * @param ctx the parse tree
	 */
	void enterFuncname(luappParser.FuncnameContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#funcname}.
	 * @param ctx the parse tree
	 */
	void exitFuncname(luappParser.FuncnameContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#classname}.
	 * @param ctx the parse tree
	 */
	void enterClassname(luappParser.ClassnameContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#classname}.
	 * @param ctx the parse tree
	 */
	void exitClassname(luappParser.ClassnameContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#abstractclassname}.
	 * @param ctx the parse tree
	 */
	void enterAbstractclassname(luappParser.AbstractclassnameContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#abstractclassname}.
	 * @param ctx the parse tree
	 */
	void exitAbstractclassname(luappParser.AbstractclassnameContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#varlist}.
	 * @param ctx the parse tree
	 */
	void enterVarlist(luappParser.VarlistContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#varlist}.
	 * @param ctx the parse tree
	 */
	void exitVarlist(luappParser.VarlistContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#namelist}.
	 * @param ctx the parse tree
	 */
	void enterNamelist(luappParser.NamelistContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#namelist}.
	 * @param ctx the parse tree
	 */
	void exitNamelist(luappParser.NamelistContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#explist}.
	 * @param ctx the parse tree
	 */
	void enterExplist(luappParser.ExplistContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#explist}.
	 * @param ctx the parse tree
	 */
	void exitExplist(luappParser.ExplistContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#exp}.
	 * @param ctx the parse tree
	 */
	void enterExp(luappParser.ExpContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#exp}.
	 * @param ctx the parse tree
	 */
	void exitExp(luappParser.ExpContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#prefixexp}.
	 * @param ctx the parse tree
	 */
	void enterPrefixexp(luappParser.PrefixexpContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#prefixexp}.
	 * @param ctx the parse tree
	 */
	void exitPrefixexp(luappParser.PrefixexpContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#functioncall}.
	 * @param ctx the parse tree
	 */
	void enterFunctioncall(luappParser.FunctioncallContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#functioncall}.
	 * @param ctx the parse tree
	 */
	void exitFunctioncall(luappParser.FunctioncallContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#varOrExp}.
	 * @param ctx the parse tree
	 */
	void enterVarOrExp(luappParser.VarOrExpContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#varOrExp}.
	 * @param ctx the parse tree
	 */
	void exitVarOrExp(luappParser.VarOrExpContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#var}.
	 * @param ctx the parse tree
	 */
	void enterVar(luappParser.VarContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#var}.
	 * @param ctx the parse tree
	 */
	void exitVar(luappParser.VarContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#varSuffix}.
	 * @param ctx the parse tree
	 */
	void enterVarSuffix(luappParser.VarSuffixContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#varSuffix}.
	 * @param ctx the parse tree
	 */
	void exitVarSuffix(luappParser.VarSuffixContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#nameAndArgs}.
	 * @param ctx the parse tree
	 */
	void enterNameAndArgs(luappParser.NameAndArgsContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#nameAndArgs}.
	 * @param ctx the parse tree
	 */
	void exitNameAndArgs(luappParser.NameAndArgsContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#args}.
	 * @param ctx the parse tree
	 */
	void enterArgs(luappParser.ArgsContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#args}.
	 * @param ctx the parse tree
	 */
	void exitArgs(luappParser.ArgsContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#functiondef}.
	 * @param ctx the parse tree
	 */
	void enterFunctiondef(luappParser.FunctiondefContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#functiondef}.
	 * @param ctx the parse tree
	 */
	void exitFunctiondef(luappParser.FunctiondefContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#funcbody}.
	 * @param ctx the parse tree
	 */
	void enterFuncbody(luappParser.FuncbodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#funcbody}.
	 * @param ctx the parse tree
	 */
	void exitFuncbody(luappParser.FuncbodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#parlist}.
	 * @param ctx the parse tree
	 */
	void enterParlist(luappParser.ParlistContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#parlist}.
	 * @param ctx the parse tree
	 */
	void exitParlist(luappParser.ParlistContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#tableconstructor}.
	 * @param ctx the parse tree
	 */
	void enterTableconstructor(luappParser.TableconstructorContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#tableconstructor}.
	 * @param ctx the parse tree
	 */
	void exitTableconstructor(luappParser.TableconstructorContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#fieldlist}.
	 * @param ctx the parse tree
	 */
	void enterFieldlist(luappParser.FieldlistContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#fieldlist}.
	 * @param ctx the parse tree
	 */
	void exitFieldlist(luappParser.FieldlistContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#field}.
	 * @param ctx the parse tree
	 */
	void enterField(luappParser.FieldContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#field}.
	 * @param ctx the parse tree
	 */
	void exitField(luappParser.FieldContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#fieldsep}.
	 * @param ctx the parse tree
	 */
	void enterFieldsep(luappParser.FieldsepContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#fieldsep}.
	 * @param ctx the parse tree
	 */
	void exitFieldsep(luappParser.FieldsepContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#operatorOr}.
	 * @param ctx the parse tree
	 */
	void enterOperatorOr(luappParser.OperatorOrContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#operatorOr}.
	 * @param ctx the parse tree
	 */
	void exitOperatorOr(luappParser.OperatorOrContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#operatorAnd}.
	 * @param ctx the parse tree
	 */
	void enterOperatorAnd(luappParser.OperatorAndContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#operatorAnd}.
	 * @param ctx the parse tree
	 */
	void exitOperatorAnd(luappParser.OperatorAndContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#operatorComparison}.
	 * @param ctx the parse tree
	 */
	void enterOperatorComparison(luappParser.OperatorComparisonContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#operatorComparison}.
	 * @param ctx the parse tree
	 */
	void exitOperatorComparison(luappParser.OperatorComparisonContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#operatorStrcat}.
	 * @param ctx the parse tree
	 */
	void enterOperatorStrcat(luappParser.OperatorStrcatContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#operatorStrcat}.
	 * @param ctx the parse tree
	 */
	void exitOperatorStrcat(luappParser.OperatorStrcatContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#operatorAddSub}.
	 * @param ctx the parse tree
	 */
	void enterOperatorAddSub(luappParser.OperatorAddSubContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#operatorAddSub}.
	 * @param ctx the parse tree
	 */
	void exitOperatorAddSub(luappParser.OperatorAddSubContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#operatorMulDivMod}.
	 * @param ctx the parse tree
	 */
	void enterOperatorMulDivMod(luappParser.OperatorMulDivModContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#operatorMulDivMod}.
	 * @param ctx the parse tree
	 */
	void exitOperatorMulDivMod(luappParser.OperatorMulDivModContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#operatorBitwise}.
	 * @param ctx the parse tree
	 */
	void enterOperatorBitwise(luappParser.OperatorBitwiseContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#operatorBitwise}.
	 * @param ctx the parse tree
	 */
	void exitOperatorBitwise(luappParser.OperatorBitwiseContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#operatorUnary}.
	 * @param ctx the parse tree
	 */
	void enterOperatorUnary(luappParser.OperatorUnaryContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#operatorUnary}.
	 * @param ctx the parse tree
	 */
	void exitOperatorUnary(luappParser.OperatorUnaryContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#operatorPower}.
	 * @param ctx the parse tree
	 */
	void enterOperatorPower(luappParser.OperatorPowerContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#operatorPower}.
	 * @param ctx the parse tree
	 */
	void exitOperatorPower(luappParser.OperatorPowerContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(luappParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(luappParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#string}.
	 * @param ctx the parse tree
	 */
	void enterString(luappParser.StringContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#string}.
	 * @param ctx the parse tree
	 */
	void exitString(luappParser.StringContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#newclass}.
	 * @param ctx the parse tree
	 */
	void enterNewclass(luappParser.NewclassContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#newclass}.
	 * @param ctx the parse tree
	 */
	void exitNewclass(luappParser.NewclassContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#classdef}.
	 * @param ctx the parse tree
	 */
	void enterClassdef(luappParser.ClassdefContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#classdef}.
	 * @param ctx the parse tree
	 */
	void exitClassdef(luappParser.ClassdefContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#classfunction}.
	 * @param ctx the parse tree
	 */
	void enterClassfunction(luappParser.ClassfunctionContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#classfunction}.
	 * @param ctx the parse tree
	 */
	void exitClassfunction(luappParser.ClassfunctionContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#classgetorset}.
	 * @param ctx the parse tree
	 */
	void enterClassgetorset(luappParser.ClassgetorsetContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#classgetorset}.
	 * @param ctx the parse tree
	 */
	void exitClassgetorset(luappParser.ClassgetorsetContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#classgetset}.
	 * @param ctx the parse tree
	 */
	void enterClassgetset(luappParser.ClassgetsetContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#classgetset}.
	 * @param ctx the parse tree
	 */
	void exitClassgetset(luappParser.ClassgetsetContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#constructor}.
	 * @param ctx the parse tree
	 */
	void enterConstructor(luappParser.ConstructorContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#constructor}.
	 * @param ctx the parse tree
	 */
	void exitConstructor(luappParser.ConstructorContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#classmember}.
	 * @param ctx the parse tree
	 */
	void enterClassmember(luappParser.ClassmemberContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#classmember}.
	 * @param ctx the parse tree
	 */
	void exitClassmember(luappParser.ClassmemberContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#classbody}.
	 * @param ctx the parse tree
	 */
	void enterClassbody(luappParser.ClassbodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#classbody}.
	 * @param ctx the parse tree
	 */
	void exitClassbody(luappParser.ClassbodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#addOne}.
	 * @param ctx the parse tree
	 */
	void enterAddOne(luappParser.AddOneContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#addOne}.
	 * @param ctx the parse tree
	 */
	void exitAddOne(luappParser.AddOneContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#plusEqual}.
	 * @param ctx the parse tree
	 */
	void enterPlusEqual(luappParser.PlusEqualContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#plusEqual}.
	 * @param ctx the parse tree
	 */
	void exitPlusEqual(luappParser.PlusEqualContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#multiplyEqual}.
	 * @param ctx the parse tree
	 */
	void enterMultiplyEqual(luappParser.MultiplyEqualContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#multiplyEqual}.
	 * @param ctx the parse tree
	 */
	void exitMultiplyEqual(luappParser.MultiplyEqualContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#divEqual}.
	 * @param ctx the parse tree
	 */
	void enterDivEqual(luappParser.DivEqualContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#divEqual}.
	 * @param ctx the parse tree
	 */
	void exitDivEqual(luappParser.DivEqualContext ctx);
	/**
	 * Enter a parse tree produced by {@link luappParser#minusEqual}.
	 * @param ctx the parse tree
	 */
	void enterMinusEqual(luappParser.MinusEqualContext ctx);
	/**
	 * Exit a parse tree produced by {@link luappParser#minusEqual}.
	 * @param ctx the parse tree
	 */
	void exitMinusEqual(luappParser.MinusEqualContext ctx);
}