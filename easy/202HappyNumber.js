const isHappy = (n) => {
    const getNext = (n) => {

        let total = 0;

        while (n > 0) {
            const d = n % 10;
            n = Math.floor(n / 10);
            total += d * d;
        }

        return total;
    }

    let hashMap = {};

    while (n !== 1 && !hashMap[n]) {
        hashMap[n] = 1;
        n = getNext(n);
    }

    return n === 1;
};