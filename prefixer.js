var fs = require('fs');

fs.readdirSync('./pages-gestion').forEach(file => {
    let fileContent = fs.readFileSync(`./pages-gestion/${file}`, 'utf8');
    //add "gestion" class to the html element
    fileContent = fileContent.replace('<html', '<html class="gestion"');
    fs.writeFileSync(`./pages-gestion/${file}`, fileContent);

});

