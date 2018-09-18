//Install express server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const api = require('./api/routes');
const path = require('path');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Serve only the static files form the dist directory
const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];
  app.use('/api', api);
  app.use('/dist/', express.static(__dirname+'/dist/SCUMMap/'))


  app.get('*', function(req,res) {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`dist/SCUMMap/${req.url}`));
    } else {
        res.sendFile(path.resolve('dist/SCUMMap/index.html'));
        }
  });
  


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000,function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});