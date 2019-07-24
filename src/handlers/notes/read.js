const { Note } = require('../../models')

const read = async (req, res, next) => {
  try {
    const notes = await Note.find({})
    res.json(notes)
  } catch (error) {
    next(error)
  }
}

module.exports = read