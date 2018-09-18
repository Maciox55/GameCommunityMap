//Install express server
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const api = require('./api/routes');
const config = require('./config');
mongoose.connect('mongodb://admin:'+config.dbCreds+'@ds261302.mlab.com:61302/scumrp').then(()=> console.log('MongoDB connected...')).catch(err => console.log(err));;

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





// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3000,function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});