exports.getHome((req, res) => {
    
    const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
    ];

    res.render('index'), { messages };
})

