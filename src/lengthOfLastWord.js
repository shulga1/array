const lengthOfLastWord = (sentence) => {
  const words = sentence.trim().split(' ');
  const lastWord = words[words.length - 1];

  return lastWord.length;
};

export default lengthOfLastWord;
