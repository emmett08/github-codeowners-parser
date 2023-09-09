import { CharStreams, CommonTokenStream } from "antlr4ts";
import { AddLineVisitor } from "./AddLineVisitor";
import { CODEOWNERSLexer } from "./parser/CODEOWNERSLexer";
import { CODEOWNERSParser } from "./parser/CODEOWNERSParser";

export const addLineToContent = (input: string, newLine: string): string => {
    const chars = CharStreams.fromString(input);
    const lexer = new CODEOWNERSLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new CODEOWNERSParser(tokens);
    const tree = parser.file();
    const visitor = new AddLineVisitor(input, newLine);
    
    return visitor.visit(tree);
}
