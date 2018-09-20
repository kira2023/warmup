module.exports = function warmup(temperature) {
  var waterConvGrade = 32;
  var fahrenheitIndex = 9/5;
  return fahrenheitIndex * temperature + waterConvGrade;
};
