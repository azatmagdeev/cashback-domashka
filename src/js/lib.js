export function calculateCashBack(buy, buyHigh, buySpecial) {
    const cashback = 0.01;
    const cashbackHigh = 0.05;
    const cashbackSpecial = 0.3;
    return buy * cashback + buyHigh * cashbackHigh + buySpecial * cashbackSpecial;
}