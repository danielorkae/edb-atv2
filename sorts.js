const bubbleSort = (array) => {
  let cache = null;

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        cache = array[i];
        array[i] = array[j];
        array[j] = cache;
      }
    }
  }

  return array;
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let sorted = [];
  let topLeft = 0;
  let topRight = 0;
  let middle = Math.ceil(array.length / 2);

  const left = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  for (let i = 0; i < array.length; i++) {
    if (topLeft >= left.length) {
      sorted[i] = right[topRight++];
      continue;
    }

    if (topRight >= right.length) {
      sorted[i] = left[topLeft++];
      continue;
    }

    if (left[topLeft] < right[topRight]) {
      sorted[i] = left[topLeft++];
      continue;
    }

    sorted[i] = right[topRight++];
  }

  return sorted;
};

module.exports = {
  bubbleSort,
  mergeSort
};
