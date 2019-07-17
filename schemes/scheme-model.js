const db = require('../data/db-config.js');
module.exports = {
    find,
    findById,
    // findSteps,
    // add,
    // addStep,
    // update,
    // remove
};


function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
        .where({ id })
        .first()
        .then(scheme => {
            if (scheme) {
                return scheme;
            } else {
                return null;
            }
        })
}
