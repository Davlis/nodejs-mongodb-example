const express = require('express');
const router = express.Router();

const { NoteValidator } = require('../validators')
const createValidateMiddleware = require('../middlewares/validate')

const { create, read, remove, update } = require('../handlers/notes')

router.post('/', createValidateMiddleware(NoteValidator.create), create)
router.get('/', createValidateMiddleware(NoteValidator.read), read)
router.put('/:id', createValidateMiddleware(NoteValidator.update), update)
router.delete('/:id', createValidateMiddleware(NoteValidator.remove), remove)

module.exports = router