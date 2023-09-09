### Description

`github-codeowners-parser` is a robust npm package tailored for parsing and handling GitHub CODEOWNERS files. Built atop the power of ANTLR4, this package provides functionality to read, parse, and manage the ownership rules defined in a CODEOWNERS file.

### Features

- Parse GitHub CODEOWNERS files with precision.
- Efficiently manage paths and their associated owners.
- Advanced string matching capabilities with metric LCS (Longest Common Substring).

### Installation

You can install the package via npm:

```bash
npm install github-codeowners-parser
```

### Usage

Here's a quick start guide:

1. **Import the parser**

   ```typescript
   import { AddLineVisitor } from 'github-codeowners-parser';
   ```

2. **Instantiate the parser with your input string and the new line you want to add**

   ```typescript
   const input = `
   # Comment
   /path/to/some/file.js @user1
   /path/to/other/file.js @user2
   `;
   
   const newLine = "/path/to/new/file.js @user3";
   
   const visitor = new AddLineVisitor(input, newLine);
   ```

3. **Process the input and retrieve the updated content**

   ```typescript
   const processedContent = visitor.visitFile(/* Pass your parsed FileContext here */);
   console.log(processedContent);
   ```

### API Overview

#### AddLineVisitor

- **Constructor**: 

   Takes in the original content of the CODEOWNERS file and the new line that you want to insert.
   
   ```typescript
   new AddLineVisitor(input: string, newLine: string)
   ```

- **Methods**:

  - `visitFile(ctx: FileContext): string`:
     - Processes the file and inserts the new line at the appropriate location.
     - Returns the updated content of the CODEOWNERS file.

#### Utility Functions:

- `lcsLength(s1: string, s2: string)`: Returns the length of the longest common substring of two strings.

- `metriclcs(s1: string, s2: string)`: Provides a metric measure for LCS, useful for string similarity comparisons.

### Contributions

If you'd like to contribute to this project or report an issue, please open an issue on our GitHub repository.

### License

This package is licensed under the MIT License.

---
