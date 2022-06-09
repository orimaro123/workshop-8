const express = require('express');
const {validateSchema, jediSchema} = require("../middleware/validation");
const {
    createJedi,
    getAll,
    getJedi,
    replaceJedi,
    deleteJedi,
} = require('../controllers/jediController');

const jediRouter = express.Router();

jediRouter.get('/', getAll);
jediRouter.get('/:id', getJedi);
jediRouter.post('/', validateSchema(jediSchema), createJedi);
jediRouter.put('/:id', replaceJedi);
jediRouter.delete('/:id', deleteJedi);

module.exports = jediRouter;