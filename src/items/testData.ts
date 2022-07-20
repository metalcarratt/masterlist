import Unit from './units';
import Ingredient from './ingredients';
import Fraction from '../numbers/fractions';

const pancakes = [
    {
        ingredient: Ingredient.FLOUR,
        quantity: 1.5,
        unit: Unit.CUPS
    },
    {
        ingredient: Ingredient.BAKING_POWDER,
        quantity: 3.5,
        unit: Unit.TEASPOONS
    },
    {
        ingredient: Ingredient.SALT,
        quantity: 0.25,
        unit: Unit.TEASPOONS
    },
    {
        ingredient: Ingredient.WHITE_SUGAR,
        quantity: 1,
        unit: Unit.TABLESPOONS
    },
    {
        ingredient: Ingredient.MILK,
        quantity: 1.25,
        unit: Unit.CUPS
    },
    {
        ingredient: Ingredient.EGG,
        quantity: 1,
        unit: Unit.WHOLE
    },
    {
        ingredient: Ingredient.BUTTER,
        quantity: 3,
        unit: Unit.TABLESPOONS
    }
];

const frenchToast = [
    {
        ingredient: Ingredient.MILK,
        quantity: 0.5,
        unit: Unit.CUPS
    },
    {
        ingredient: Ingredient.EGG,
        quantity: 3,
        unit: Unit.WHOLE
    },
    {
        ingredient: Ingredient.CINNAMON,
        quantity: 0.5,
        unit: Unit.TEASPOONS
    },
    {
        ingredient: Ingredient.BREAD,
        quantity: 8,
        unit: Unit.SLICE
    },
    {
        ingredient: Ingredient.CANOLA_OIL,
        quantity: 1,
        unit: Unit.TABLESPOONS
    },
    {
        ingredient: Ingredient.BUTTER,
        quantity: 1,
        unit: Unit.CUPS
    }
]

const lists = [
    'pancakes',
    'french toast'
]

export default {
    getLists() {
        return lists
    },
    getPancakesRecipe() {
        return pancakes;
    },
    getListForName(name : string) {
        if (name === 'pancakes') {
            return pancakes;
        } else if (name === 'french toast') {
            return frenchToast;
        }
    }
}