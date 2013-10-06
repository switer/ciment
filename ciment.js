var comments = {
        'single': '// @',
        'block':  '/* @ */',
        'block_title': '/*****  @  *****/',
        'block_banner': '/*\n@\n*/'
    },
    config = {
        indent: '    ',
        startIndent: '*   '
    }

function wrapComment (content, commentType) {
    return comments[commentType].replace('@', content);
}

/*module export method*/
exports.single = function (content) {
    return wrapComment(content, 'single');
}
exports.block = function (content) {
    return wrapComment(content, 'block');
}
exports.title = function (content) {
    return wrapComment(content, 'block_title');
}
exports.banner = function (content) {
    return wrapComment( config.startIndent + content.split('\n').join(config.startIndent), 'block_banner');
}

/*prototype method*/
String.prototype.single = function () {
    return wrapComment(this, 'single');
}
String.prototype.block = function () {
    return wrapComment(this, 'block');
}
String.prototype.title = function () {
    return wrapComment(this, 'block_title');
}
String.prototype.banner = function () {
    return wrapComment( config.startIndent + this.split('\n').join(config.startIndent), 'block_banner');
}