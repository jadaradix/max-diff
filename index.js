const maxOfArray = (array) => {
    return Math.max.apply(null, array);
};

const maxDiff = (A) => {
  let splitPoint = 0;
  let maxDiff = 0;
  let currentMaxLeft = null;
  for (let i = 1; i < A.length; i++) {
    if (currentMaxLeft === null || A[i - 1] > currentMaxLeft) {
      currentMaxLeft = A[i - 1];
    }
    const currentMaxRight = maxOfArray(A.slice(i));
    const d = Math.abs(currentMaxLeft - currentMaxRight);
    if (d > maxDiff) {
      maxDiff = d;
      splitPoint = i;
    }
  }
  return splitPoint;
};

module.exports = maxDiff;
