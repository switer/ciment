ciment
========

`ciment` is a library for generating comment-String rapidly. Include javascript, CSS and HTML commnets manipulation.

```javascript
// In nodejs
var comment = require('ciment');

// Comment module methods
comment.single('hello world'); // result: "// hello world"
comment.block('hello world'); // result: "/* hello world */"

// Prototype module methods
'hello world'.single(); // result: "// hello world"
'hello world'.block(); // result: "/* hello world */"

'hello world'.block().decomment(); // result: "hello world"
```
## Install

### npm
For [node](http://nodejs.org) with [npm](http://npmjs.org):

```bash
npm install ciment
```
And use with `var ciment = require("ciment")`

### browser
```html
<script src="browser/ciment.script.js"></script>
<script>
  var ciment = window.ciment,
      commentStr = 'Hello world';
    
  commentStr = commentStr.title(); // '/*****  Hello world  *****/'
  commentStr = ciment.decomment(commentStr); // 'Hello world'
</script>
```

__Use with CMD:__
```javascript
define(function (require,exports,module) {
  var ciment = require('ciment.cmd');
  var banner = 'Hello world\nI am ciment'.banner();
});
```


## API

### Base function
```javascript
comment.decomment(content);
```
Remove the first wrapper comment form this string

### Module function

```javascript
comment.single("comment text");
//  comment text
```
Return a single line comment string

```javascript
comment.block("comment text");
/*  comment text  */
```
Return a normal block comment string

```javascript
comment.title("comment text");
/*****  comment text  *****/
```
Return a block comment string like comment title

```javascript
comment.banner("comment text\nhello world");
/**
*    comment text
*    hello world
**/
```
Return a banner block comment string

```javascript
comment.tag("<div>comment text</div>");
```
```html
<!-- <div>comment text</div> -->
```
Return a html tag comment string

### Prototype function

```javascript
"comment text".single();
//  comment text
```

```javascript
"comment text".block();
/*  comment text  */
```

```javascript
"comment text".title();
/*****  comment text  *****/
```

```javascript
"comment text".banner();
/**
*    comment text
*    hello world
**/
```

```javascript
"<div>comment text</div>".tag();
```
```html
<!-- <div>comment text</div> -->
```


