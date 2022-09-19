import signs from "./signs.js";

export const validateSign = (sign) => {

    if (signs.some(item => sign.name === item.name && sign.lastname === item.lastname)) return true
    throw new Error("401");
};

export default validateSign;