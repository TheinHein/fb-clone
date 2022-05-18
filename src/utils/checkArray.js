const checkArray = ({ array, prop, check }) => {
  return array.some((item) => item[prop] === check);
};

export default checkArray;
