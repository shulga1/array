const compareVersion = (firstNum, secondNum) => {
  const [major1, minor1] = firstNum.split('.');
  const [major2, minor2] = secondNum.split('.');

  const major = Math.sign(major1 - major2);
  const minor = Math.sign(minor1 - minor2);

  return major !== 0 ? major : minor;
};

export default compareVersion;
