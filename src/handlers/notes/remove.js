const { Note } = require('../../models')

const remove = async (req, res, next) => {
  const { id } = req.params

  try {
    await Note.deleteOne({ _id: id })
    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = remove