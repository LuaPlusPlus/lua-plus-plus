// test.js
var fs = require("fs");

var antlr4 = require('antlr4');
var LuaPPLexer = require('./parsing/luappLexer').luappLexer;
var LuaPPParser = require('./parsing/luappParser').luappParser;
var LuaPPListener = require('./parsing/luappListener').luappListener;

var input = fs.readFileSync("tests/test.lpp", "utf-8");
console.log(input);
var chars = new antlr4.InputStream(input);
var lexer = new LuaPPLexer(chars);
var tokens = new antlr4.CommonTokenStream(lexer);
var parser = new LuaPPParser(tokens);
parser.buildParseTrees = true;
var tree = parser.stat();