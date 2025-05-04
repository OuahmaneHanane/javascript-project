function filterArray(arr, conditionFn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (conditionFn(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
