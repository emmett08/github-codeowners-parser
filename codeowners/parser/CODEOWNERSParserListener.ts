// Generated from CODEOWNERSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./CODEOWNERSParser";
import { EntryContext } from "./CODEOWNERSParser";
import { PathEntryContext } from "./CODEOWNERSParser";
import { ExtensionEntryContext } from "./CODEOWNERSParser";
import { CommentEntryContext } from "./CODEOWNERSParser";
import { User_listContext } from "./CODEOWNERSParser";
import { UserContext } from "./CODEOWNERSParser";
import { BlankLineContext } from "./CODEOWNERSParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CODEOWNERSParser`.
 */
export interface CODEOWNERSParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CODEOWNERSParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `CODEOWNERSParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `CODEOWNERSParser.entry`.
	 * @param ctx the parse tree
	 */
	enterEntry?: (ctx: EntryContext) => void;
	/**
	 * Exit a parse tree produced by `CODEOWNERSParser.entry`.
	 * @param ctx the parse tree
	 */
	exitEntry?: (ctx: EntryContext) => void;

	/**
	 * Enter a parse tree produced by `CODEOWNERSParser.pathEntry`.
	 * @param ctx the parse tree
	 */
	enterPathEntry?: (ctx: PathEntryContext) => void;
	/**
	 * Exit a parse tree produced by `CODEOWNERSParser.pathEntry`.
	 * @param ctx the parse tree
	 */
	exitPathEntry?: (ctx: PathEntryContext) => void;

	/**
	 * Enter a parse tree produced by `CODEOWNERSParser.extensionEntry`.
	 * @param ctx the parse tree
	 */
	enterExtensionEntry?: (ctx: ExtensionEntryContext) => void;
	/**
	 * Exit a parse tree produced by `CODEOWNERSParser.extensionEntry`.
	 * @param ctx the parse tree
	 */
	exitExtensionEntry?: (ctx: ExtensionEntryContext) => void;

	/**
	 * Enter a parse tree produced by `CODEOWNERSParser.commentEntry`.
	 * @param ctx the parse tree
	 */
	enterCommentEntry?: (ctx: CommentEntryContext) => void;
	/**
	 * Exit a parse tree produced by `CODEOWNERSParser.commentEntry`.
	 * @param ctx the parse tree
	 */
	exitCommentEntry?: (ctx: CommentEntryContext) => void;

	/**
	 * Enter a parse tree produced by `CODEOWNERSParser.user_list`.
	 * @param ctx the parse tree
	 */
	enterUser_list?: (ctx: User_listContext) => void;
	/**
	 * Exit a parse tree produced by `CODEOWNERSParser.user_list`.
	 * @param ctx the parse tree
	 */
	exitUser_list?: (ctx: User_listContext) => void;

	/**
	 * Enter a parse tree produced by `CODEOWNERSParser.user`.
	 * @param ctx the parse tree
	 */
	enterUser?: (ctx: UserContext) => void;
	/**
	 * Exit a parse tree produced by `CODEOWNERSParser.user`.
	 * @param ctx the parse tree
	 */
	exitUser?: (ctx: UserContext) => void;

	/**
	 * Enter a parse tree produced by `CODEOWNERSParser.blankLine`.
	 * @param ctx the parse tree
	 */
	enterBlankLine?: (ctx: BlankLineContext) => void;
	/**
	 * Exit a parse tree produced by `CODEOWNERSParser.blankLine`.
	 * @param ctx the parse tree
	 */
	exitBlankLine?: (ctx: BlankLineContext) => void;
}

