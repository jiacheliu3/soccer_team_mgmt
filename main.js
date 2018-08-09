/* ----------------------------------------------------------------------

    Dependencies

------------------------------------------------------------------------- */
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ejs=require('ejs');

// Port listeners
const fs = require('fs');
const http = require('http');
const https = require('https');



var app = module.exports = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('views', __dirname + '/views');
app.engine('html', ejs.renderFile);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var httpServer = http.createServer(app);

httpServer.listen(8080);

/* ----------------------------------------------------
    
    Controllers

------------------------------------------------------- */
// entrance
app.get('/', function(req, res, next){
	return res.render('index.html');
});

app.get('/data', function(req, res, next){
	// read json
	var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'));
	console.log(obj);
	// return
	return res.end(JSON.stringify(obj));
})