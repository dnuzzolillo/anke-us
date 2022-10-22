var posthtml = require('posthtml');
var posthtmlPrefixClass = require('posthtml-prefix-class');
var fs = require('fs');

fs.readdirSync('./test').forEach(file => {

    posthtml()
        .use(posthtmlPrefixClass({
            prefix: 'tw-',

        }))
        .process(
            fs.readFileSync('./test/' + file)
        )
        .then(function (output) {
            console.log(output.html);
            fs.writeFileSync('./test/' + file, output.html)
        });
});

