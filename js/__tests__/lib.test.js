import {calculateCashBack} from "../lib.js";

test ('the function count correctly',() => {
    const buy = 1000;
    const buyHigh = 1000;
    const buySpecial = 1000;

    const expected = 360;
    const result = calculateCashBack(buy,buyHigh,buySpecial);

    expect(result).toBe(expected);
});

