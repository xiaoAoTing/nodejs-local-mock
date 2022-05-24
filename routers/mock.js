const fs = require('fs');
const path = require('path');
const express = require('express');
const root = __dirname;

const DIRECTORY = {
    INTEGRAL_MOCK: 'integral-mock',
    ASSION_GROUPS: 'assion-groups',
    DRILLMASTER_TRAINING: 'drillmaster-training',
    DATA_PANEL: 'data-panel',
    MEDAL_CAMPERS: 'medal-campers'
}
const CURRENT_DIRECTORY = DIRECTORY['MEDAL_CAMPERS'];

let router = express.Router();

router.get('/:filename', function (req, res) {
    let filePath = path.join('./public/mock/', CURRENT_DIRECTORY, req.params.filename + '.json');
    fs.readFile(filePath, function (err, buf) {
        if (err) {
            res.sendStatus(404);
            return ;
        }
        res.jsonp(buf.toString());
    })
})

module.exports = router;