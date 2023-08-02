const session = require('express-session');

const CreateSession = session({

secret:'teste',
resave: false,
saveUninitialized: false,

});

module.exports = CreateSession;
