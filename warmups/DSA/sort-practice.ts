const numbers: number[] = [2, 4, 6, 1, 7, 19, 12, 65, 43, 77, 65, 100, 3];
const isDefined = <T>(value: T | undefined): value is T => {
  return value !== undefined;
}

const filterUndefinedValues = <T>(arr: (T | undefined)[]): T[] => {
  return arr.filter(isDefined);
}

const selectionSort = <T>(arr: T[], compare?: (a: T, b: T) => boolean): T[] => {
  compare = compare ?? ((a, b) => a < b);

  for (let i = 0; i < arr.length; ++i) {
    let swapIndex = i;

    for (let j = i + 1; j < arr.length; ++j) {
      if (compare(arr[j], arr[swapIndex]))
        swapIndex = j;
    }

    if (swapIndex !== i) {
      let tmp = arr[i];
      arr[i] = arr[swapIndex];
      arr[swapIndex] = tmp;
    }
  }
  return arr;
}

const mergeSort = <T>(arr: T[], compare?: (a: T, b: T) => boolean): T[] => {
  compare = compare ?? ((a, b) => a < b);

  if (arr.length < 2) return arr;

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  const _merge = (left: T[], right: T[]): T[] => {
    let res = [];

    while (left.length || right.length) {
      if (!left.length) {
        res.push(right.shift());
        continue;
      }

      if (!right.length) {
        res.push(left.shift());
        continue;
      }

      if (compare(left[0], right[0])) {
        res.push(left.shift());
      } else {
        res.push(right.shift());
      }
    }

    return filterUndefinedValues(res.concat(left).concat(right));
  }

  return _merge(mergeSort(left, compare), mergeSort(right, compare));
}

const quickSort = (arr: number[], compare?: (a: number, b: number) => boolean, left?: number, right?: number): number[] => {
  compare = compare ?? ((a, b) => a < b);
  left = left ?? 0;
  right = right ?? arr.length - 1;
  const _partition = (arr: number[], compare: (a: number, b: number) => boolean, left: number, right: number, pivot?: number) => {
    pivot = pivot ?? Math.floor((left + right) /2);

    if (left <= right) {
      left = _advanceLeft(arr, compare, left, pivot);
      right = _advanceRight(arr, compare, left, pivot);
      if (left <= right) {
        if (left < right) _swap(arr, left, right);
        return _partition(arr, compare, left + 1, right - 1, pivot);
      }
    }

    return pivot;
  };

  const _swap = (arr: number[], left: number, right: number) => {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
  };

  const _advanceLeft = (arr: number[], compare: (a: number, b: number) => boolean, left: number, pivot: number): number => {
    if (compare(arr[left], arr[pivot]))
      return _advanceLeft(arr, compare, left + 1, pivot);
    return left;
  };

  const _advanceRight = (arr: number[], compare: (a: number, b: number) => boolean, right: number, pivot: number): number => {
    if (compare(arr[pivot], arr[right]))
      return _advanceRight(arr, compare, right - 1, pivot);
    return right;
  };

  if (arr.length > 1) {
    const pivot = _partition(arr, compare, left, right);

    if (left < pivot - 1) {
      quickSort(arr, compare, left, pivot);
    }

    if ((pivot + 1) < right) {
      quickSort(arr, compare, pivot + 1, right);
    }
  }

  return arr;
}

console.log("selectionSort:")
console.log(selectionSort(numbers));
console.log("---------------------")
console.log("mergeSort:")
console.log(mergeSort(numbers));
console.log("---------------------")
console.log("quickSort:")
console.log(quickSort(numbers));