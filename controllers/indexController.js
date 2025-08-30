const messages = require('../data/messages');

exports.getHome = (req, res) => {
    res.render('index', { messages });
};

