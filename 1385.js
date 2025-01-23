function findTheDistanceValue(arr1, arr2, d) {
    let distanceValue = 0;

    for (let num1 of arr1) {
        let isFar = true;
        for (let num2 of arr2) {
            if (Math.abs(num1 - num2) <= d) {
                isFar = false;
                break;
            }
        }
        if (isFar) {
            distanceValue++;
        }
    }

    return distanceValue;
}

// Example usage
const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;

const result = findTheDistanceValue(arr1, arr2, d);
console.log("Distance Value:", result);
