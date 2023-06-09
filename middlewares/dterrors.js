const ValidationError = require('./ValidationError');
const WrongEmailError = require('./WrongEmailError');

// определение типа ошибки
function determineError(err, next) {
  console.log('dterr:', err);

  if (err instanceof ValidationError) {
    return next(new ValidationError());
  }
  if (err.name === 'CastError') {
    return next(new ValidationError('cast'));
  }
  if (err.code === 11000) {
    return next(new WrongEmailError());
  }
  return next(err);
}

module.exports = determineError;
