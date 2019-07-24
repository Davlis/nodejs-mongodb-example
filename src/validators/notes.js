const Joi = require('joi')

const NoteValidator = {
  create: Joi.object().keys({
    body: Joi.object().keys({
      content: Joi.string().required()
    })
  }),
  read: Joi.object(),
  remove: Joi.object().keys({
    params: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
  update: Joi.object().keys({
    body: Joi.object().keys({
      content: Joi.string().required()
    }),
    params: Joi.object().keys({
      id: Joi.string().required()
    })
  }),
}

module.exports = NoteValidator
