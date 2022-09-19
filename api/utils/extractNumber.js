
const extractNumber = (price) => {
    const newDecimals = price.toString().split('.');

    if (newDecimals.length > 1) return { int: +newDecimals[0], decimals: +newDecimals[1] };
    return { int: +newDecimals[0], decimals: 0 };
}

export default extractNumber;