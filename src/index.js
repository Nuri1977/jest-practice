// eslint-disable-next-line consistent-return
exports.stringLength = (string) => {
  if (string.length > 0 && string.length < 10) {
    return string.length;
  }
};

exports.reverseString = (string) => string.split('').reverse().join('');
exports.capitalizeString = (string) => string.charAt(0).toUpperCase() + string.slice(1);
