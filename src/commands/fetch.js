const {
    db
} = require('../localdb');
const clipboardy = require('clipboardy');

function ExecuteGet(args) {
    if(args.lang) {
        GetByLang(args.name, args.lang);
    } else {
        GetByName(args.name);
    }
}

function GetByName(name) {
    db.find({
        name: name
    }, (err, docs) => {
        if (err) console.log(err);

        if (docs.length > 1) {
            clipboardy.writeSync(docs.pop().snippet);
        } else {
            clipboardy.writeSync(docs[0].snippet);
        }
        console.log('Copied to clipboard');
    });
}

function GetByLang(name, lang) {
    db.find({
        name: name,
        lang: lang
    }, (err, docs) => {
        if (err) console.log(err);

        if (docs.length > 1) {
            clipboardy.writeSync(docs.pop().snippet);
        } else {
            clipboardy.writeSync(docs[0].snippet);
        }
        console.log('Copied to clipboard');
    });
}

module.exports = {
    ExecuteGet
}