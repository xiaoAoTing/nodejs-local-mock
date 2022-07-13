/**
 * Handling JSONP requests.
 */
const express = require('express');
const DIRECTORY = {
    INTEGRAL_MOCK: 'integral-mock',
    ASSION_GROUPS: 'assion-groups',
    DRILLMASTER_TRAINING: 'drillmaster-training',
    DATA_PANEL: 'data-panel',
    MEDAL_CAMPERS: 'medal-campers',
    CAMP_LETTER_BOX: 'camp-letter-box'
};
const CURRENT_DIRECTORY = DIRECTORY['CAMP_LETTER_BOX'];
const path = require('path');
const fs = require('fs');
let router = express.Router();

/**
 * Express set.
 */
const JSONP_CALLBACK_NAME = 'callback';

router.get('/:filename', function (req, res) {
    const basename = req.params.filename;
    const paths = ['./public/mock/', CURRENT_DIRECTORY, basename + '.json'];
    const filePath = path.join.apply(null, paths);

    fs.readFile(filePath, function (err, buf) {
        if (err) {
            res.sendStatus(404);
            return;
        }
        res[req.query[JSONP_CALLBACK_NAME] ? 'jsonp' : 'send'](JSON.parse(buf.toString()));
    });
});

router.post('/:filename', function (req, res) {
    const basename = req.params.filename;
    const paths = ['./public/mock/', CURRENT_DIRECTORY, basename + '.json'];
    const filePath = path.join.apply(null, paths);

    fs.readFile(filePath, function (err, buf) {
        if (err) {
            res.sendStatus(404);
            return;
        }
        res[req.query[JSONP_CALLBACK_NAME] ? 'jsonp' : 'send'](JSON.parse(buf.toString()));
    });
});

module.exports = router;