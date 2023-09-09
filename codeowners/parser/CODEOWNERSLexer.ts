// Generated from CODEOWNERSLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class CODEOWNERSLexer extends Lexer {
	public static readonly PATH = 1;
	public static readonly EXTENSION = 2;
	public static readonly CODEOWNERS = 3;
	public static readonly LEAVERS = 4;
	public static readonly USER = 5;
	public static readonly NEWLINE = 6;
	public static readonly WHITESPACE = 7;
	public static readonly FILETYPE = 8;
	public static readonly ASTERIX = 9;
	public static readonly HASH = 10;
	public static readonly NAME_PART = 11;
	public static readonly COMMENT = 12;
	public static readonly COMMENTS_CHANNEL = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "COMMENTS_CHANNEL",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"PATH", "EXTENSION", "CODEOWNERS", "LEAVERS", "USER", "NEWLINE", "WHITESPACE", 
		"FILETYPE", "ASTERIX", "HASH", "NAME_PART", "COMMENT", "CHAR",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'CODEOWNERS'", "'LEAVERS'", undefined, 
		undefined, undefined, undefined, "'*'", "'#'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PATH", "EXTENSION", "CODEOWNERS", "LEAVERS", "USER", "NEWLINE", 
		"WHITESPACE", "FILETYPE", "ASTERIX", "HASH", "NAME_PART", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CODEOWNERSLexer._LITERAL_NAMES, CODEOWNERSLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CODEOWNERSLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(CODEOWNERSLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "CODEOWNERSLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return CODEOWNERSLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return CODEOWNERSLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return CODEOWNERSLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return CODEOWNERSLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x0Em\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x03\x02\x06\x02\"\n\x02\r\x02\x0E" +
		"\x02#\x03\x02\x03\x02\x03\x02\x03\x02\x06\x02*\n\x02\r\x02\x0E\x02+\x03" +
		"\x02\x05\x02/\n\x02\x03\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x07\x05\x07M\n\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03" +
		"\f\x06\f_\n\f\r\f\x0E\f`\x03\r\x03\r\x07\re\n\r\f\r\x0E\rh\v\r\x03\r\x03" +
		"\r\x03\x0E\x03\x0E\x02\x02\x02\x0F\x03\x02\x03\x05\x02\x04\x07\x02\x05" +
		"\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x02\x03\x02\x05\x05\x02\v\v\"\"..\x04\x02\f" +
		"\f\x0F\x0F\x07\x02,,/;C\\aac|\x02u\x02\x03\x03\x02\x02\x02\x02\x05\x03" +
		"\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02" +
		"\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02" +
		"\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02" +
		"\x02\x02\x02\x19\x03\x02\x02\x02\x03.\x03\x02\x02\x02\x053\x03\x02\x02" +
		"\x02\x075\x03\x02\x02\x02\t@\x03\x02\x02\x02\vH\x03\x02\x02\x02\rL\x03" +
		"\x02\x02\x02\x0FP\x03\x02\x02\x02\x11T\x03\x02\x02\x02\x13Y\x03\x02\x02" +
		"\x02\x15[\x03\x02\x02\x02\x17^\x03\x02\x02\x02\x19b\x03\x02\x02\x02\x1B" +
		"k\x03\x02\x02\x02\x1D!\x071\x02\x02\x1E\x1F\x05\x17\f\x02\x1F \x071\x02" +
		"\x02 \"\x03\x02\x02\x02!\x1E\x03\x02\x02\x02\"#\x03\x02\x02\x02#!\x03" +
		"\x02\x02\x02#$\x03\x02\x02\x02$)\x03\x02\x02\x02%&\x07,\x02\x02&*\x07" +
		",\x02\x02\'*\x05\x17\f\x02(*\x071\x02\x02)%\x03\x02\x02\x02)\'\x03\x02" +
		"\x02\x02)(\x03\x02\x02\x02*+\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02" +
		"\x02\x02,/\x03\x02\x02\x02-/\x05\x13\n\x02.\x1D\x03\x02\x02\x02.-\x03" +
		"\x02\x02\x02/\x04\x03\x02\x02\x0204\x05\x11\t\x0214\x05\x07\x04\x0224" +
		"\x05\t\x05\x0230\x03\x02\x02\x0231\x03\x02\x02\x0232\x03\x02\x02\x024" +
		"\x06\x03\x02\x02\x0256\x07E\x02\x0267\x07Q\x02\x0278\x07F\x02\x0289\x07" +
		"G\x02\x029:\x07Q\x02\x02:;\x07Y\x02\x02;<\x07P\x02\x02<=\x07G\x02\x02" +
		"=>\x07T\x02\x02>?\x07U\x02\x02?\b\x03\x02\x02\x02@A\x07N\x02\x02AB\x07" +
		"G\x02\x02BC\x07C\x02\x02CD\x07X\x02\x02DE\x07G\x02\x02EF\x07T\x02\x02" +
		"FG\x07U\x02\x02G\n\x03\x02\x02\x02HI\x07B\x02\x02IJ\x05\x17\f\x02J\f\x03" +
		"\x02\x02\x02KM\x07\x0F\x02\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03" +
		"\x02\x02\x02NO\x07\f\x02\x02O\x0E\x03\x02\x02\x02PQ\t\x02\x02\x02QR\x03" +
		"\x02\x02\x02RS\b\b\x02\x02S\x10\x03\x02\x02\x02TU\x07,\x02\x02UV\x070" +
		"\x02\x02VW\x03\x02\x02\x02WX\x05\x17\f\x02X\x12\x03\x02\x02\x02YZ\x07" +
		",\x02\x02Z\x14\x03\x02\x02\x02[\\\x07%\x02\x02\\\x16\x03\x02\x02\x02]" +
		"_\x05\x1B\x0E\x02^]\x03\x02\x02\x02_`\x03\x02\x02\x02`^\x03\x02\x02\x02" +
		"`a\x03\x02\x02\x02a\x18\x03\x02\x02\x02bf\x07%\x02\x02ce\n\x03\x02\x02" +
		"dc\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02" +
		"gi\x03\x02\x02\x02hf\x03\x02\x02\x02ij\b\r\x03\x02j\x1A\x03\x02\x02\x02" +
		"kl\t\x04\x02\x02l\x1C\x03\x02\x02\x02\v\x02#)+.3L`f\x04\b\x02\x02\x02" +
		"\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CODEOWNERSLexer.__ATN) {
			CODEOWNERSLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CODEOWNERSLexer._serializedATN));
		}

		return CODEOWNERSLexer.__ATN;
	}

}

