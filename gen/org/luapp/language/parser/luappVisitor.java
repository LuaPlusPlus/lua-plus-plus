// Generated from C:/Users/Harry/Desktop/Lua/lua-plus-plus/src/main/java/org/luapp/language/parser\luapp.g4 by ANTLR 4.8
package org.luapp.language.parser;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link luappParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface luappVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link luappParser#chunk}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitChunk(luappParser.ChunkContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#block}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBlock(luappParser.BlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#stat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStat(luappParser.StatContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#retstat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRetstat(luappParser.RetstatContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#label}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLabel(luappParser.LabelContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#funcname}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFuncname(luappParser.FuncnameContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#classname}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassname(luappParser.ClassnameContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#abstractclassname}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAbstractclassname(luappParser.AbstractclassnameContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#varlist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVarlist(luappParser.VarlistContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#namelist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNamelist(luappParser.NamelistContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#explist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExplist(luappParser.ExplistContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#exp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExp(luappParser.ExpContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#prefixexp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrefixexp(luappParser.PrefixexpContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#functioncall}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctioncall(luappParser.FunctioncallContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#varOrExp}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVarOrExp(luappParser.VarOrExpContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#var}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVar(luappParser.VarContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#varSuffix}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVarSuffix(luappParser.VarSuffixContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#nameAndArgs}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNameAndArgs(luappParser.NameAndArgsContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#args}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgs(luappParser.ArgsContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#functiondef}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctiondef(luappParser.FunctiondefContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#funcbody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFuncbody(luappParser.FuncbodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#parlist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParlist(luappParser.ParlistContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#tableconstructor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTableconstructor(luappParser.TableconstructorContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#fieldlist}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFieldlist(luappParser.FieldlistContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#field}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitField(luappParser.FieldContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#fieldsep}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFieldsep(luappParser.FieldsepContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#operatorOr}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorOr(luappParser.OperatorOrContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#operatorAnd}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorAnd(luappParser.OperatorAndContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#operatorComparison}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorComparison(luappParser.OperatorComparisonContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#operatorStrcat}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorStrcat(luappParser.OperatorStrcatContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#operatorAddSub}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorAddSub(luappParser.OperatorAddSubContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#operatorMulDivMod}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorMulDivMod(luappParser.OperatorMulDivModContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#operatorBitwise}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorBitwise(luappParser.OperatorBitwiseContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#operatorUnary}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorUnary(luappParser.OperatorUnaryContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#operatorPower}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorPower(luappParser.OperatorPowerContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#number}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumber(luappParser.NumberContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#string}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitString(luappParser.StringContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#newclass}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNewclass(luappParser.NewclassContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#classdef}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassdef(luappParser.ClassdefContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#classfunction}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassfunction(luappParser.ClassfunctionContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#classgetorset}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassgetorset(luappParser.ClassgetorsetContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#classgetset}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassgetset(luappParser.ClassgetsetContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#constructor}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstructor(luappParser.ConstructorContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#classmember}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassmember(luappParser.ClassmemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#classbody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassbody(luappParser.ClassbodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#addOne}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAddOne(luappParser.AddOneContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#plusEqual}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPlusEqual(luappParser.PlusEqualContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#multiplyEqual}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMultiplyEqual(luappParser.MultiplyEqualContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#divEqual}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDivEqual(luappParser.DivEqualContext ctx);
	/**
	 * Visit a parse tree produced by {@link luappParser#minusEqual}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMinusEqual(luappParser.MinusEqualContext ctx);
}