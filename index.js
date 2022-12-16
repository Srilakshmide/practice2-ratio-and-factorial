const ratioOfNums = require("../ratio/index");
const factorialOfNum = require("../factorial/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfNums(num1, num2);
  const factorial = factorialOfNum(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
