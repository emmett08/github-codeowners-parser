// Generated from CODEOWNERSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CODEOWNERSParserListener } from "./CODEOWNERSParserListener";
import { CODEOWNERSParserVisitor } from "./CODEOWNERSParserVisitor";


export class CODEOWNERSParser extends Parser {
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
	public static readonly RULE_file = 0;
	public static readonly RULE_entry = 1;
	public static readonly RULE_pathEntry = 2;
	public static readonly RULE_extensionEntry = 3;
	public static readonly RULE_commentEntry = 4;
	public static readonly RULE_user_list = 5;
	public static readonly RULE_user = 6;
	public static readonly RULE_blankLine = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "entry", "pathEntry", "extensionEntry", "commentEntry", "user_list", 
		"user", "blankLine",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'CODEOWNERS'", "'LEAVERS'", undefined, 
		undefined, undefined, undefined, "'*'", "'#'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PATH", "EXTENSION", "CODEOWNERS", "LEAVERS", "USER", "NEWLINE", 
		"WHITESPACE", "FILETYPE", "ASTERIX", "HASH", "NAME_PART", "COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CODEOWNERSParser._LITERAL_NAMES, CODEOWNERSParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CODEOWNERSParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CODEOWNERSParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CODEOWNERSParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CODEOWNERSParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CODEOWNERSParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CODEOWNERSParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 20;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 16;
				this.entry();
				this.state = 18;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 17;
					this.match(CODEOWNERSParser.NEWLINE);
					}
					break;
				}
				}
				}
				this.state = 22;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CODEOWNERSParser.PATH) | (1 << CODEOWNERSParser.EXTENSION) | (1 << CODEOWNERSParser.NEWLINE) | (1 << CODEOWNERSParser.COMMENT))) !== 0));
			this.state = 24;
			this.match(CODEOWNERSParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public entry(): EntryContext {
		let _localctx: EntryContext = new EntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CODEOWNERSParser.RULE_entry);
		try {
			this.state = 30;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CODEOWNERSParser.PATH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 26;
				this.pathEntry();
				}
				break;
			case CODEOWNERSParser.EXTENSION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 27;
				this.extensionEntry();
				}
				break;
			case CODEOWNERSParser.COMMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 28;
				this.commentEntry();
				}
				break;
			case CODEOWNERSParser.NEWLINE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 29;
				this.blankLine();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pathEntry(): PathEntryContext {
		let _localctx: PathEntryContext = new PathEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CODEOWNERSParser.RULE_pathEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 32;
			this.match(CODEOWNERSParser.PATH);
			this.state = 33;
			this.user_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public extensionEntry(): ExtensionEntryContext {
		let _localctx: ExtensionEntryContext = new ExtensionEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CODEOWNERSParser.RULE_extensionEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(CODEOWNERSParser.EXTENSION);
			this.state = 36;
			this.user_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public commentEntry(): CommentEntryContext {
		let _localctx: CommentEntryContext = new CommentEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CODEOWNERSParser.RULE_commentEntry);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(CODEOWNERSParser.COMMENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public user_list(): User_listContext {
		let _localctx: User_listContext = new User_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CODEOWNERSParser.RULE_user_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 40;
				this.user();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CODEOWNERSParser.USER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public user(): UserContext {
		let _localctx: UserContext = new UserContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CODEOWNERSParser.RULE_user);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(CODEOWNERSParser.USER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blankLine(): BlankLineContext {
		let _localctx: BlankLineContext = new BlankLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CODEOWNERSParser.RULE_blankLine);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 47;
			this.match(CODEOWNERSParser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x0E4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x03\x02\x05\x02\x15\n\x02\x06\x02\x17" +
		"\n\x02\r\x02\x0E\x02\x18\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03!\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x06\x07,\n\x07\r\x07\x0E\x07-\x03\b\x03\b\x03\t\x03\t" +
		"\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x02\x02\x021\x02\x16\x03\x02\x02\x02\x04 \x03\x02\x02\x02\x06" +
		"\"\x03\x02\x02\x02\b%\x03\x02\x02\x02\n(\x03\x02\x02\x02\f+\x03\x02\x02" +
		"\x02\x0E/\x03\x02\x02\x02\x101\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02" +
		"\x13\x15\x07\b\x02\x02\x14\x13\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02" +
		"\x15\x17\x03\x02\x02\x02\x16\x12\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02" +
		"\x18\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02" +
		"\x1A\x1B\x07\x02\x02\x03\x1B\x03\x03\x02\x02\x02\x1C!\x05\x06\x04\x02" +
		"\x1D!\x05\b\x05\x02\x1E!\x05\n\x06\x02\x1F!\x05\x10\t\x02 \x1C\x03\x02" +
		"\x02\x02 \x1D\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 \x1F\x03\x02\x02\x02" +
		"!\x05\x03\x02\x02\x02\"#\x07\x03\x02\x02#$\x05\f\x07\x02$\x07\x03\x02" +
		"\x02\x02%&\x07\x04\x02\x02&\'\x05\f\x07\x02\'\t\x03\x02\x02\x02()\x07" +
		"\x0E\x02\x02)\v\x03\x02\x02\x02*,\x05\x0E\b\x02+*\x03\x02\x02\x02,-\x03" +
		"\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.\r\x03\x02\x02\x02/0" +
		"\x07\x07\x02\x020\x0F\x03\x02\x02\x0212\x07\b\x02\x022\x11\x03\x02\x02" +
		"\x02\x06\x14\x18 -";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CODEOWNERSParser.__ATN) {
			CODEOWNERSParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CODEOWNERSParser._serializedATN));
		}

		return CODEOWNERSParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CODEOWNERSParser.EOF, 0); }
	public entry(): EntryContext[];
	public entry(i: number): EntryContext;
	public entry(i?: number): EntryContext | EntryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntryContext);
		} else {
			return this.getRuleContext(i, EntryContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CODEOWNERSParser.NEWLINE);
		} else {
			return this.getToken(CODEOWNERSParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CODEOWNERSParser.RULE_file; }
	// @Override
	public enterRule(listener: CODEOWNERSParserListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: CODEOWNERSParserListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CODEOWNERSParserVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntryContext extends ParserRuleContext {
	public pathEntry(): PathEntryContext | undefined {
		return this.tryGetRuleContext(0, PathEntryContext);
	}
	public extensionEntry(): ExtensionEntryContext | undefined {
		return this.tryGetRuleContext(0, ExtensionEntryContext);
	}
	public commentEntry(): CommentEntryContext | undefined {
		return this.tryGetRuleContext(0, CommentEntryContext);
	}
	public blankLine(): BlankLineContext | undefined {
		return this.tryGetRuleContext(0, BlankLineContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CODEOWNERSParser.RULE_entry; }
	// @Override
	public enterRule(listener: CODEOWNERSParserListener): void {
		if (listener.enterEntry) {
			listener.enterEntry(this);
		}
	}
	// @Override
	public exitRule(listener: CODEOWNERSParserListener): void {
		if (listener.exitEntry) {
			listener.exitEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CODEOWNERSParserVisitor<Result>): Result {
		if (visitor.visitEntry) {
			return visitor.visitEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PathEntryContext extends ParserRuleContext {
	public PATH(): TerminalNode { return this.getToken(CODEOWNERSParser.PATH, 0); }
	public user_list(): User_listContext {
		return this.getRuleContext(0, User_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CODEOWNERSParser.RULE_pathEntry; }
	// @Override
	public enterRule(listener: CODEOWNERSParserListener): void {
		if (listener.enterPathEntry) {
			listener.enterPathEntry(this);
		}
	}
	// @Override
	public exitRule(listener: CODEOWNERSParserListener): void {
		if (listener.exitPathEntry) {
			listener.exitPathEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CODEOWNERSParserVisitor<Result>): Result {
		if (visitor.visitPathEntry) {
			return visitor.visitPathEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExtensionEntryContext extends ParserRuleContext {
	public EXTENSION(): TerminalNode { return this.getToken(CODEOWNERSParser.EXTENSION, 0); }
	public user_list(): User_listContext {
		return this.getRuleContext(0, User_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CODEOWNERSParser.RULE_extensionEntry; }
	// @Override
	public enterRule(listener: CODEOWNERSParserListener): void {
		if (listener.enterExtensionEntry) {
			listener.enterExtensionEntry(this);
		}
	}
	// @Override
	public exitRule(listener: CODEOWNERSParserListener): void {
		if (listener.exitExtensionEntry) {
			listener.exitExtensionEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CODEOWNERSParserVisitor<Result>): Result {
		if (visitor.visitExtensionEntry) {
			return visitor.visitExtensionEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentEntryContext extends ParserRuleContext {
	public COMMENT(): TerminalNode { return this.getToken(CODEOWNERSParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CODEOWNERSParser.RULE_commentEntry; }
	// @Override
	public enterRule(listener: CODEOWNERSParserListener): void {
		if (listener.enterCommentEntry) {
			listener.enterCommentEntry(this);
		}
	}
	// @Override
	public exitRule(listener: CODEOWNERSParserListener): void {
		if (listener.exitCommentEntry) {
			listener.exitCommentEntry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CODEOWNERSParserVisitor<Result>): Result {
		if (visitor.visitCommentEntry) {
			return visitor.visitCommentEntry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class User_listContext extends ParserRuleContext {
	public user(): UserContext[];
	public user(i: number): UserContext;
	public user(i?: number): UserContext | UserContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserContext);
		} else {
			return this.getRuleContext(i, UserContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CODEOWNERSParser.RULE_user_list; }
	// @Override
	public enterRule(listener: CODEOWNERSParserListener): void {
		if (listener.enterUser_list) {
			listener.enterUser_list(this);
		}
	}
	// @Override
	public exitRule(listener: CODEOWNERSParserListener): void {
		if (listener.exitUser_list) {
			listener.exitUser_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CODEOWNERSParserVisitor<Result>): Result {
		if (visitor.visitUser_list) {
			return visitor.visitUser_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UserContext extends ParserRuleContext {
	public USER(): TerminalNode { return this.getToken(CODEOWNERSParser.USER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CODEOWNERSParser.RULE_user; }
	// @Override
	public enterRule(listener: CODEOWNERSParserListener): void {
		if (listener.enterUser) {
			listener.enterUser(this);
		}
	}
	// @Override
	public exitRule(listener: CODEOWNERSParserListener): void {
		if (listener.exitUser) {
			listener.exitUser(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CODEOWNERSParserVisitor<Result>): Result {
		if (visitor.visitUser) {
			return visitor.visitUser(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlankLineContext extends ParserRuleContext {
	public NEWLINE(): TerminalNode { return this.getToken(CODEOWNERSParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CODEOWNERSParser.RULE_blankLine; }
	// @Override
	public enterRule(listener: CODEOWNERSParserListener): void {
		if (listener.enterBlankLine) {
			listener.enterBlankLine(this);
		}
	}
	// @Override
	public exitRule(listener: CODEOWNERSParserListener): void {
		if (listener.exitBlankLine) {
			listener.exitBlankLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CODEOWNERSParserVisitor<Result>): Result {
		if (visitor.visitBlankLine) {
			return visitor.visitBlankLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


