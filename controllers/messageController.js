const messages = require('../data/messages')

exports.getNew = (req, res) => {
    res.render('form');
}

exports.postNew = (req, res) => {
    const { authorName, message } = req.body;
    messages.push({ text: message, user: authorName, added: new Date() });
    res.redirect("/");
}