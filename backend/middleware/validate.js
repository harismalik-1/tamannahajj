const { body, validationResult } = require('express-validator');

const validateContact = [
  body('email').isEmail().normalizeEmail(),
  body('name').trim().notEmpty(),
  body('message').trim().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateContact }; 