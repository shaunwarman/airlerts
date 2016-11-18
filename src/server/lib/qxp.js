const Assert = require('assert');
const Mock = require('../../../mock.json');
const QS = require('querystring');
const Wreck = require('wreck');

const API_KEY = process.env.API_KEY;
const QPX_URL = 'https://www.googleapis.com/qpxExpress/v1/trips/search';

/**
 * Format QPX url
 * @param url the url
 * @returns {*}
 */
function formatUrl(from, to, date) {
    Assert(from, 'Origin is not defined!');
    Assert(to, 'Destination is not defined!');
    Assert(date, 'Date is not defined!');

    const query = {
        key: API_KEY
    };

    return `${QPX_URL}?${QS.stringify(query)}`;
}

/**
 * Request QPX API
 * @param url the url
 * @returns {Promise}
 */
function request(url) {
    return new Promise((resolve, reject) => {
        Wreck.request('POST', url, { payload: Mock }, (err, response) => {
            if (err) return reject(err);

            Wreck.read(response, {}, (err, payload) => {
                if (err) return reject(err);

                resolve(payload.toString('utf8'));
            });
        });
    });
}

module.exports = {
    formatUrl,
    request
};
