const express = require('express');
const router = express.Router();

    router.get('*', function(req,res) {
        if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
            res.sendFile(path.resolve(`dist/SCUMMap/${req.url}`));
          } else {
            res.sendFile(path.resolve('dist/SCUMMap/index.html'));
          }
    })



    module.exports = router;

