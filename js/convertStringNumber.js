export const convertStringNumber = (str) => {
    const noSpaceStr = str.replace(/\s+/g, '');
    const num = parseFloat(noSpaceStr);

    /* проверяем число ли это. isNaN возвращает правду, если там NaN, а нам нужно именно число, а не NaN, значит ставим ! */
    /* isFinite проверяет конечное ли число, а не бесконечное */
    if (!isNaN(num) && isFinite(num)) {
        return num;
    } else {
        return false;
    }
};