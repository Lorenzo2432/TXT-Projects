const express = require('express');

const app = express();

const port = 3000;

app.get('/', function (req, res){res.sendFile('./home.html' , { root: __dirname });
});

app.get('/home', function (req, res){res.sendFile('./home.html' , { root: __dirname });
});

app.get('/contact', function (req, res){res.sendFile('./contact.html' , { root: __dirname });
});

app.get('/about', function (req, res){res.sendFile('./about.html' , { root: __dirname });
});

app.get('/private', function (req, res){res.sendStatus(401);
});

app.listen(port, function(){console.log(`Server running at: ${port}`);
});