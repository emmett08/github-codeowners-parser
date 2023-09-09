lexer grammar CODEOWNERSLexer;

channels { COMMENTS_CHANNEL }

PATH            : ( '/' (NAME_PART '/')+ ('**' | NAME_PART | '/')+ ) | ASTERIX
                ;
EXTENSION       : FILETYPE | CODEOWNERS | LEAVERS
                ;
CODEOWNERS      : 'CODEOWNERS'
                ;
LEAVERS         : 'LEAVERS'
                ;
USER            : '@' NAME_PART
                ;
NEWLINE         : '\r'? '\n'
                ;
WHITESPACE      : [, \t] -> skip
                ;
FILETYPE        : '*.' NAME_PART
                ;
ASTERIX         : '*'
                ;
HASH            : '#'
                ;
NAME_PART       : (CHAR)+
                ;
COMMENT         : '#' ~[\r\n]* -> channel(COMMENTS_CHANNEL)
                ;

fragment CHAR   : ('a'..'z' | 'A'..'Z' | '0'..'9' | '-' | '_' | '/' | '.' | '*' )
                ;
