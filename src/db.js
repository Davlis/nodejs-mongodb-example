const mongoose = require('mongoose');

const init = async () => {
  let db
  try {
    db = await mongoose.connect('mongodb://localhost/notes',  { useNewUrlParser: true })
    console.log('Connected')
  } catch (error) {
    console.log('Error while connecting to database', error)
    throw error
  }

  return db
}

module.exports = {
  init
}
