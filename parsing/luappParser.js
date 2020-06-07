// Generated from luapp.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var luappListener = require('./luappListener').luappListener;
var grammarFileName = "luapp.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003J\u01ba\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003[\n\u0003\f\u0003",
    "\u000e\u0003^\u000b\u0003\u0003\u0003\u0005\u0003a\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004\u0085\n\u0004\f\u0004",
    "\u000e\u0004\u0088\u000b\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u008c",
    "\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "\u0098\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005",
    "\u0004\u00b6\n\u0004\u0005\u0004\u00b8\n\u0004\u0003\u0005\u0003\u0005",
    "\u0005\u0005\u00bc\n\u0005\u0003\u0005\u0005\u0005\u00bf\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007\u00c8\n\u0007\f\u0007\u000e\u0007\u00cb\u000b\u0007",
    "\u0003\u0007\u0003\u0007\u0005\u0007\u00cf\n\u0007\u0003\b\u0003\b\u0003",
    "\t\u0003\t\u0003\t\u0007\t\u00d6\n\t\f\t\u000e\t\u00d9\u000b\t\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u00de\n\n\f\n\u000e\n\u00e1\u000b\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00e6\n\u000b\f\u000b\u000e",
    "\u000b\u00e9\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00f8",
    "\n\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u011a\n\f",
    "\f\f\u000e\f\u011d\u000b\f\u0003\r\u0003\r\u0007\r\u0121\n\r\f\r\u000e",
    "\r\u0124\u000b\r\u0003\u000e\u0003\u000e\u0006\u000e\u0128\n\u000e\r",
    "\u000e\u000e\u000e\u0129\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0005\u000f\u0131\n\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0139\n\u0010",
    "\u0003\u0010\u0007\u0010\u013c\n\u0010\f\u0010\u000e\u0010\u013f\u000b",
    "\u0010\u0003\u0011\u0007\u0011\u0142\n\u0011\f\u0011\u000e\u0011\u0145",
    "\u000b\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u014d\n\u0011\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u0151\n\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u0157\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0005",
    "\u0013\u015c\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0005\u0015\u0163\n\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0005\u0016\u016c",
    "\n\u0016\u0003\u0016\u0005\u0016\u016f\n\u0016\u0003\u0017\u0003\u0017",
    "\u0005\u0017\u0173\n\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u017b\n\u0018\f\u0018\u000e",
    "\u0018\u017e\u000b\u0018\u0003\u0018\u0005\u0018\u0181\n\u0018\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u018d\n\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f",
    "\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"\u0003#\u0003#\u0003$\u0003",
    "$\u0003%\u0003%\u0003&\u0003&\u0003&\u0003\'\u0007\'\u01ab\n\'\f\'\u000e",
    "\'\u01ae\u000b\'\u0003\'\u0003\'\u0003(\u0003(\u0003)\u0003)\u0003*",
    "\u0003*\u0003+\u0003+\u0003+\u0002\u0003\u0016,\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.",
    "02468:<>@BDFHJLNPRT\u0002\n\u0004\u0002\u0003\u0003\u0011\u0011\u0003",
    "\u0002&+\u0003\u0002-.\u0003\u0002/2\u0003\u000237\u0005\u0002..558",
    "9\u0003\u0002CF\u0003\u0002@B\u0002\u01d0\u0002V\u0003\u0002\u0002\u0002",
    "\u0004\\\u0003\u0002\u0002\u0002\u0006\u00b7\u0003\u0002\u0002\u0002",
    "\b\u00b9\u0003\u0002\u0002\u0002\n\u00c0\u0003\u0002\u0002\u0002\f\u00c4",
    "\u0003\u0002\u0002\u0002\u000e\u00d0\u0003\u0002\u0002\u0002\u0010\u00d2",
    "\u0003\u0002\u0002\u0002\u0012\u00da\u0003\u0002\u0002\u0002\u0014\u00e2",
    "\u0003\u0002\u0002\u0002\u0016\u00f7\u0003\u0002\u0002\u0002\u0018\u011e",
    "\u0003\u0002\u0002\u0002\u001a\u0125\u0003\u0002\u0002\u0002\u001c\u0130",
    "\u0003\u0002\u0002\u0002\u001e\u0138\u0003\u0002\u0002\u0002 \u0143",
    "\u0003\u0002\u0002\u0002\"\u0150\u0003\u0002\u0002\u0002$\u015b\u0003",
    "\u0002\u0002\u0002&\u015d\u0003\u0002\u0002\u0002(\u0160\u0003\u0002",
    "\u0002\u0002*\u016e\u0003\u0002\u0002\u0002,\u0170\u0003\u0002\u0002",
    "\u0002.\u0176\u0003\u0002\u0002\u00020\u018c\u0003\u0002\u0002\u0002",
    "2\u018e\u0003\u0002\u0002\u00024\u0190\u0003\u0002\u0002\u00026\u0192",
    "\u0003\u0002\u0002\u00028\u0194\u0003\u0002\u0002\u0002:\u0196\u0003",
    "\u0002\u0002\u0002<\u0198\u0003\u0002\u0002\u0002>\u019a\u0003\u0002",
    "\u0002\u0002@\u019c\u0003\u0002\u0002\u0002B\u019e\u0003\u0002\u0002",
    "\u0002D\u01a0\u0003\u0002\u0002\u0002F\u01a2\u0003\u0002\u0002\u0002",
    "H\u01a4\u0003\u0002\u0002\u0002J\u01a6\u0003\u0002\u0002\u0002L\u01ac",
    "\u0003\u0002\u0002\u0002N\u01b1\u0003\u0002\u0002\u0002P\u01b3\u0003",
    "\u0002\u0002\u0002R\u01b5\u0003\u0002\u0002\u0002T\u01b7\u0003\u0002",
    "\u0002\u0002VW\u0005\u0004\u0003\u0002WX\u0007\u0002\u0002\u0003X\u0003",
    "\u0003\u0002\u0002\u0002Y[\u0005\u0006\u0004\u0002ZY\u0003\u0002\u0002",
    "\u0002[^\u0003\u0002\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003",
    "\u0002\u0002\u0002]`\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002",
    "_a\u0005\b\u0005\u0002`_\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002a\u0005\u0003\u0002\u0002\u0002b\u00b8\u0007\u0003\u0002\u0002",
    "cd\u0005\u0010\t\u0002de\u0007\u0004\u0002\u0002ef\u0005\u0014\u000b",
    "\u0002f\u00b8\u0003\u0002\u0002\u0002g\u00b8\u0005\u001a\u000e\u0002",
    "h\u00b8\u0005\n\u0006\u0002i\u00b8\u0007\u0005\u0002\u0002jk\u0007\u0006",
    "\u0002\u0002k\u00b8\u0007?\u0002\u0002lm\u0007\u0007\u0002\u0002mn\u0005",
    "\u0004\u0003\u0002no\u0007\b\u0002\u0002o\u00b8\u0003\u0002\u0002\u0002",
    "pq\u0007\t\u0002\u0002qr\u0005\u0016\f\u0002rs\u0007\u0007\u0002\u0002",
    "st\u0005\u0004\u0003\u0002tu\u0007\b\u0002\u0002u\u00b8\u0003\u0002",
    "\u0002\u0002vw\u0007\n\u0002\u0002wx\u0005\u0004\u0003\u0002xy\u0007",
    "\u000b\u0002\u0002yz\u0005\u0016\f\u0002z\u00b8\u0003\u0002\u0002\u0002",
    "{|\u0007\f\u0002\u0002|}\u0005\u0016\f\u0002}~\u0007\r\u0002\u0002~",
    "\u0086\u0005\u0004\u0003\u0002\u007f\u0080\u0007\u000e\u0002\u0002\u0080",
    "\u0081\u0005\u0016\f\u0002\u0081\u0082\u0007\r\u0002\u0002\u0082\u0083",
    "\u0005\u0004\u0003\u0002\u0083\u0085\u0003\u0002\u0002\u0002\u0084\u007f",
    "\u0003\u0002\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084",
    "\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u008b",
    "\u0003\u0002\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0007\u000f\u0002\u0002\u008a\u008c\u0005\u0004\u0003\u0002\u008b\u0089",
    "\u0003\u0002\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0003\u0002\u0002\u0002\u008d\u008e\u0007\b\u0002\u0002\u008e\u00b8",
    "\u0003\u0002\u0002\u0002\u008f\u0090\u0007\u0010\u0002\u0002\u0090\u0091",
    "\u0007?\u0002\u0002\u0091\u0092\u0007\u0004\u0002\u0002\u0092\u0093",
    "\u0005\u0016\f\u0002\u0093\u0094\u0007\u0011\u0002\u0002\u0094\u0097",
    "\u0005\u0016\f\u0002\u0095\u0096\u0007\u0011\u0002\u0002\u0096\u0098",
    "\u0005\u0016\f\u0002\u0097\u0095\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009a",
    "\u0007\u0007\u0002\u0002\u009a\u009b\u0005\u0004\u0003\u0002\u009b\u009c",
    "\u0007\b\u0002\u0002\u009c\u00b8\u0003\u0002\u0002\u0002\u009d\u009e",
    "\u0007\u0010\u0002\u0002\u009e\u009f\u0005\u0012\n\u0002\u009f\u00a0",
    "\u0007\u0012\u0002\u0002\u00a0\u00a1\u0005\u0014\u000b\u0002\u00a1\u00a2",
    "\u0007\u0007\u0002\u0002\u00a2\u00a3\u0005\u0004\u0003\u0002\u00a3\u00a4",
    "\u0007\b\u0002\u0002\u00a4\u00b8\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\u0007\u0013\u0002\u0002\u00a6\u00a7\u0005\f\u0007\u0002\u00a7\u00a8",
    "\u0005(\u0015\u0002\u00a8\u00b8\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\u0007\u0014\u0002\u0002\u00aa\u00ab\u0005\u000e\b\u0002\u00ab\u00ac",
    "\u0005L\'\u0002\u00ac\u00b8\u0003\u0002\u0002\u0002\u00ad\u00ae\u0007",
    "\u0015\u0002\u0002\u00ae\u00af\u0007\u0013\u0002\u0002\u00af\u00b0\u0007",
    "?\u0002\u0002\u00b0\u00b8\u0005(\u0015\u0002\u00b1\u00b2\u0007\u0015",
    "\u0002\u0002\u00b2\u00b5\u0005\u0012\n\u0002\u00b3\u00b4\u0007\u0004",
    "\u0002\u0002\u00b4\u00b6\u0005\u0014\u000b\u0002\u00b5\u00b3\u0003\u0002",
    "\u0002\u0002\u00b5\u00b6\u0003\u0002\u0002\u0002\u00b6\u00b8\u0003\u0002",
    "\u0002\u0002\u00b7b\u0003\u0002\u0002\u0002\u00b7c\u0003\u0002\u0002",
    "\u0002\u00b7g\u0003\u0002\u0002\u0002\u00b7h\u0003\u0002\u0002\u0002",
    "\u00b7i\u0003\u0002\u0002\u0002\u00b7j\u0003\u0002\u0002\u0002\u00b7",
    "l\u0003\u0002\u0002\u0002\u00b7p\u0003\u0002\u0002\u0002\u00b7v\u0003",
    "\u0002\u0002\u0002\u00b7{\u0003\u0002\u0002\u0002\u00b7\u008f\u0003",
    "\u0002\u0002\u0002\u00b7\u009d\u0003\u0002\u0002\u0002\u00b7\u00a5\u0003",
    "\u0002\u0002\u0002\u00b7\u00a9\u0003\u0002\u0002\u0002\u00b7\u00ad\u0003",
    "\u0002\u0002\u0002\u00b7\u00b1\u0003\u0002\u0002\u0002\u00b8\u0007\u0003",
    "\u0002\u0002\u0002\u00b9\u00bb\u0007\u0016\u0002\u0002\u00ba\u00bc\u0005",
    "\u0014\u000b\u0002\u00bb\u00ba\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003",
    "\u0002\u0002\u0002\u00bc\u00be\u0003\u0002\u0002\u0002\u00bd\u00bf\u0007",
    "\u0003\u0002\u0002\u00be\u00bd\u0003\u0002\u0002\u0002\u00be\u00bf\u0003",
    "\u0002\u0002\u0002\u00bf\t\u0003\u0002\u0002\u0002\u00c0\u00c1\u0007",
    "\u0017\u0002\u0002\u00c1\u00c2\u0007?\u0002\u0002\u00c2\u00c3\u0007",
    "\u0017\u0002\u0002\u00c3\u000b\u0003\u0002\u0002\u0002\u00c4\u00c9\u0007",
    "?\u0002\u0002\u00c5\u00c6\u0007\u0018\u0002\u0002\u00c6\u00c8\u0007",
    "?\u0002\u0002\u00c7\u00c5\u0003\u0002\u0002\u0002\u00c8\u00cb\u0003",
    "\u0002\u0002\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003",
    "\u0002\u0002\u0002\u00ca\u00ce\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0007\u0019\u0002\u0002\u00cd\u00cf\u0007",
    "?\u0002\u0002\u00ce\u00cc\u0003\u0002\u0002\u0002\u00ce\u00cf\u0003",
    "\u0002\u0002\u0002\u00cf\r\u0003\u0002\u0002\u0002\u00d0\u00d1\u0007",
    "?\u0002\u0002\u00d1\u000f\u0003\u0002\u0002\u0002\u00d2\u00d7\u0005",
    "\u001e\u0010\u0002\u00d3\u00d4\u0007\u0011\u0002\u0002\u00d4\u00d6\u0005",
    "\u001e\u0010\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6\u00d9\u0003",
    "\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002\u0002\u0002\u00d7\u00d8\u0003",
    "\u0002\u0002\u0002\u00d8\u0011\u0003\u0002\u0002\u0002\u00d9\u00d7\u0003",
    "\u0002\u0002\u0002\u00da\u00df\u0007?\u0002\u0002\u00db\u00dc\u0007",
    "\u0011\u0002\u0002\u00dc\u00de\u0007?\u0002\u0002\u00dd\u00db\u0003",
    "\u0002\u0002\u0002\u00de\u00e1\u0003\u0002\u0002\u0002\u00df\u00dd\u0003",
    "\u0002\u0002\u0002\u00df\u00e0\u0003\u0002\u0002\u0002\u00e0\u0013\u0003",
    "\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e2\u00e7\u0005",
    "\u0016\f\u0002\u00e3\u00e4\u0007\u0011\u0002\u0002\u00e4\u00e6\u0005",
    "\u0016\f\u0002\u00e5\u00e3\u0003\u0002\u0002\u0002\u00e6\u00e9\u0003",
    "\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e7\u00e8\u0003",
    "\u0002\u0002\u0002\u00e8\u0015\u0003\u0002\u0002\u0002\u00e9\u00e7\u0003",
    "\u0002\u0002\u0002\u00ea\u00eb\b\f\u0001\u0002\u00eb\u00f8\u0007\u001a",
    "\u0002\u0002\u00ec\u00f8\u0007\u001b\u0002\u0002\u00ed\u00f8\u0007\u001c",
    "\u0002\u0002\u00ee\u00f8\u0005F$\u0002\u00ef\u00f8\u0005H%\u0002\u00f0",
    "\u00f8\u0007\u001d\u0002\u0002\u00f1\u00f8\u0005&\u0014\u0002\u00f2",
    "\u00f8\u0005\u0018\r\u0002\u00f3\u00f8\u0005,\u0017\u0002\u00f4\u00f5",
    "\u0005B\"\u0002\u00f5\u00f6\u0005\u0016\f\n\u00f6\u00f8\u0003\u0002",
    "\u0002\u0002\u00f7\u00ea\u0003\u0002\u0002\u0002\u00f7\u00ec\u0003\u0002",
    "\u0002\u0002\u00f7\u00ed\u0003\u0002\u0002\u0002\u00f7\u00ee\u0003\u0002",
    "\u0002\u0002\u00f7\u00ef\u0003\u0002\u0002\u0002\u00f7\u00f0\u0003\u0002",
    "\u0002\u0002\u00f7\u00f1\u0003\u0002\u0002\u0002\u00f7\u00f2\u0003\u0002",
    "\u0002\u0002\u00f7\u00f3\u0003\u0002\u0002\u0002\u00f7\u00f4\u0003\u0002",
    "\u0002\u0002\u00f8\u011b\u0003\u0002\u0002\u0002\u00f9\u00fa\f\u000b",
    "\u0002\u0002\u00fa\u00fb\u0005D#\u0002\u00fb\u00fc\u0005\u0016\f\u000b",
    "\u00fc\u011a\u0003\u0002\u0002\u0002\u00fd\u00fe\f\t\u0002\u0002\u00fe",
    "\u00ff\u0005> \u0002\u00ff\u0100\u0005\u0016\f\n\u0100\u011a\u0003\u0002",
    "\u0002\u0002\u0101\u0102\f\b\u0002\u0002\u0102\u0103\u0005<\u001f\u0002",
    "\u0103\u0104\u0005\u0016\f\t\u0104\u011a\u0003\u0002\u0002\u0002\u0105",
    "\u0106\f\u0007\u0002\u0002\u0106\u0107\u0005:\u001e\u0002\u0107\u0108",
    "\u0005\u0016\f\u0007\u0108\u011a\u0003\u0002\u0002\u0002\u0109\u010a",
    "\f\u0006\u0002\u0002\u010a\u010b\u00058\u001d\u0002\u010b\u010c\u0005",
    "\u0016\f\u0007\u010c\u011a\u0003\u0002\u0002\u0002\u010d\u010e\f\u0005",
    "\u0002\u0002\u010e\u010f\u00056\u001c\u0002\u010f\u0110\u0005\u0016",
    "\f\u0006\u0110\u011a\u0003\u0002\u0002\u0002\u0111\u0112\f\u0004\u0002",
    "\u0002\u0112\u0113\u00054\u001b\u0002\u0113\u0114\u0005\u0016\f\u0005",
    "\u0114\u011a\u0003\u0002\u0002\u0002\u0115\u0116\f\u0003\u0002\u0002",
    "\u0116\u0117\u0005@!\u0002\u0117\u0118\u0005\u0016\f\u0004\u0118\u011a",
    "\u0003\u0002\u0002\u0002\u0119\u00f9\u0003\u0002\u0002\u0002\u0119\u00fd",
    "\u0003\u0002\u0002\u0002\u0119\u0101\u0003\u0002\u0002\u0002\u0119\u0105",
    "\u0003\u0002\u0002\u0002\u0119\u0109\u0003\u0002\u0002\u0002\u0119\u010d",
    "\u0003\u0002\u0002\u0002\u0119\u0111\u0003\u0002\u0002\u0002\u0119\u0115",
    "\u0003\u0002\u0002\u0002\u011a\u011d\u0003\u0002\u0002\u0002\u011b\u0119",
    "\u0003\u0002\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011c\u0017",
    "\u0003\u0002\u0002\u0002\u011d\u011b\u0003\u0002\u0002\u0002\u011e\u0122",
    "\u0005\u001c\u000f\u0002\u011f\u0121\u0005\"\u0012\u0002\u0120\u011f",
    "\u0003\u0002\u0002\u0002\u0121\u0124\u0003\u0002\u0002\u0002\u0122\u0120",
    "\u0003\u0002\u0002\u0002\u0122\u0123\u0003\u0002\u0002\u0002\u0123\u0019",
    "\u0003\u0002\u0002\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0125\u0127",
    "\u0005\u001c\u000f\u0002\u0126\u0128\u0005\"\u0012\u0002\u0127\u0126",
    "\u0003\u0002\u0002\u0002\u0128\u0129\u0003\u0002\u0002\u0002\u0129\u0127",
    "\u0003\u0002\u0002\u0002\u0129\u012a\u0003\u0002\u0002\u0002\u012a\u001b",
    "\u0003\u0002\u0002\u0002\u012b\u0131\u0005\u001e\u0010\u0002\u012c\u012d",
    "\u0007\u001e\u0002\u0002\u012d\u012e\u0005\u0016\f\u0002\u012e\u012f",
    "\u0007\u001f\u0002\u0002\u012f\u0131\u0003\u0002\u0002\u0002\u0130\u012b",
    "\u0003\u0002\u0002\u0002\u0130\u012c\u0003\u0002\u0002\u0002\u0131\u001d",
    "\u0003\u0002\u0002\u0002\u0132\u0139\u0007?\u0002\u0002\u0133\u0134",
    "\u0007\u001e\u0002\u0002\u0134\u0135\u0005\u0016\f\u0002\u0135\u0136",
    "\u0007\u001f\u0002\u0002\u0136\u0137\u0005 \u0011\u0002\u0137\u0139",
    "\u0003\u0002\u0002\u0002\u0138\u0132\u0003\u0002\u0002\u0002\u0138\u0133",
    "\u0003\u0002\u0002\u0002\u0139\u013d\u0003\u0002\u0002\u0002\u013a\u013c",
    "\u0005 \u0011\u0002\u013b\u013a\u0003\u0002\u0002\u0002\u013c\u013f",
    "\u0003\u0002\u0002\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013d\u013e",
    "\u0003\u0002\u0002\u0002\u013e\u001f\u0003\u0002\u0002\u0002\u013f\u013d",
    "\u0003\u0002\u0002\u0002\u0140\u0142\u0005\"\u0012\u0002\u0141\u0140",
    "\u0003\u0002\u0002\u0002\u0142\u0145\u0003\u0002\u0002\u0002\u0143\u0141",
    "\u0003\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002\u0002\u0144\u014c",
    "\u0003\u0002\u0002\u0002\u0145\u0143\u0003\u0002\u0002\u0002\u0146\u0147",
    "\u0007 \u0002\u0002\u0147\u0148\u0005\u0016\f\u0002\u0148\u0149\u0007",
    "!\u0002\u0002\u0149\u014d\u0003\u0002\u0002\u0002\u014a\u014b\u0007",
    "\u0018\u0002\u0002\u014b\u014d\u0007?\u0002\u0002\u014c\u0146\u0003",
    "\u0002\u0002\u0002\u014c\u014a\u0003\u0002\u0002\u0002\u014d!\u0003",
    "\u0002\u0002\u0002\u014e\u014f\u0007\u0019\u0002\u0002\u014f\u0151\u0007",
    "?\u0002\u0002\u0150\u014e\u0003\u0002\u0002\u0002\u0150\u0151\u0003",
    "\u0002\u0002\u0002\u0151\u0152\u0003\u0002\u0002\u0002\u0152\u0153\u0005",
    "$\u0013\u0002\u0153#\u0003\u0002\u0002\u0002\u0154\u0156\u0007\u001e",
    "\u0002\u0002\u0155\u0157\u0005\u0014\u000b\u0002\u0156\u0155\u0003\u0002",
    "\u0002\u0002\u0156\u0157\u0003\u0002\u0002\u0002\u0157\u0158\u0003\u0002",
    "\u0002\u0002\u0158\u015c\u0007\u001f\u0002\u0002\u0159\u015c\u0005,",
    "\u0017\u0002\u015a\u015c\u0005H%\u0002\u015b\u0154\u0003\u0002\u0002",
    "\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015b\u015a\u0003\u0002\u0002",
    "\u0002\u015c%\u0003\u0002\u0002\u0002\u015d\u015e\u0007\u0013\u0002",
    "\u0002\u015e\u015f\u0005(\u0015\u0002\u015f\'\u0003\u0002\u0002\u0002",
    "\u0160\u0162\u0007\u001e\u0002\u0002\u0161\u0163\u0005*\u0016\u0002",
    "\u0162\u0161\u0003\u0002\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002",
    "\u0163\u0164\u0003\u0002\u0002\u0002\u0164\u0165\u0007\u001f\u0002\u0002",
    "\u0165\u0166\u0005\u0004\u0003\u0002\u0166\u0167\u0007\b\u0002\u0002",
    "\u0167)\u0003\u0002\u0002\u0002\u0168\u016b\u0005\u0012\n\u0002\u0169",
    "\u016a\u0007\u0011\u0002\u0002\u016a\u016c\u0007\u001d\u0002\u0002\u016b",
    "\u0169\u0003\u0002\u0002\u0002\u016b\u016c\u0003\u0002\u0002\u0002\u016c",
    "\u016f\u0003\u0002\u0002\u0002\u016d\u016f\u0007\u001d\u0002\u0002\u016e",
    "\u0168\u0003\u0002\u0002\u0002\u016e\u016d\u0003\u0002\u0002\u0002\u016f",
    "+\u0003\u0002\u0002\u0002\u0170\u0172\u0007\"\u0002\u0002\u0171\u0173",
    "\u0005.\u0018\u0002\u0172\u0171\u0003\u0002\u0002\u0002\u0172\u0173",
    "\u0003\u0002\u0002\u0002\u0173\u0174\u0003\u0002\u0002\u0002\u0174\u0175",
    "\u0007#\u0002\u0002\u0175-\u0003\u0002\u0002\u0002\u0176\u017c\u0005",
    "0\u0019\u0002\u0177\u0178\u00052\u001a\u0002\u0178\u0179\u00050\u0019",
    "\u0002\u0179\u017b\u0003\u0002\u0002\u0002\u017a\u0177\u0003\u0002\u0002",
    "\u0002\u017b\u017e\u0003\u0002\u0002\u0002\u017c\u017a\u0003\u0002\u0002",
    "\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u0180\u0003\u0002\u0002",
    "\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017f\u0181\u00052\u001a",
    "\u0002\u0180\u017f\u0003\u0002\u0002\u0002\u0180\u0181\u0003\u0002\u0002",
    "\u0002\u0181/\u0003\u0002\u0002\u0002\u0182\u0183\u0007 \u0002\u0002",
    "\u0183\u0184\u0005\u0016\f\u0002\u0184\u0185\u0007!\u0002\u0002\u0185",
    "\u0186\u0007\u0004\u0002\u0002\u0186\u0187\u0005\u0016\f\u0002\u0187",
    "\u018d\u0003\u0002\u0002\u0002\u0188\u0189\u0007?\u0002\u0002\u0189",
    "\u018a\u0007\u0004\u0002\u0002\u018a\u018d\u0005\u0016\f\u0002\u018b",
    "\u018d\u0005\u0016\f\u0002\u018c\u0182\u0003\u0002\u0002\u0002\u018c",
    "\u0188\u0003\u0002\u0002\u0002\u018c\u018b\u0003\u0002\u0002\u0002\u018d",
    "1\u0003\u0002\u0002\u0002\u018e\u018f\t\u0002\u0002\u0002\u018f3\u0003",
    "\u0002\u0002\u0002\u0190\u0191\u0007$\u0002\u0002\u01915\u0003\u0002",
    "\u0002\u0002\u0192\u0193\u0007%\u0002\u0002\u01937\u0003\u0002\u0002",
    "\u0002\u0194\u0195\t\u0003\u0002\u0002\u01959\u0003\u0002\u0002\u0002",
    "\u0196\u0197\u0007,\u0002\u0002\u0197;\u0003\u0002\u0002\u0002\u0198",
    "\u0199\t\u0004\u0002\u0002\u0199=\u0003\u0002\u0002\u0002\u019a\u019b",
    "\t\u0005\u0002\u0002\u019b?\u0003\u0002\u0002\u0002\u019c\u019d\t\u0006",
    "\u0002\u0002\u019dA\u0003\u0002\u0002\u0002\u019e\u019f\t\u0007\u0002",
    "\u0002\u019fC\u0003\u0002\u0002\u0002\u01a0\u01a1\u0007:\u0002\u0002",
    "\u01a1E\u0003\u0002\u0002\u0002\u01a2\u01a3\t\b\u0002\u0002\u01a3G\u0003",
    "\u0002\u0002\u0002\u01a4\u01a5\t\t\u0002\u0002\u01a5I\u0003\u0002\u0002",
    "\u0002\u01a6\u01a7\u0007\u0014\u0002\u0002\u01a7\u01a8\u0005L\'\u0002",
    "\u01a8K\u0003\u0002\u0002\u0002\u01a9\u01ab\u0005&\u0014\u0002\u01aa",
    "\u01a9\u0003\u0002\u0002\u0002\u01ab\u01ae\u0003\u0002\u0002\u0002\u01ac",
    "\u01aa\u0003\u0002\u0002\u0002\u01ac\u01ad\u0003\u0002\u0002\u0002\u01ad",
    "\u01af\u0003\u0002\u0002\u0002\u01ae\u01ac\u0003\u0002\u0002\u0002\u01af",
    "\u01b0\u0007\b\u0002\u0002\u01b0M\u0003\u0002\u0002\u0002\u01b1\u01b2",
    "\u0007;\u0002\u0002\u01b2O\u0003\u0002\u0002\u0002\u01b3\u01b4\u0007",
    "<\u0002\u0002\u01b4Q\u0003\u0002\u0002\u0002\u01b5\u01b6\u0007=\u0002",
    "\u0002\u01b6S\u0003\u0002\u0002\u0002\u01b7\u01b8\u0007>\u0002\u0002",
    "\u01b8U\u0003\u0002\u0002\u0002%\\`\u0086\u008b\u0097\u00b5\u00b7\u00bb",
    "\u00be\u00c9\u00ce\u00d7\u00df\u00e7\u00f7\u0119\u011b\u0122\u0129\u0130",
    "\u0138\u013d\u0143\u014c\u0150\u0156\u015b\u0162\u016b\u016e\u0172\u017c",
    "\u0180\u018c\u01ac"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'='", "'break'", "'goto'", "'do'", "'end'", 
                     "'while'", "'repeat'", "'until'", "'if'", "'then'", 
                     "'elseif'", "'else'", "'for'", "','", "'in'", "'function'", 
                     "'class'", "'local'", "'return'", "'::'", "'.'", "':'", 
                     "'nil'", "'false'", "'true'", "'...'", "'('", "')'", 
                     "'['", "']'", "'{'", "'}'", "'or'", "'and'", "'<'", 
                     "'>'", "'<='", "'>='", "'~='", "'=='", "'..'", "'+'", 
                     "'-'", "'*'", "'/'", "'%'", "'//'", "'&'", "'|'", "'~'", 
                     "'<<'", "'>>'", "'not'", "'#'", "'^'", "'++'", "'+='", 
                     "'*='", "'/='" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, "NAME", 
                      "NORMALSTRING", "CHARSTRING", "LONGSTRING", "INT", 
                      "HEX", "FLOAT", "HEX_FLOAT", "COMMENT", "LINE_COMMENT", 
                      "WS", "SHEBANG" ];

var ruleNames =  [ "chunk", "block", "stat", "retstat", "label", "funcname", 
                   "classname", "varlist", "namelist", "explist", "exp", 
                   "prefixexp", "functioncall", "varOrExp", "var", "varSuffix", 
                   "nameAndArgs", "args", "functiondef", "funcbody", "parlist", 
                   "tableconstructor", "fieldlist", "field", "fieldsep", 
                   "operatorOr", "operatorAnd", "operatorComparison", "operatorStrcat", 
                   "operatorAddSub", "operatorMulDivMod", "operatorBitwise", 
                   "operatorUnary", "operatorPower", "number", "string", 
                   "classdef", "classbody", "addOne", "plusEqual", "multiplyEqual", 
                   "divEqual" ];

function luappParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

luappParser.prototype = Object.create(antlr4.Parser.prototype);
luappParser.prototype.constructor = luappParser;

Object.defineProperty(luappParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

luappParser.EOF = antlr4.Token.EOF;
luappParser.T__0 = 1;
luappParser.T__1 = 2;
luappParser.T__2 = 3;
luappParser.T__3 = 4;
luappParser.T__4 = 5;
luappParser.T__5 = 6;
luappParser.T__6 = 7;
luappParser.T__7 = 8;
luappParser.T__8 = 9;
luappParser.T__9 = 10;
luappParser.T__10 = 11;
luappParser.T__11 = 12;
luappParser.T__12 = 13;
luappParser.T__13 = 14;
luappParser.T__14 = 15;
luappParser.T__15 = 16;
luappParser.T__16 = 17;
luappParser.T__17 = 18;
luappParser.T__18 = 19;
luappParser.T__19 = 20;
luappParser.T__20 = 21;
luappParser.T__21 = 22;
luappParser.T__22 = 23;
luappParser.T__23 = 24;
luappParser.T__24 = 25;
luappParser.T__25 = 26;
luappParser.T__26 = 27;
luappParser.T__27 = 28;
luappParser.T__28 = 29;
luappParser.T__29 = 30;
luappParser.T__30 = 31;
luappParser.T__31 = 32;
luappParser.T__32 = 33;
luappParser.T__33 = 34;
luappParser.T__34 = 35;
luappParser.T__35 = 36;
luappParser.T__36 = 37;
luappParser.T__37 = 38;
luappParser.T__38 = 39;
luappParser.T__39 = 40;
luappParser.T__40 = 41;
luappParser.T__41 = 42;
luappParser.T__42 = 43;
luappParser.T__43 = 44;
luappParser.T__44 = 45;
luappParser.T__45 = 46;
luappParser.T__46 = 47;
luappParser.T__47 = 48;
luappParser.T__48 = 49;
luappParser.T__49 = 50;
luappParser.T__50 = 51;
luappParser.T__51 = 52;
luappParser.T__52 = 53;
luappParser.T__53 = 54;
luappParser.T__54 = 55;
luappParser.T__55 = 56;
luappParser.T__56 = 57;
luappParser.T__57 = 58;
luappParser.T__58 = 59;
luappParser.T__59 = 60;
luappParser.NAME = 61;
luappParser.NORMALSTRING = 62;
luappParser.CHARSTRING = 63;
luappParser.LONGSTRING = 64;
luappParser.INT = 65;
luappParser.HEX = 66;
luappParser.FLOAT = 67;
luappParser.HEX_FLOAT = 68;
luappParser.COMMENT = 69;
luappParser.LINE_COMMENT = 70;
luappParser.WS = 71;
luappParser.SHEBANG = 72;

luappParser.RULE_chunk = 0;
luappParser.RULE_block = 1;
luappParser.RULE_stat = 2;
luappParser.RULE_retstat = 3;
luappParser.RULE_label = 4;
luappParser.RULE_funcname = 5;
luappParser.RULE_classname = 6;
luappParser.RULE_varlist = 7;
luappParser.RULE_namelist = 8;
luappParser.RULE_explist = 9;
luappParser.RULE_exp = 10;
luappParser.RULE_prefixexp = 11;
luappParser.RULE_functioncall = 12;
luappParser.RULE_varOrExp = 13;
luappParser.RULE_var = 14;
luappParser.RULE_varSuffix = 15;
luappParser.RULE_nameAndArgs = 16;
luappParser.RULE_args = 17;
luappParser.RULE_functiondef = 18;
luappParser.RULE_funcbody = 19;
luappParser.RULE_parlist = 20;
luappParser.RULE_tableconstructor = 21;
luappParser.RULE_fieldlist = 22;
luappParser.RULE_field = 23;
luappParser.RULE_fieldsep = 24;
luappParser.RULE_operatorOr = 25;
luappParser.RULE_operatorAnd = 26;
luappParser.RULE_operatorComparison = 27;
luappParser.RULE_operatorStrcat = 28;
luappParser.RULE_operatorAddSub = 29;
luappParser.RULE_operatorMulDivMod = 30;
luappParser.RULE_operatorBitwise = 31;
luappParser.RULE_operatorUnary = 32;
luappParser.RULE_operatorPower = 33;
luappParser.RULE_number = 34;
luappParser.RULE_string = 35;
luappParser.RULE_classdef = 36;
luappParser.RULE_classbody = 37;
luappParser.RULE_addOne = 38;
luappParser.RULE_plusEqual = 39;
luappParser.RULE_multiplyEqual = 40;
luappParser.RULE_divEqual = 41;


function ChunkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_chunk;
    return this;
}

ChunkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChunkContext.prototype.constructor = ChunkContext;

ChunkContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ChunkContext.prototype.EOF = function() {
    return this.getToken(luappParser.EOF, 0);
};

ChunkContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterChunk(this);
	}
};

ChunkContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitChunk(this);
	}
};




luappParser.ChunkContext = ChunkContext;

luappParser.prototype.chunk = function() {

    var localctx = new ChunkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, luappParser.RULE_chunk);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this.block();
        this.state = 85;
        this.match(luappParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.retstat = function() {
    return this.getTypedRuleContext(RetstatContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitBlock(this);
	}
};




luappParser.BlockContext = BlockContext;

luappParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, luappParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << luappParser.T__0) | (1 << luappParser.T__2) | (1 << luappParser.T__3) | (1 << luappParser.T__4) | (1 << luappParser.T__6) | (1 << luappParser.T__7) | (1 << luappParser.T__9) | (1 << luappParser.T__13) | (1 << luappParser.T__16) | (1 << luappParser.T__17) | (1 << luappParser.T__18) | (1 << luappParser.T__20) | (1 << luappParser.T__27))) !== 0) || _la===luappParser.NAME) {
            this.state = 87;
            this.stat();
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 94;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===luappParser.T__19) {
            this.state = 93;
            this.retstat();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.varlist = function() {
    return this.getTypedRuleContext(VarlistContext,0);
};

StatContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

StatContext.prototype.functioncall = function() {
    return this.getTypedRuleContext(FunctioncallContext,0);
};

StatContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

StatContext.prototype.NAME = function() {
    return this.getToken(luappParser.NAME, 0);
};

StatContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

StatContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

StatContext.prototype.namelist = function() {
    return this.getTypedRuleContext(NamelistContext,0);
};

StatContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
};

StatContext.prototype.funcbody = function() {
    return this.getTypedRuleContext(FuncbodyContext,0);
};

StatContext.prototype.classname = function() {
    return this.getTypedRuleContext(ClassnameContext,0);
};

StatContext.prototype.classbody = function() {
    return this.getTypedRuleContext(ClassbodyContext,0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitStat(this);
	}
};




luappParser.StatContext = StatContext;

luappParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, luappParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 181;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 96;
            this.match(luappParser.T__0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 97;
            this.varlist();
            this.state = 98;
            this.match(luappParser.T__1);
            this.state = 99;
            this.explist();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 101;
            this.functioncall();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 102;
            this.label();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 103;
            this.match(luappParser.T__2);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 104;
            this.match(luappParser.T__3);
            this.state = 105;
            this.match(luappParser.NAME);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 106;
            this.match(luappParser.T__4);
            this.state = 107;
            this.block();
            this.state = 108;
            this.match(luappParser.T__5);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 110;
            this.match(luappParser.T__6);
            this.state = 111;
            this.exp(0);
            this.state = 112;
            this.match(luappParser.T__4);
            this.state = 113;
            this.block();
            this.state = 114;
            this.match(luappParser.T__5);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 116;
            this.match(luappParser.T__7);
            this.state = 117;
            this.block();
            this.state = 118;
            this.match(luappParser.T__8);
            this.state = 119;
            this.exp(0);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 121;
            this.match(luappParser.T__9);
            this.state = 122;
            this.exp(0);
            this.state = 123;
            this.match(luappParser.T__10);
            this.state = 124;
            this.block();
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===luappParser.T__11) {
                this.state = 125;
                this.match(luappParser.T__11);
                this.state = 126;
                this.exp(0);
                this.state = 127;
                this.match(luappParser.T__10);
                this.state = 128;
                this.block();
                this.state = 134;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 137;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===luappParser.T__12) {
                this.state = 135;
                this.match(luappParser.T__12);
                this.state = 136;
                this.block();
            }

            this.state = 139;
            this.match(luappParser.T__5);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 141;
            this.match(luappParser.T__13);
            this.state = 142;
            this.match(luappParser.NAME);
            this.state = 143;
            this.match(luappParser.T__1);
            this.state = 144;
            this.exp(0);
            this.state = 145;
            this.match(luappParser.T__14);
            this.state = 146;
            this.exp(0);
            this.state = 149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===luappParser.T__14) {
                this.state = 147;
                this.match(luappParser.T__14);
                this.state = 148;
                this.exp(0);
            }

            this.state = 151;
            this.match(luappParser.T__4);
            this.state = 152;
            this.block();
            this.state = 153;
            this.match(luappParser.T__5);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 155;
            this.match(luappParser.T__13);
            this.state = 156;
            this.namelist();
            this.state = 157;
            this.match(luappParser.T__15);
            this.state = 158;
            this.explist();
            this.state = 159;
            this.match(luappParser.T__4);
            this.state = 160;
            this.block();
            this.state = 161;
            this.match(luappParser.T__5);
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 163;
            this.match(luappParser.T__16);
            this.state = 164;
            this.funcname();
            this.state = 165;
            this.funcbody();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 167;
            this.match(luappParser.T__17);
            this.state = 168;
            this.classname();
            this.state = 169;
            this.classbody();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 171;
            this.match(luappParser.T__18);
            this.state = 172;
            this.match(luappParser.T__16);
            this.state = 173;
            this.match(luappParser.NAME);
            this.state = 174;
            this.funcbody();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 175;
            this.match(luappParser.T__18);
            this.state = 176;
            this.namelist();
            this.state = 179;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===luappParser.T__1) {
                this.state = 177;
                this.match(luappParser.T__1);
                this.state = 178;
                this.explist();
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RetstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_retstat;
    return this;
}

RetstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetstatContext.prototype.constructor = RetstatContext;

RetstatContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

RetstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterRetstat(this);
	}
};

RetstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitRetstat(this);
	}
};




luappParser.RetstatContext = RetstatContext;

luappParser.prototype.retstat = function() {

    var localctx = new RetstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, luappParser.RULE_retstat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(luappParser.T__19);
        this.state = 185;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (luappParser.T__16 - 17)) | (1 << (luappParser.T__23 - 17)) | (1 << (luappParser.T__24 - 17)) | (1 << (luappParser.T__25 - 17)) | (1 << (luappParser.T__26 - 17)) | (1 << (luappParser.T__27 - 17)) | (1 << (luappParser.T__31 - 17)) | (1 << (luappParser.T__43 - 17)))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (luappParser.T__50 - 51)) | (1 << (luappParser.T__53 - 51)) | (1 << (luappParser.T__54 - 51)) | (1 << (luappParser.NAME - 51)) | (1 << (luappParser.NORMALSTRING - 51)) | (1 << (luappParser.CHARSTRING - 51)) | (1 << (luappParser.LONGSTRING - 51)) | (1 << (luappParser.INT - 51)) | (1 << (luappParser.HEX - 51)) | (1 << (luappParser.FLOAT - 51)) | (1 << (luappParser.HEX_FLOAT - 51)))) !== 0)) {
            this.state = 184;
            this.explist();
        }

        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===luappParser.T__0) {
            this.state = 187;
            this.match(luappParser.T__0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.NAME = function() {
    return this.getToken(luappParser.NAME, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitLabel(this);
	}
};




luappParser.LabelContext = LabelContext;

luappParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, luappParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        this.match(luappParser.T__20);
        this.state = 191;
        this.match(luappParser.NAME);
        this.state = 192;
        this.match(luappParser.T__20);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_funcname;
    return this;
}

FuncnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncnameContext.prototype.constructor = FuncnameContext;

FuncnameContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(luappParser.NAME);
    } else {
        return this.getToken(luappParser.NAME, i);
    }
};


FuncnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterFuncname(this);
	}
};

FuncnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitFuncname(this);
	}
};




luappParser.FuncnameContext = FuncnameContext;

luappParser.prototype.funcname = function() {

    var localctx = new FuncnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, luappParser.RULE_funcname);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(luappParser.NAME);
        this.state = 199;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===luappParser.T__21) {
            this.state = 195;
            this.match(luappParser.T__21);
            this.state = 196;
            this.match(luappParser.NAME);
            this.state = 201;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 204;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===luappParser.T__22) {
            this.state = 202;
            this.match(luappParser.T__22);
            this.state = 203;
            this.match(luappParser.NAME);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClassnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_classname;
    return this;
}

ClassnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassnameContext.prototype.constructor = ClassnameContext;

ClassnameContext.prototype.NAME = function() {
    return this.getToken(luappParser.NAME, 0);
};

ClassnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterClassname(this);
	}
};

ClassnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitClassname(this);
	}
};




luappParser.ClassnameContext = ClassnameContext;

luappParser.prototype.classname = function() {

    var localctx = new ClassnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, luappParser.RULE_classname);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.match(luappParser.NAME);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_varlist;
    return this;
}

VarlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarlistContext.prototype.constructor = VarlistContext;

VarlistContext.prototype.var = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarContext);
    } else {
        return this.getTypedRuleContext(VarContext,i);
    }
};

VarlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterVarlist(this);
	}
};

VarlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitVarlist(this);
	}
};




luappParser.VarlistContext = VarlistContext;

luappParser.prototype.varlist = function() {

    var localctx = new VarlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, luappParser.RULE_varlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.var();
        this.state = 213;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===luappParser.T__14) {
            this.state = 209;
            this.match(luappParser.T__14);
            this.state = 210;
            this.var();
            this.state = 215;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NamelistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_namelist;
    return this;
}

NamelistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamelistContext.prototype.constructor = NamelistContext;

NamelistContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(luappParser.NAME);
    } else {
        return this.getToken(luappParser.NAME, i);
    }
};


NamelistContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterNamelist(this);
	}
};

NamelistContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitNamelist(this);
	}
};




luappParser.NamelistContext = NamelistContext;

luappParser.prototype.namelist = function() {

    var localctx = new NamelistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, luappParser.RULE_namelist);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this.match(luappParser.NAME);
        this.state = 221;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 217;
                this.match(luappParser.T__14);
                this.state = 218;
                this.match(luappParser.NAME); 
            }
            this.state = 223;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExplistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_explist;
    return this;
}

ExplistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExplistContext.prototype.constructor = ExplistContext;

ExplistContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExplistContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterExplist(this);
	}
};

ExplistContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitExplist(this);
	}
};




luappParser.ExplistContext = ExplistContext;

luappParser.prototype.explist = function() {

    var localctx = new ExplistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, luappParser.RULE_explist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.exp(0);
        this.state = 229;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===luappParser.T__14) {
            this.state = 225;
            this.match(luappParser.T__14);
            this.state = 226;
            this.exp(0);
            this.state = 231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_exp;
    return this;
}

ExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpContext.prototype.constructor = ExpContext;

ExpContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ExpContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ExpContext.prototype.functiondef = function() {
    return this.getTypedRuleContext(FunctiondefContext,0);
};

ExpContext.prototype.prefixexp = function() {
    return this.getTypedRuleContext(PrefixexpContext,0);
};

ExpContext.prototype.tableconstructor = function() {
    return this.getTypedRuleContext(TableconstructorContext,0);
};

ExpContext.prototype.operatorUnary = function() {
    return this.getTypedRuleContext(OperatorUnaryContext,0);
};

ExpContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpContext.prototype.operatorPower = function() {
    return this.getTypedRuleContext(OperatorPowerContext,0);
};

ExpContext.prototype.operatorMulDivMod = function() {
    return this.getTypedRuleContext(OperatorMulDivModContext,0);
};

ExpContext.prototype.operatorAddSub = function() {
    return this.getTypedRuleContext(OperatorAddSubContext,0);
};

ExpContext.prototype.operatorStrcat = function() {
    return this.getTypedRuleContext(OperatorStrcatContext,0);
};

ExpContext.prototype.operatorComparison = function() {
    return this.getTypedRuleContext(OperatorComparisonContext,0);
};

ExpContext.prototype.operatorAnd = function() {
    return this.getTypedRuleContext(OperatorAndContext,0);
};

ExpContext.prototype.operatorOr = function() {
    return this.getTypedRuleContext(OperatorOrContext,0);
};

ExpContext.prototype.operatorBitwise = function() {
    return this.getTypedRuleContext(OperatorBitwiseContext,0);
};

ExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterExp(this);
	}
};

ExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitExp(this);
	}
};



luappParser.prototype.exp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 20;
    this.enterRecursionRule(localctx, 20, luappParser.RULE_exp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case luappParser.T__23:
            this.state = 233;
            this.match(luappParser.T__23);
            break;
        case luappParser.T__24:
            this.state = 234;
            this.match(luappParser.T__24);
            break;
        case luappParser.T__25:
            this.state = 235;
            this.match(luappParser.T__25);
            break;
        case luappParser.INT:
        case luappParser.HEX:
        case luappParser.FLOAT:
        case luappParser.HEX_FLOAT:
            this.state = 236;
            this.number();
            break;
        case luappParser.NORMALSTRING:
        case luappParser.CHARSTRING:
        case luappParser.LONGSTRING:
            this.state = 237;
            this.string();
            break;
        case luappParser.T__26:
            this.state = 238;
            this.match(luappParser.T__26);
            break;
        case luappParser.T__16:
            this.state = 239;
            this.functiondef();
            break;
        case luappParser.T__27:
        case luappParser.NAME:
            this.state = 240;
            this.prefixexp();
            break;
        case luappParser.T__31:
            this.state = 241;
            this.tableconstructor();
            break;
        case luappParser.T__43:
        case luappParser.T__50:
        case luappParser.T__53:
        case luappParser.T__54:
            this.state = 242;
            this.operatorUnary();
            this.state = 243;
            this.exp(8);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 281;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 279;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, luappParser.RULE_exp);
                    this.state = 247;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 248;
                    this.operatorPower();
                    this.state = 249;
                    this.exp(9);
                    break;

                case 2:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, luappParser.RULE_exp);
                    this.state = 251;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 252;
                    this.operatorMulDivMod();
                    this.state = 253;
                    this.exp(8);
                    break;

                case 3:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, luappParser.RULE_exp);
                    this.state = 255;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 256;
                    this.operatorAddSub();
                    this.state = 257;
                    this.exp(7);
                    break;

                case 4:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, luappParser.RULE_exp);
                    this.state = 259;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 260;
                    this.operatorStrcat();
                    this.state = 261;
                    this.exp(5);
                    break;

                case 5:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, luappParser.RULE_exp);
                    this.state = 263;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 264;
                    this.operatorComparison();
                    this.state = 265;
                    this.exp(5);
                    break;

                case 6:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, luappParser.RULE_exp);
                    this.state = 267;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 268;
                    this.operatorAnd();
                    this.state = 269;
                    this.exp(4);
                    break;

                case 7:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, luappParser.RULE_exp);
                    this.state = 271;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 272;
                    this.operatorOr();
                    this.state = 273;
                    this.exp(3);
                    break;

                case 8:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, luappParser.RULE_exp);
                    this.state = 275;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 276;
                    this.operatorBitwise();
                    this.state = 277;
                    this.exp(2);
                    break;

                } 
            }
            this.state = 283;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function PrefixexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_prefixexp;
    return this;
}

PrefixexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixexpContext.prototype.constructor = PrefixexpContext;

PrefixexpContext.prototype.varOrExp = function() {
    return this.getTypedRuleContext(VarOrExpContext,0);
};

PrefixexpContext.prototype.nameAndArgs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameAndArgsContext);
    } else {
        return this.getTypedRuleContext(NameAndArgsContext,i);
    }
};

PrefixexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterPrefixexp(this);
	}
};

PrefixexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitPrefixexp(this);
	}
};




luappParser.PrefixexpContext = PrefixexpContext;

luappParser.prototype.prefixexp = function() {

    var localctx = new PrefixexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, luappParser.RULE_prefixexp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 284;
        this.varOrExp();
        this.state = 288;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 285;
                this.nameAndArgs(); 
            }
            this.state = 290;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctioncallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_functioncall;
    return this;
}

FunctioncallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctioncallContext.prototype.constructor = FunctioncallContext;

FunctioncallContext.prototype.varOrExp = function() {
    return this.getTypedRuleContext(VarOrExpContext,0);
};

FunctioncallContext.prototype.nameAndArgs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameAndArgsContext);
    } else {
        return this.getTypedRuleContext(NameAndArgsContext,i);
    }
};

FunctioncallContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterFunctioncall(this);
	}
};

FunctioncallContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitFunctioncall(this);
	}
};




luappParser.FunctioncallContext = FunctioncallContext;

luappParser.prototype.functioncall = function() {

    var localctx = new FunctioncallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, luappParser.RULE_functioncall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.varOrExp();
        this.state = 293; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 292;
        		this.nameAndArgs();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 295; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarOrExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_varOrExp;
    return this;
}

VarOrExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarOrExpContext.prototype.constructor = VarOrExpContext;

VarOrExpContext.prototype.var = function() {
    return this.getTypedRuleContext(VarContext,0);
};

VarOrExpContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VarOrExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterVarOrExp(this);
	}
};

VarOrExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitVarOrExp(this);
	}
};




luappParser.VarOrExpContext = VarOrExpContext;

luappParser.prototype.varOrExp = function() {

    var localctx = new VarOrExpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, luappParser.RULE_varOrExp);
    try {
        this.state = 302;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 297;
            this.var();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 298;
            this.match(luappParser.T__27);
            this.state = 299;
            this.exp(0);
            this.state = 300;
            this.match(luappParser.T__28);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_var;
    return this;
}

VarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarContext.prototype.constructor = VarContext;

VarContext.prototype.NAME = function() {
    return this.getToken(luappParser.NAME, 0);
};

VarContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VarContext.prototype.varSuffix = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarSuffixContext);
    } else {
        return this.getTypedRuleContext(VarSuffixContext,i);
    }
};

VarContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterVar(this);
	}
};

VarContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitVar(this);
	}
};




luappParser.VarContext = VarContext;

luappParser.prototype.var = function() {

    var localctx = new VarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, luappParser.RULE_var);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 310;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case luappParser.NAME:
            this.state = 304;
            this.match(luappParser.NAME);
            break;
        case luappParser.T__27:
            this.state = 305;
            this.match(luappParser.T__27);
            this.state = 306;
            this.exp(0);
            this.state = 307;
            this.match(luappParser.T__28);
            this.state = 308;
            this.varSuffix();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 315;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 312;
                this.varSuffix(); 
            }
            this.state = 317;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VarSuffixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_varSuffix;
    return this;
}

VarSuffixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarSuffixContext.prototype.constructor = VarSuffixContext;

VarSuffixContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VarSuffixContext.prototype.NAME = function() {
    return this.getToken(luappParser.NAME, 0);
};

VarSuffixContext.prototype.nameAndArgs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameAndArgsContext);
    } else {
        return this.getTypedRuleContext(NameAndArgsContext,i);
    }
};

VarSuffixContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterVarSuffix(this);
	}
};

VarSuffixContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitVarSuffix(this);
	}
};




luappParser.VarSuffixContext = VarSuffixContext;

luappParser.prototype.varSuffix = function() {

    var localctx = new VarSuffixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, luappParser.RULE_varSuffix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 321;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & ((1 << (luappParser.T__22 - 23)) | (1 << (luappParser.T__27 - 23)) | (1 << (luappParser.T__31 - 23)))) !== 0) || ((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (luappParser.NORMALSTRING - 62)) | (1 << (luappParser.CHARSTRING - 62)) | (1 << (luappParser.LONGSTRING - 62)))) !== 0)) {
            this.state = 318;
            this.nameAndArgs();
            this.state = 323;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 330;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case luappParser.T__29:
            this.state = 324;
            this.match(luappParser.T__29);
            this.state = 325;
            this.exp(0);
            this.state = 326;
            this.match(luappParser.T__30);
            break;
        case luappParser.T__21:
            this.state = 328;
            this.match(luappParser.T__21);
            this.state = 329;
            this.match(luappParser.NAME);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NameAndArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_nameAndArgs;
    return this;
}

NameAndArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameAndArgsContext.prototype.constructor = NameAndArgsContext;

NameAndArgsContext.prototype.args = function() {
    return this.getTypedRuleContext(ArgsContext,0);
};

NameAndArgsContext.prototype.NAME = function() {
    return this.getToken(luappParser.NAME, 0);
};

NameAndArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterNameAndArgs(this);
	}
};

NameAndArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitNameAndArgs(this);
	}
};




luappParser.NameAndArgsContext = NameAndArgsContext;

luappParser.prototype.nameAndArgs = function() {

    var localctx = new NameAndArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, luappParser.RULE_nameAndArgs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===luappParser.T__22) {
            this.state = 332;
            this.match(luappParser.T__22);
            this.state = 333;
            this.match(luappParser.NAME);
        }

        this.state = 336;
        this.args();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_args;
    return this;
}

ArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgsContext.prototype.constructor = ArgsContext;

ArgsContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

ArgsContext.prototype.tableconstructor = function() {
    return this.getTypedRuleContext(TableconstructorContext,0);
};

ArgsContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterArgs(this);
	}
};

ArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitArgs(this);
	}
};




luappParser.ArgsContext = ArgsContext;

luappParser.prototype.args = function() {

    var localctx = new ArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, luappParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.state = 345;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case luappParser.T__27:
            this.enterOuterAlt(localctx, 1);
            this.state = 338;
            this.match(luappParser.T__27);
            this.state = 340;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (luappParser.T__16 - 17)) | (1 << (luappParser.T__23 - 17)) | (1 << (luappParser.T__24 - 17)) | (1 << (luappParser.T__25 - 17)) | (1 << (luappParser.T__26 - 17)) | (1 << (luappParser.T__27 - 17)) | (1 << (luappParser.T__31 - 17)) | (1 << (luappParser.T__43 - 17)))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (luappParser.T__50 - 51)) | (1 << (luappParser.T__53 - 51)) | (1 << (luappParser.T__54 - 51)) | (1 << (luappParser.NAME - 51)) | (1 << (luappParser.NORMALSTRING - 51)) | (1 << (luappParser.CHARSTRING - 51)) | (1 << (luappParser.LONGSTRING - 51)) | (1 << (luappParser.INT - 51)) | (1 << (luappParser.HEX - 51)) | (1 << (luappParser.FLOAT - 51)) | (1 << (luappParser.HEX_FLOAT - 51)))) !== 0)) {
                this.state = 339;
                this.explist();
            }

            this.state = 342;
            this.match(luappParser.T__28);
            break;
        case luappParser.T__31:
            this.enterOuterAlt(localctx, 2);
            this.state = 343;
            this.tableconstructor();
            break;
        case luappParser.NORMALSTRING:
        case luappParser.CHARSTRING:
        case luappParser.LONGSTRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 344;
            this.string();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FunctiondefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_functiondef;
    return this;
}

FunctiondefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctiondefContext.prototype.constructor = FunctiondefContext;

FunctiondefContext.prototype.funcbody = function() {
    return this.getTypedRuleContext(FuncbodyContext,0);
};

FunctiondefContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterFunctiondef(this);
	}
};

FunctiondefContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitFunctiondef(this);
	}
};




luappParser.FunctiondefContext = FunctiondefContext;

luappParser.prototype.functiondef = function() {

    var localctx = new FunctiondefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, luappParser.RULE_functiondef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 347;
        this.match(luappParser.T__16);
        this.state = 348;
        this.funcbody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FuncbodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_funcbody;
    return this;
}

FuncbodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncbodyContext.prototype.constructor = FuncbodyContext;

FuncbodyContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FuncbodyContext.prototype.parlist = function() {
    return this.getTypedRuleContext(ParlistContext,0);
};

FuncbodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterFuncbody(this);
	}
};

FuncbodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitFuncbody(this);
	}
};




luappParser.FuncbodyContext = FuncbodyContext;

luappParser.prototype.funcbody = function() {

    var localctx = new FuncbodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, luappParser.RULE_funcbody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 350;
        this.match(luappParser.T__27);
        this.state = 352;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===luappParser.T__26 || _la===luappParser.NAME) {
            this.state = 351;
            this.parlist();
        }

        this.state = 354;
        this.match(luappParser.T__28);
        this.state = 355;
        this.block();
        this.state = 356;
        this.match(luappParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_parlist;
    return this;
}

ParlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParlistContext.prototype.constructor = ParlistContext;

ParlistContext.prototype.namelist = function() {
    return this.getTypedRuleContext(NamelistContext,0);
};

ParlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterParlist(this);
	}
};

ParlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitParlist(this);
	}
};




luappParser.ParlistContext = ParlistContext;

luappParser.prototype.parlist = function() {

    var localctx = new ParlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, luappParser.RULE_parlist);
    var _la = 0; // Token type
    try {
        this.state = 364;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case luappParser.NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 358;
            this.namelist();
            this.state = 361;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===luappParser.T__14) {
                this.state = 359;
                this.match(luappParser.T__14);
                this.state = 360;
                this.match(luappParser.T__26);
            }

            break;
        case luappParser.T__26:
            this.enterOuterAlt(localctx, 2);
            this.state = 363;
            this.match(luappParser.T__26);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TableconstructorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_tableconstructor;
    return this;
}

TableconstructorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableconstructorContext.prototype.constructor = TableconstructorContext;

TableconstructorContext.prototype.fieldlist = function() {
    return this.getTypedRuleContext(FieldlistContext,0);
};

TableconstructorContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterTableconstructor(this);
	}
};

TableconstructorContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitTableconstructor(this);
	}
};




luappParser.TableconstructorContext = TableconstructorContext;

luappParser.prototype.tableconstructor = function() {

    var localctx = new TableconstructorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, luappParser.RULE_tableconstructor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 366;
        this.match(luappParser.T__31);
        this.state = 368;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 17)) & ~0x1f) == 0 && ((1 << (_la - 17)) & ((1 << (luappParser.T__16 - 17)) | (1 << (luappParser.T__23 - 17)) | (1 << (luappParser.T__24 - 17)) | (1 << (luappParser.T__25 - 17)) | (1 << (luappParser.T__26 - 17)) | (1 << (luappParser.T__27 - 17)) | (1 << (luappParser.T__29 - 17)) | (1 << (luappParser.T__31 - 17)) | (1 << (luappParser.T__43 - 17)))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (luappParser.T__50 - 51)) | (1 << (luappParser.T__53 - 51)) | (1 << (luappParser.T__54 - 51)) | (1 << (luappParser.NAME - 51)) | (1 << (luappParser.NORMALSTRING - 51)) | (1 << (luappParser.CHARSTRING - 51)) | (1 << (luappParser.LONGSTRING - 51)) | (1 << (luappParser.INT - 51)) | (1 << (luappParser.HEX - 51)) | (1 << (luappParser.FLOAT - 51)) | (1 << (luappParser.HEX_FLOAT - 51)))) !== 0)) {
            this.state = 367;
            this.fieldlist();
        }

        this.state = 370;
        this.match(luappParser.T__32);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FieldlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_fieldlist;
    return this;
}

FieldlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldlistContext.prototype.constructor = FieldlistContext;

FieldlistContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

FieldlistContext.prototype.fieldsep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldsepContext);
    } else {
        return this.getTypedRuleContext(FieldsepContext,i);
    }
};

FieldlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterFieldlist(this);
	}
};

FieldlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitFieldlist(this);
	}
};




luappParser.FieldlistContext = FieldlistContext;

luappParser.prototype.fieldlist = function() {

    var localctx = new FieldlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, luappParser.RULE_fieldlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 372;
        this.field();
        this.state = 378;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 373;
                this.fieldsep();
                this.state = 374;
                this.field(); 
            }
            this.state = 380;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
        }

        this.state = 382;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===luappParser.T__0 || _la===luappParser.T__14) {
            this.state = 381;
            this.fieldsep();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

FieldContext.prototype.NAME = function() {
    return this.getToken(luappParser.NAME, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitField(this);
	}
};




luappParser.FieldContext = FieldContext;

luappParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, luappParser.RULE_field);
    try {
        this.state = 394;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 384;
            this.match(luappParser.T__29);
            this.state = 385;
            this.exp(0);
            this.state = 386;
            this.match(luappParser.T__30);
            this.state = 387;
            this.match(luappParser.T__1);
            this.state = 388;
            this.exp(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 390;
            this.match(luappParser.NAME);
            this.state = 391;
            this.match(luappParser.T__1);
            this.state = 392;
            this.exp(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 393;
            this.exp(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FieldsepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_fieldsep;
    return this;
}

FieldsepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldsepContext.prototype.constructor = FieldsepContext;


FieldsepContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterFieldsep(this);
	}
};

FieldsepContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitFieldsep(this);
	}
};




luappParser.FieldsepContext = FieldsepContext;

luappParser.prototype.fieldsep = function() {

    var localctx = new FieldsepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, luappParser.RULE_fieldsep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
        _la = this._input.LA(1);
        if(!(_la===luappParser.T__0 || _la===luappParser.T__14)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_operatorOr;
    return this;
}

OperatorOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorOrContext.prototype.constructor = OperatorOrContext;


OperatorOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterOperatorOr(this);
	}
};

OperatorOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitOperatorOr(this);
	}
};




luappParser.OperatorOrContext = OperatorOrContext;

luappParser.prototype.operatorOr = function() {

    var localctx = new OperatorOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, luappParser.RULE_operatorOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        this.match(luappParser.T__33);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_operatorAnd;
    return this;
}

OperatorAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorAndContext.prototype.constructor = OperatorAndContext;


OperatorAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterOperatorAnd(this);
	}
};

OperatorAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitOperatorAnd(this);
	}
};




luappParser.OperatorAndContext = OperatorAndContext;

luappParser.prototype.operatorAnd = function() {

    var localctx = new OperatorAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, luappParser.RULE_operatorAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 400;
        this.match(luappParser.T__34);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_operatorComparison;
    return this;
}

OperatorComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorComparisonContext.prototype.constructor = OperatorComparisonContext;


OperatorComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterOperatorComparison(this);
	}
};

OperatorComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitOperatorComparison(this);
	}
};




luappParser.OperatorComparisonContext = OperatorComparisonContext;

luappParser.prototype.operatorComparison = function() {

    var localctx = new OperatorComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, luappParser.RULE_operatorComparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (luappParser.T__35 - 36)) | (1 << (luappParser.T__36 - 36)) | (1 << (luappParser.T__37 - 36)) | (1 << (luappParser.T__38 - 36)) | (1 << (luappParser.T__39 - 36)) | (1 << (luappParser.T__40 - 36)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorStrcatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_operatorStrcat;
    return this;
}

OperatorStrcatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorStrcatContext.prototype.constructor = OperatorStrcatContext;


OperatorStrcatContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterOperatorStrcat(this);
	}
};

OperatorStrcatContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitOperatorStrcat(this);
	}
};




luappParser.OperatorStrcatContext = OperatorStrcatContext;

luappParser.prototype.operatorStrcat = function() {

    var localctx = new OperatorStrcatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, luappParser.RULE_operatorStrcat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 404;
        this.match(luappParser.T__41);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorAddSubContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_operatorAddSub;
    return this;
}

OperatorAddSubContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorAddSubContext.prototype.constructor = OperatorAddSubContext;


OperatorAddSubContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterOperatorAddSub(this);
	}
};

OperatorAddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitOperatorAddSub(this);
	}
};




luappParser.OperatorAddSubContext = OperatorAddSubContext;

luappParser.prototype.operatorAddSub = function() {

    var localctx = new OperatorAddSubContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, luappParser.RULE_operatorAddSub);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
        _la = this._input.LA(1);
        if(!(_la===luappParser.T__42 || _la===luappParser.T__43)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorMulDivModContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_operatorMulDivMod;
    return this;
}

OperatorMulDivModContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorMulDivModContext.prototype.constructor = OperatorMulDivModContext;


OperatorMulDivModContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterOperatorMulDivMod(this);
	}
};

OperatorMulDivModContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitOperatorMulDivMod(this);
	}
};




luappParser.OperatorMulDivModContext = OperatorMulDivModContext;

luappParser.prototype.operatorMulDivMod = function() {

    var localctx = new OperatorMulDivModContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, luappParser.RULE_operatorMulDivMod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 408;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (luappParser.T__44 - 45)) | (1 << (luappParser.T__45 - 45)) | (1 << (luappParser.T__46 - 45)) | (1 << (luappParser.T__47 - 45)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorBitwiseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_operatorBitwise;
    return this;
}

OperatorBitwiseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorBitwiseContext.prototype.constructor = OperatorBitwiseContext;


OperatorBitwiseContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterOperatorBitwise(this);
	}
};

OperatorBitwiseContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitOperatorBitwise(this);
	}
};




luappParser.OperatorBitwiseContext = OperatorBitwiseContext;

luappParser.prototype.operatorBitwise = function() {

    var localctx = new OperatorBitwiseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, luappParser.RULE_operatorBitwise);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 410;
        _la = this._input.LA(1);
        if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & ((1 << (luappParser.T__48 - 49)) | (1 << (luappParser.T__49 - 49)) | (1 << (luappParser.T__50 - 49)) | (1 << (luappParser.T__51 - 49)) | (1 << (luappParser.T__52 - 49)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorUnaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_operatorUnary;
    return this;
}

OperatorUnaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorUnaryContext.prototype.constructor = OperatorUnaryContext;


OperatorUnaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterOperatorUnary(this);
	}
};

OperatorUnaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitOperatorUnary(this);
	}
};




luappParser.OperatorUnaryContext = OperatorUnaryContext;

luappParser.prototype.operatorUnary = function() {

    var localctx = new OperatorUnaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, luappParser.RULE_operatorUnary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 412;
        _la = this._input.LA(1);
        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (luappParser.T__43 - 44)) | (1 << (luappParser.T__50 - 44)) | (1 << (luappParser.T__53 - 44)) | (1 << (luappParser.T__54 - 44)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OperatorPowerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_operatorPower;
    return this;
}

OperatorPowerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorPowerContext.prototype.constructor = OperatorPowerContext;


OperatorPowerContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterOperatorPower(this);
	}
};

OperatorPowerContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitOperatorPower(this);
	}
};




luappParser.OperatorPowerContext = OperatorPowerContext;

luappParser.prototype.operatorPower = function() {

    var localctx = new OperatorPowerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, luappParser.RULE_operatorPower);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 414;
        this.match(luappParser.T__55);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INT = function() {
    return this.getToken(luappParser.INT, 0);
};

NumberContext.prototype.HEX = function() {
    return this.getToken(luappParser.HEX, 0);
};

NumberContext.prototype.FLOAT = function() {
    return this.getToken(luappParser.FLOAT, 0);
};

NumberContext.prototype.HEX_FLOAT = function() {
    return this.getToken(luappParser.HEX_FLOAT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitNumber(this);
	}
};




luappParser.NumberContext = NumberContext;

luappParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, luappParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 416;
        _la = this._input.LA(1);
        if(!(((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & ((1 << (luappParser.INT - 65)) | (1 << (luappParser.HEX - 65)) | (1 << (luappParser.FLOAT - 65)) | (1 << (luappParser.HEX_FLOAT - 65)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.NORMALSTRING = function() {
    return this.getToken(luappParser.NORMALSTRING, 0);
};

StringContext.prototype.CHARSTRING = function() {
    return this.getToken(luappParser.CHARSTRING, 0);
};

StringContext.prototype.LONGSTRING = function() {
    return this.getToken(luappParser.LONGSTRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitString(this);
	}
};




luappParser.StringContext = StringContext;

luappParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, luappParser.RULE_string);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 418;
        _la = this._input.LA(1);
        if(!(((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (luappParser.NORMALSTRING - 62)) | (1 << (luappParser.CHARSTRING - 62)) | (1 << (luappParser.LONGSTRING - 62)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClassdefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_classdef;
    return this;
}

ClassdefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassdefContext.prototype.constructor = ClassdefContext;

ClassdefContext.prototype.classbody = function() {
    return this.getTypedRuleContext(ClassbodyContext,0);
};

ClassdefContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterClassdef(this);
	}
};

ClassdefContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitClassdef(this);
	}
};




luappParser.ClassdefContext = ClassdefContext;

luappParser.prototype.classdef = function() {

    var localctx = new ClassdefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, luappParser.RULE_classdef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 420;
        this.match(luappParser.T__17);
        this.state = 421;
        this.classbody();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ClassbodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_classbody;
    return this;
}

ClassbodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassbodyContext.prototype.constructor = ClassbodyContext;

ClassbodyContext.prototype.functiondef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctiondefContext);
    } else {
        return this.getTypedRuleContext(FunctiondefContext,i);
    }
};

ClassbodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterClassbody(this);
	}
};

ClassbodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitClassbody(this);
	}
};




luappParser.ClassbodyContext = ClassbodyContext;

luappParser.prototype.classbody = function() {

    var localctx = new ClassbodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, luappParser.RULE_classbody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===luappParser.T__16) {
            this.state = 423;
            this.functiondef();
            this.state = 428;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 429;
        this.match(luappParser.T__5);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AddOneContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_addOne;
    return this;
}

AddOneContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AddOneContext.prototype.constructor = AddOneContext;


AddOneContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterAddOne(this);
	}
};

AddOneContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitAddOne(this);
	}
};




luappParser.AddOneContext = AddOneContext;

luappParser.prototype.addOne = function() {

    var localctx = new AddOneContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, luappParser.RULE_addOne);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 431;
        this.match(luappParser.T__56);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PlusEqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_plusEqual;
    return this;
}

PlusEqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlusEqualContext.prototype.constructor = PlusEqualContext;


PlusEqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterPlusEqual(this);
	}
};

PlusEqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitPlusEqual(this);
	}
};




luappParser.PlusEqualContext = PlusEqualContext;

luappParser.prototype.plusEqual = function() {

    var localctx = new PlusEqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, luappParser.RULE_plusEqual);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 433;
        this.match(luappParser.T__57);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MultiplyEqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_multiplyEqual;
    return this;
}

MultiplyEqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiplyEqualContext.prototype.constructor = MultiplyEqualContext;


MultiplyEqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterMultiplyEqual(this);
	}
};

MultiplyEqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitMultiplyEqual(this);
	}
};




luappParser.MultiplyEqualContext = MultiplyEqualContext;

luappParser.prototype.multiplyEqual = function() {

    var localctx = new MultiplyEqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, luappParser.RULE_multiplyEqual);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        this.match(luappParser.T__58);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DivEqualContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = luappParser.RULE_divEqual;
    return this;
}

DivEqualContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DivEqualContext.prototype.constructor = DivEqualContext;


DivEqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.enterDivEqual(this);
	}
};

DivEqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof luappListener ) {
        listener.exitDivEqual(this);
	}
};




luappParser.DivEqualContext = DivEqualContext;

luappParser.prototype.divEqual = function() {

    var localctx = new DivEqualContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, luappParser.RULE_divEqual);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 437;
        this.match(luappParser.T__59);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


luappParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 10:
			return this.exp_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

luappParser.prototype.exp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.luappParser = luappParser;
