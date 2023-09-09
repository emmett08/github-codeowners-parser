#!/bin/bash

set -e

# npm test

npm run co:build

# npm token create --read-only

npm publish

npm install -g github-codeowners-parser
