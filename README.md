comments
========

`comments` is a javascript comments library for generating comment string rapidly.

```javascript
var comment = var comment = require('../comment');

// Comment module methods
comment.single('hello world'); // result: "// hello world"
comment.block('hello world'); // result: "/* hello world */"

// Prototype module methods
'hello world'.single(); // result: "// hello world"
'hello world'.block(); // result: "/* hello world */"

```
## Install
For [node](http://nodejs.org) with [npm](http://npmjs.org):

```bash
npm install comment
```

And use with `var Color = require("comment")`

## API

### module method

```javascript
comment.single("comment text")
```
Return a single line comment string "//  comment text"

```javascript
comment.block("comment text")
```
Return a normal block comment string "/*  comment text  */"

```javascript
comment.title("comment text")
```
Return a block comment string like comment title "/*****  comment text  *****/"

```javascript
comment.banner("comment text\nhello world")
```
Return a single line comment string "/*\n*    comment text\n*    hello world\n*/"

