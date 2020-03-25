var messages = require('../mocks/messages1.json');
var messages2 = require('../mocks/messages2.json');
var messages3 = require('../mocks/messages3.json');
var messages4 = require('../mocks/messages4.json');

// and so on

module.exports = function () {
    return {
        messages: messages,
        messages2: messages2,
        messages3: messages3,
        messages4: messages4
    }
}