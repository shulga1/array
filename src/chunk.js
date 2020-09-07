export default (coll, count) => {
  const chunks = [];
  for (let index = 0; index < coll.length; index += count) {
    chunks.push(coll.slice(index, index + count));
  }
  return chunks;
};
