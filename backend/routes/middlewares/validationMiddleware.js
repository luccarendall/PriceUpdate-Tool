productSchema = require('../../validation/productSchema')

const validationMiddleware = (request, response, next) => {
  const { error } = productSchema.validate(request.body)
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map(i => i.message).join(',');

    console.log("error", message);
    response.status(422).json({ error: message })
  }
}

module.exports = validationMiddleware;