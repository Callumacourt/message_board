const { v4: uuidv4 } = require('uuid');
const messages = require('../data/messages');

exports.getNew = (req, res) => {
    res.render('form');
};

exports.postNew = (req, res) => {
    const { authorName, message } = req.body;
    messages.push({ text: message, user: authorName, added: new Date(), id: uuidv4() });
    res.redirect("/");
};

exports.getMessage = (req, res) => {
    const { messageId } = req.params;
    if (! messageId) {
        return res.status(404).send('No message id');
    }
    const msg = messages.find(m => m.id === messageId);
    if (!msg) {
        return res.status(404).send('Message not found');
    }
    res.render('messagePage', { msg });
};