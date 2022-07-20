interface UnitType {
    singular : string,
    plural : string,
    short ?: string
}

const CUPS : UnitType = {
    singular: 'cup',
    plural: 'cups'
}

const TEASPOONS : UnitType = {
    singular: 'teaspoon',
    plural: 'teaspoons',
    short: 'tsp',
}

const TABLESPOONS : UnitType = {
    singular: 'tablespoon',
    plural: 'tablespoons',
    short: 'Tbsp'
}

const WHOLE : UnitType = {
    singular: '',
    plural: ''
}

const SLICE : UnitType = {
    singular: 'slice',
    plural: 'slices'
}

export default {
    CUPS, TEASPOONS, TABLESPOONS, WHOLE, SLICE
}