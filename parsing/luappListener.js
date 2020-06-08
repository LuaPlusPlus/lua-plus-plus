// Generated from luapp.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by luappParser.
function luappListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

luappListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
luappListener.prototype.constructor = luappListener;

// Enter a parse tree produced by luappParser#chunk.
luappListener.prototype.enterChunk = function(ctx) {
};

// Exit a parse tree produced by luappParser#chunk.
luappListener.prototype.exitChunk = function(ctx) {
};


// Enter a parse tree produced by luappParser#block.
luappListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by luappParser#block.
luappListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by luappParser#stat.
luappListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by luappParser#stat.
luappListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by luappParser#retstat.
luappListener.prototype.enterRetstat = function(ctx) {
};

// Exit a parse tree produced by luappParser#retstat.
luappListener.prototype.exitRetstat = function(ctx) {
};


// Enter a parse tree produced by luappParser#label.
luappListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by luappParser#label.
luappListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by luappParser#funcname.
luappListener.prototype.enterFuncname = function(ctx) {
};

// Exit a parse tree produced by luappParser#funcname.
luappListener.prototype.exitFuncname = function(ctx) {
};


// Enter a parse tree produced by luappParser#classname.
luappListener.prototype.enterClassname = function(ctx) {
};

// Exit a parse tree produced by luappParser#classname.
luappListener.prototype.exitClassname = function(ctx) {
};


// Enter a parse tree produced by luappParser#abstractclassname.
luappListener.prototype.enterAbstractclassname = function(ctx) {
};

// Exit a parse tree produced by luappParser#abstractclassname.
luappListener.prototype.exitAbstractclassname = function(ctx) {
};


// Enter a parse tree produced by luappParser#varlist.
luappListener.prototype.enterVarlist = function(ctx) {
};

// Exit a parse tree produced by luappParser#varlist.
luappListener.prototype.exitVarlist = function(ctx) {
};


// Enter a parse tree produced by luappParser#namelist.
luappListener.prototype.enterNamelist = function(ctx) {
};

// Exit a parse tree produced by luappParser#namelist.
luappListener.prototype.exitNamelist = function(ctx) {
};


// Enter a parse tree produced by luappParser#explist.
luappListener.prototype.enterExplist = function(ctx) {
};

// Exit a parse tree produced by luappParser#explist.
luappListener.prototype.exitExplist = function(ctx) {
};


// Enter a parse tree produced by luappParser#exp.
luappListener.prototype.enterExp = function(ctx) {
};

// Exit a parse tree produced by luappParser#exp.
luappListener.prototype.exitExp = function(ctx) {
};


// Enter a parse tree produced by luappParser#prefixexp.
luappListener.prototype.enterPrefixexp = function(ctx) {
};

// Exit a parse tree produced by luappParser#prefixexp.
luappListener.prototype.exitPrefixexp = function(ctx) {
};


// Enter a parse tree produced by luappParser#functioncall.
luappListener.prototype.enterFunctioncall = function(ctx) {
};

// Exit a parse tree produced by luappParser#functioncall.
luappListener.prototype.exitFunctioncall = function(ctx) {
};


// Enter a parse tree produced by luappParser#varOrExp.
luappListener.prototype.enterVarOrExp = function(ctx) {
};

// Exit a parse tree produced by luappParser#varOrExp.
luappListener.prototype.exitVarOrExp = function(ctx) {
};


// Enter a parse tree produced by luappParser#var.
luappListener.prototype.enterVar = function(ctx) {
};

// Exit a parse tree produced by luappParser#var.
luappListener.prototype.exitVar = function(ctx) {
};


// Enter a parse tree produced by luappParser#varSuffix.
luappListener.prototype.enterVarSuffix = function(ctx) {
};

// Exit a parse tree produced by luappParser#varSuffix.
luappListener.prototype.exitVarSuffix = function(ctx) {
};


// Enter a parse tree produced by luappParser#nameAndArgs.
luappListener.prototype.enterNameAndArgs = function(ctx) {
};

// Exit a parse tree produced by luappParser#nameAndArgs.
luappListener.prototype.exitNameAndArgs = function(ctx) {
};


// Enter a parse tree produced by luappParser#args.
luappListener.prototype.enterArgs = function(ctx) {
};

// Exit a parse tree produced by luappParser#args.
luappListener.prototype.exitArgs = function(ctx) {
};


// Enter a parse tree produced by luappParser#functiondef.
luappListener.prototype.enterFunctiondef = function(ctx) {
};

// Exit a parse tree produced by luappParser#functiondef.
luappListener.prototype.exitFunctiondef = function(ctx) {
};


// Enter a parse tree produced by luappParser#funcbody.
luappListener.prototype.enterFuncbody = function(ctx) {
};

// Exit a parse tree produced by luappParser#funcbody.
luappListener.prototype.exitFuncbody = function(ctx) {
};


// Enter a parse tree produced by luappParser#parlist.
luappListener.prototype.enterParlist = function(ctx) {
};

// Exit a parse tree produced by luappParser#parlist.
luappListener.prototype.exitParlist = function(ctx) {
};


// Enter a parse tree produced by luappParser#tableconstructor.
luappListener.prototype.enterTableconstructor = function(ctx) {
};

// Exit a parse tree produced by luappParser#tableconstructor.
luappListener.prototype.exitTableconstructor = function(ctx) {
};


// Enter a parse tree produced by luappParser#fieldlist.
luappListener.prototype.enterFieldlist = function(ctx) {
};

// Exit a parse tree produced by luappParser#fieldlist.
luappListener.prototype.exitFieldlist = function(ctx) {
};


// Enter a parse tree produced by luappParser#field.
luappListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by luappParser#field.
luappListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by luappParser#fieldsep.
luappListener.prototype.enterFieldsep = function(ctx) {
};

// Exit a parse tree produced by luappParser#fieldsep.
luappListener.prototype.exitFieldsep = function(ctx) {
};


// Enter a parse tree produced by luappParser#operatorOr.
luappListener.prototype.enterOperatorOr = function(ctx) {
};

// Exit a parse tree produced by luappParser#operatorOr.
luappListener.prototype.exitOperatorOr = function(ctx) {
};


// Enter a parse tree produced by luappParser#operatorAnd.
luappListener.prototype.enterOperatorAnd = function(ctx) {
};

// Exit a parse tree produced by luappParser#operatorAnd.
luappListener.prototype.exitOperatorAnd = function(ctx) {
};


// Enter a parse tree produced by luappParser#operatorComparison.
luappListener.prototype.enterOperatorComparison = function(ctx) {
};

// Exit a parse tree produced by luappParser#operatorComparison.
luappListener.prototype.exitOperatorComparison = function(ctx) {
};


// Enter a parse tree produced by luappParser#operatorStrcat.
luappListener.prototype.enterOperatorStrcat = function(ctx) {
};

// Exit a parse tree produced by luappParser#operatorStrcat.
luappListener.prototype.exitOperatorStrcat = function(ctx) {
};


// Enter a parse tree produced by luappParser#operatorAddSub.
luappListener.prototype.enterOperatorAddSub = function(ctx) {
};

// Exit a parse tree produced by luappParser#operatorAddSub.
luappListener.prototype.exitOperatorAddSub = function(ctx) {
};


// Enter a parse tree produced by luappParser#operatorMulDivMod.
luappListener.prototype.enterOperatorMulDivMod = function(ctx) {
};

// Exit a parse tree produced by luappParser#operatorMulDivMod.
luappListener.prototype.exitOperatorMulDivMod = function(ctx) {
};


// Enter a parse tree produced by luappParser#operatorBitwise.
luappListener.prototype.enterOperatorBitwise = function(ctx) {
};

// Exit a parse tree produced by luappParser#operatorBitwise.
luappListener.prototype.exitOperatorBitwise = function(ctx) {
};


// Enter a parse tree produced by luappParser#operatorUnary.
luappListener.prototype.enterOperatorUnary = function(ctx) {
};

// Exit a parse tree produced by luappParser#operatorUnary.
luappListener.prototype.exitOperatorUnary = function(ctx) {
};


// Enter a parse tree produced by luappParser#operatorPower.
luappListener.prototype.enterOperatorPower = function(ctx) {
};

// Exit a parse tree produced by luappParser#operatorPower.
luappListener.prototype.exitOperatorPower = function(ctx) {
};


// Enter a parse tree produced by luappParser#number.
luappListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by luappParser#number.
luappListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by luappParser#string.
luappListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by luappParser#string.
luappListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by luappParser#newclass.
luappListener.prototype.enterNewclass = function(ctx) {
};

// Exit a parse tree produced by luappParser#newclass.
luappListener.prototype.exitNewclass = function(ctx) {
};


// Enter a parse tree produced by luappParser#classdef.
luappListener.prototype.enterClassdef = function(ctx) {
};

// Exit a parse tree produced by luappParser#classdef.
luappListener.prototype.exitClassdef = function(ctx) {
};


// Enter a parse tree produced by luappParser#classfunction.
luappListener.prototype.enterClassfunction = function(ctx) {
};

// Exit a parse tree produced by luappParser#classfunction.
luappListener.prototype.exitClassfunction = function(ctx) {
};


// Enter a parse tree produced by luappParser#classgetorset.
luappListener.prototype.enterClassgetorset = function(ctx) {
};

// Exit a parse tree produced by luappParser#classgetorset.
luappListener.prototype.exitClassgetorset = function(ctx) {
};


// Enter a parse tree produced by luappParser#classgetset.
luappListener.prototype.enterClassgetset = function(ctx) {
};

// Exit a parse tree produced by luappParser#classgetset.
luappListener.prototype.exitClassgetset = function(ctx) {
};


// Enter a parse tree produced by luappParser#constructor.
luappListener.prototype.enterConstructor = function(ctx) {
};

// Exit a parse tree produced by luappParser#constructor.
luappListener.prototype.exitConstructor = function(ctx) {
};


// Enter a parse tree produced by luappParser#classmember.
luappListener.prototype.enterClassmember = function(ctx) {
};

// Exit a parse tree produced by luappParser#classmember.
luappListener.prototype.exitClassmember = function(ctx) {
};


// Enter a parse tree produced by luappParser#classbody.
luappListener.prototype.enterClassbody = function(ctx) {
};

// Exit a parse tree produced by luappParser#classbody.
luappListener.prototype.exitClassbody = function(ctx) {
};


// Enter a parse tree produced by luappParser#addOne.
luappListener.prototype.enterAddOne = function(ctx) {
};

// Exit a parse tree produced by luappParser#addOne.
luappListener.prototype.exitAddOne = function(ctx) {
};


// Enter a parse tree produced by luappParser#plusEqual.
luappListener.prototype.enterPlusEqual = function(ctx) {
};

// Exit a parse tree produced by luappParser#plusEqual.
luappListener.prototype.exitPlusEqual = function(ctx) {
};


// Enter a parse tree produced by luappParser#multiplyEqual.
luappListener.prototype.enterMultiplyEqual = function(ctx) {
};

// Exit a parse tree produced by luappParser#multiplyEqual.
luappListener.prototype.exitMultiplyEqual = function(ctx) {
};


// Enter a parse tree produced by luappParser#divEqual.
luappListener.prototype.enterDivEqual = function(ctx) {
};

// Exit a parse tree produced by luappParser#divEqual.
luappListener.prototype.exitDivEqual = function(ctx) {
};


// Enter a parse tree produced by luappParser#minusEqual.
luappListener.prototype.enterMinusEqual = function(ctx) {
};

// Exit a parse tree produced by luappParser#minusEqual.
luappListener.prototype.exitMinusEqual = function(ctx) {
};



exports.luappListener = luappListener;