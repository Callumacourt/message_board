const express = require("express");
const app = express();
const path = require('path');
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', messageRouter);

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.send(err || 'Internal server error');
})

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`App running on ${PORT}`);
});