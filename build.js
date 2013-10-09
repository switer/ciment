var fs = require('fs'),
    ciment = fs.readFileSync('ciment.js', 'UTF-8'),
    ciment_script = fs.readFileSync('./wrapper/ciment.script.js', 'UTF-8'),
    ciment_cmd = fs.readFileSync('./wrapper/ciment.cmd.js', 'UTF-8'),
    replaceRegex = /\/\*\[ciment\]\*\//;

/*Build to browser script file*/
var scriptCtn = ciment_script.replace(replaceRegex, ciment),
    cmdCtn = ciment_cmd.replace(replaceRegex, ciment);

/*Write file*/
fs.writeFileSync('./browser/ciment.script.js', scriptCtn, 'UTF-8');
fs.writeFileSync('./browser/ciment.cmd.js', cmdCtn, 'UTF-8');