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

// ...

```

