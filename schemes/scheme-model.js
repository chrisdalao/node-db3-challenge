const db = require('../data/db-config.js');
module.exports = {
    find,
    // findById,
    // findSteps,
    // add,
    // addStep,
    // update,
    // remove
};


function find() {
    return db('schemes');
}
