const validateMiddleware = (schema) => {
  return (req, res, next) => {

    const request = {
      body: req.body,
      params: req.params
    }

    const result = schema.validate(request, { stripUnknown: true })
  
    const { error } = result

    next(error)
  }
}

module.exports = validateMiddleware
