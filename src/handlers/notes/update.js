const { Note } = require('../../models')

const update = async (req, res, next) => {
  const { id } = req.params
  const { body } = req

  try {
    const note = await Note.findByIdAndUpdate({ _id: id }, { ...body }, { lean: true, new: true })
    res.json(note)
  } catch (error) {
    next(error)
  }
}

module.exports = update