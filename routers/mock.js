/**
 * Handling JSONP requests.
 */
const express = require('express');
let router = express.Router();


const DIRECTORY = {
    INTEGRAL_MOCK: 'integral-mock',
    ASSION_GROUPS: 'assion-groups',
    DRILLMASTER_TRAINING: 'drillmaster-training',
    DATA_PANEL: 'data-panel',
    MEDAL_CAMPERS: 'medal-campers',
    CAMP_LETTER_BOX: 'camp-letter-box',
    SHORT_MESSAGE: 'short-message',
    SHORT_MESSAGE_BACK: 'short-message-back',
    VERBAL_TRICK: 'verbal-trick',
    PART_TIME_JOB: 'part-time-job',
};
const CURRENT_DIRECTORY = DIRECTORY['VERBAL_TRICK'];
const path = require('path');
const fs = require('fs');



/**
 * Express set.
 */
const JSONP_CALLBACK_NAME = 'callback';

router.get('/:filename', function (req, res) {
    const basename = req.params.filename;
    const paths = ['./public/mock/', CURRENT_DIRECTORY, basename + '.json'];
    const filePath = path.join.apply(null, paths);

    fs.readFile(filePath, function (err, buf) {
        let json = buf.toString();
        if (err) {
            res.send(`The "${basename}.json" file was not found`)
            res.sendStatus(404);
            return;
        }
        if (json === '') {
            res.send(`The "${basename}.json" is an empty file.`)
            res.sendStatus(404);
            return
        }
        res[req.query[JSONP_CALLBACK_NAME] ? 'jsonp' : 'send'](JSON.parse(json));
    });
});

router.post('/:filename', function (req, res) {
    const basename = req.params.filename;
    const paths = ['./public/mock/', CURRENT_DIRECTORY, basename + '.json'];
    const filePath = path.join.apply(null, paths);

    fs.readFile(filePath, function (err, buf) {
        let json = buf.toString();
        if (err) {
            res.send(`The "${basename}.json" file was not found`)
            res.sendStatus(404);
            return;
        }
        if (json === '') {
            res.send(`The "${basename}.json" is an empty file.`)
            res.sendStatus(404);
            return
        }
        res[req.query[JSONP_CALLBACK_NAME] ? 'jsonp' : 'send'](JSON.parse(json));
    });
});

module.exports = router;