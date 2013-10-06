var comment = require('ciment');

console.log('\n--------------- comment module methods -------------------\n');
console.log(comment.single('hello world'));
console.log(comment.block('hello world'));
console.log(comment.title('hello world'));
console.log(comment.banner('hello world'));
console.log('\n\n------------ comment prototype methods ----------------\n');
console.log('hello world'.single());
console.log('hello world'.block());
console.log('hello world'.title());
console.log('hello world'.banner());