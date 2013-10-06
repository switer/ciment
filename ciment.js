var comments = {
        'single': '// @',
        'block':  '/* @ */',
        'block_title': '/*****  @  *****/',
        'block_banner': '/**\n@\n**/',
        'tag': '<!-- @ -->'
    },
    config = {
        indent: '    ',
        startIndent: '*   '
    }

function wrapComment (content, commentType) {
    return comments[commentType].replace('@', content);
}

function tag (content) {
    return wrapComment(content, 'tag');
}
function single (content) {
    return wrapComment(content, 'single');
}
function block (content) {
    return wrapComment(content, 'block');
}
function title (content) {
    return wrapComment(content, 'block_title');
}
function banner (content) {
    return wrapComment( config.startIndent + content.split('\n').join('\n' + config.startIndent), 'block_banner');
}

exports.decomment = function (content) {
    // TODO
}

/*module export method*/
exports.single = single;

exports.block = block;

exports.title = title;

exports.banner = banner;

exports.tag = tag;

/*prototype method*/
String.prototype.single = function () {
    return single(this);
}
String.prototype.block = function () {
    return block(this);
}
String.prototype.title = function () {
    return title(this);
}
String.prototype.banner = function () {
    return banner(this);
}
String.prototype.tag = function () {
    return tag(this);
}