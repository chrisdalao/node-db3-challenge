const db = require('../data/db-config.js');
module.exports = {
    find,
    findById,
    findSteps,
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

function findSteps(schemeId) {
    return db('steps as st')
        .join('schemes as sc', 'sc.id', 'st.scheme_id')
        .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
        .where('st.scheme_id', schemeId);
}
