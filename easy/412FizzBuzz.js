const fizzBuzz = (n) => {
    let answer = [...Array(n)].map((_, idx) => (idx + 1));

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] % 3 === 0 && answer[i] % 5 === 0) answer[i] = "FizzBuzz";
        else if (answer[i] % 3 === 0) answer[i] = "Fizz";
        else if (answer[i] % 5 === 0) answer[i] = "Buzz";
        else answer[i] = answer[i].toString();
    }

    return answer;
};