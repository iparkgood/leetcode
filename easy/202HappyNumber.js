const isHappy = (n) => {
    let hashMap = {};

    while (n !== 1 && !hashMap[n]) {
        hashMap[n] = 1;

        n = n.toString().split("").reduce((total, num) => {
            return total += Math.pow(+num, 2);
        }, 0)

    }

    return n === 1;
};