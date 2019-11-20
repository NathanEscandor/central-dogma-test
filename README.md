# central-dogma-test
Will probably be deprecating this repository. I realized that I could keep the tests in the main codon repository by installing mocha/chai as dev dependencies and adding the test/ directory to .npmignore

~~Repository used for testing my 'central-dogma' npm package and keeping track of the package outside of the main repo (in attempt to keep it clean).~~

Todo:
- Update readme with a list of all the functions in nucleotide and codon
- Look into method chaining. Could I make it do something like... nuc.toComplement('ATT').dnaToRna() to save lines of code?
- Should I write tests for tables.js? 
- Throw errors on incorrect input (dd into errors in js)
- Look into typescriptifying the package 
- Make a simple vue app to show the package in action
- Look into typical package structure - should the nucleotide.js and codon.js files be in /lib/ or something?

### Usage
`npm test`
