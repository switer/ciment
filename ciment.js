var comments = {
        'single': '// @',
        'block':  '/* @ */',
        'block_title': '/*****  @  *****/',
        'block_banner': '/**\n@\n**/',
        'tag': '<!-- @ -->'
    },
    commentRegex = {
        'single': [/^\s*\/\/\s*/, ''],
        'block': [/^\s*\/\*{1}\s+/, /\s+\*{1}\/\s*$/],
        'block_title': [/^\s*\/\*{5}\s+/, /\s+\*{5}\/\s*$/],
        'block_banner': [/^\s*\/\*{2}\s+/, /\s+\*{2}\/\s*$/],
        'tag': [/^\s*\<\!\-{2}\s+/, /\s+\-{2}\>\s*$/]
    },
    config = {
        indent: '    ',
        startIndent: '*   '
    }
/* private function */
function _typeof (commentStr) {
    for (var key in commentRegex) {
        var regex = commentRegex[key][0];
        if (regex.test(commentStr)) return key;
    }
    return '';
}

function wrapComment (content, commentType) {
    return comments[commentType].replace('@', content);
}
function decomment (content) {
    var cmtype = _typeof(content),
        cmregs = commentRegex;
    if (cmtype !== '') {
        return content.replace(cmregs[cmtype][0], '').replace(cmregs[cmtype][1],'');
    }
    return content;
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

exports.decomment = decomment

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
String.prototype.decomment = function () {
    return decomment(this);
}