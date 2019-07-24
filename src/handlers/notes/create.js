const { Note } = require('../../models')

const create = async (req, res, next) => {
  const { body } = req

  try {
    const note = await Note.create({ ...body })
    res.json(note)
  } catch (error) {
    next(error)
  }
}

module.exports = create