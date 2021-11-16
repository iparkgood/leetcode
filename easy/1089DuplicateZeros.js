const duplicateZeros = (arr) => {
    let possibleDups = 0;
    let length_ = arr.length - 1;

    for (let left = 0; left <= length_ - possibleDups; left++) {
        if (arr[left] === 0) {
            if (left === length_ - possibleDups) {
                arr[length_] = 0;
                length_ -= 1;
                break;
            }
            possibleDups++;
        }
    }
    let last = length_ - possibleDups;

    for (let i = last; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[i + possibleDups] = 0;
            possibleDups--;
            arr[i + possibleDups] = 0;
        } else {
            arr[i + possibleDups] = arr[i]
        }
    }
};