var posthtml = require('posthtml');
var posthtmlPrefixClass = require('posthtml-prefix-class');
var fs = require('fs');

fs.readdirSync('./pages').forEach(file => {

    posthtml()
        .use(posthtmlPrefixClass({
            prefix: 'tw-',

        }))
        .process(
            fs.readFileSync('./pages/' + file)
        )
        .then(function (output) {
            console.log(output.html);
            fs.writeFileSync('./pages/' + file, output.html)
        });
});

