parser grammar CODEOWNERSParser;

options {
    tokenVocab=CODEOWNERSLexer;
}

file            : (entry NEWLINE?)+ EOF;

entry           : pathEntry
                | extensionEntry
                | commentEntry
                | blankLine
                ;

pathEntry       : PATH user_list ;

extensionEntry  : EXTENSION user_list ;

commentEntry    : COMMENT ;

user_list       : user+ ;

user            : USER ;

blankLine       : NEWLINE ;
