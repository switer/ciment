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

And use with `var comment = require("comment")`

## API

### module method

```javascript
comment.single("comment text");
//  comment text
```
Return a single line comment string

```javascript
comment.block("comment text");
/*  comment text  */
```
Return a normal block comment string:

```javascript
comment.title("comment text");
/*****  comment text  *****/
```
Return a block comment string like comment title:

```javascript
comment.banner("comment text\nhello world");
/**
*    comment text
*    hello world
**/
```
Return a banner block comment string:

