function pow(x, y) {
    if (y === '0') return 1;
    if (y <= '0') return "введіть натуральне число";
    let result = x;

    for (let i = 1; i < y; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let y = prompt("y?", '');

console.log(pow(x, y));