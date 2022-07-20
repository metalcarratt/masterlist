interface FractionType {
    text: string,
    decimal: number
}

const NONE : FractionType = {
    text: '',
    decimal: 0
}

const QUARTER : FractionType = {
    text: '¼',
    decimal: 0.25
}

const HALF : FractionType = {
    text: '½',
    decimal: 0.5
}

const THREE_QUARTERS : FractionType = {
    text: '¾',
    decimal: 0.75
}

const THIRD : FractionType = {
    text: '⅓',
    decimal: 0.33
}

const TWO_THIRDS : FractionType = {
    text: '⅔',
    decimal: 0.66
}

const addFractions = (fraction1 : FractionType, fraction2 : FractionType) => {
    const addedDecimal = fraction1.decimal + fraction2.decimal;
    let wholeNumber = addedDecimal / 1;
    const fraction = addedDecimal % 1;

    let fractionalValue : FractionType;
    if (fraction < QUARTER.decimal) {
        fractionalValue = QUARTER;

    } else if (fraction < THIRD.decimal) {
        fractionalValue = THIRD;

    } else if (fraction < HALF.decimal) {
        fractionalValue = HALF;

    } else if (fraction < TWO_THIRDS.decimal) {
        fractionalValue = TWO_THIRDS;

    } else if (fraction < THREE_QUARTERS.decimal) {
        fractionalValue = THREE_QUARTERS;

    } else {
        fractionalValue = NONE;
        wholeNumber++;
    }

    if (fractionalValue !== NONE) {
        return [wholeNumber, fractionalValue];
    } else {
        return [wholeNumber];
    }
}

const getFractionValue = (value : number) => {
    let wholeNumber = Math.floor(value);
    const fraction = value - wholeNumber;
    console.log(`whole number ${wholeNumber}, fraction ${fraction}`);

    let fractionalValue : FractionType;
    if (fraction === 0) {
        fractionalValue = NONE;

    } else if (fraction <= QUARTER.decimal) {
        fractionalValue = QUARTER;

    } else if (fraction <= THIRD.decimal) {
        fractionalValue = THIRD;

    } else if (fraction <= HALF.decimal) {
        fractionalValue = HALF;

    } else if (fraction <= TWO_THIRDS.decimal) {
        fractionalValue = TWO_THIRDS;

    } else if (fraction <= THREE_QUARTERS.decimal) {
        fractionalValue = THREE_QUARTERS;

    } else {
        fractionalValue = NONE;
        wholeNumber++;
    }

    if (fractionalValue !== NONE) {
        if (wholeNumber == 0) {
            return fractionalValue.text;
        } else {
            return `${wholeNumber}${fractionalValue.text}`;
        }
    } else {
        return wholeNumber;
    }
}

export default {
    QUARTER, HALF, THREE_QUARTERS, THIRD, TWO_THIRDS,
    addFractions, getFractionValue
}