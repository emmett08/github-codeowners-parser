// Generated from CODEOWNERSParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./CODEOWNERSParser";
import { EntryContext } from "./CODEOWNERSParser";
import { PathEntryContext } from "./CODEOWNERSParser";
import { ExtensionEntryContext } from "./CODEOWNERSParser";
import { CommentEntryContext } from "./CODEOWNERSParser";
import { User_listContext } from "./CODEOWNERSParser";
import { UserContext } from "./CODEOWNERSParser";
import { BlankLineContext } from "./CODEOWNERSParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CODEOWNERSParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CODEOWNERSParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CODEOWNERSParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `CODEOWNERSParser.entry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntry?: (ctx: EntryContext) => Result;

	/**
	 * Visit a parse tree produced by `CODEOWNERSParser.pathEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPathEntry?: (ctx: PathEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `CODEOWNERSParser.extensionEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionEntry?: (ctx: ExtensionEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `CODEOWNERSParser.commentEntry`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommentEntry?: (ctx: CommentEntryContext) => Result;

	/**
	 * Visit a parse tree produced by `CODEOWNERSParser.user_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUser_list?: (ctx: User_listContext) => Result;

	/**
	 * Visit a parse tree produced by `CODEOWNERSParser.user`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUser?: (ctx: UserContext) => Result;

	/**
	 * Visit a parse tree produced by `CODEOWNERSParser.blankLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlankLine?: (ctx: BlankLineContext) => Result;
}

