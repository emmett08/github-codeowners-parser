import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { metriclcs } from '../substring';
import { FileContext } from './parser/CODEOWNERSParser';
import { CODEOWNERSParserVisitor } from './parser/CODEOWNERSParserVisitor';

// TODO: make configurable
const OWNER_COLUMN = 56;
const SPACE_SEPARATOR = /\s+/;

const alignOwners = (line: string) => {
    const parts = line.split(SPACE_SEPARATOR);
    const path = parts[0];
    const owners = parts.slice(1).join(' ');
    const numberOfSpaces = OWNER_COLUMN - path.length;
    return `${path}${' '.repeat(numberOfSpaces)}${owners}`;
}

export class AddLineVisitor extends AbstractParseTreeVisitor<string> implements CODEOWNERSParserVisitor<string> {
    private newLine: string;
    private content: string;
    private lines: string[];

    constructor(input: string, newLine: string) {
        super();
        this.newLine = newLine;
        this.content = input;
        this.lines = input.split('\n');
    }

    defaultResult(): string {
        return '';
    }

    visitFile(ctx: FileContext): string {
        let insertIndex = this.getInsertIndex();
        if (insertIndex >= 0) {
            this.insertNewLine(insertIndex);
        }

        return this.content;
    }

    private getPathFromLine(line: string): string {
        return line.split(SPACE_SEPARATOR)[0];
    }

    private getInsertIndex(): number {
        let maxLCS = 0;
        let insertIndex = -1;
        const newPath = this.getPathFromLine(this.newLine);

        for (let i = 0; i < this.lines.length; i++) {
            const line = this.lines[i];
            const path = this.getPathFromLine(line);
            const lcs = metriclcs(path, newPath);
            if (lcs > maxLCS) {
                maxLCS = lcs;
                insertIndex = i;
            }
        }
        
        return insertIndex;
    }

    private insertNewLine(index: number): void {
        this.lines.splice(index + 1, 0, alignOwners(this.newLine));
        this.content = this.lines.join('\n');
    }
}
