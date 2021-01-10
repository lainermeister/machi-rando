export enum Expansions {
    Harbor = 'HARBOR',
    MillionaireRow = 'MILLIONAIRE_ROW',
}

export enum CardType {
    Primary = 'PRIMARY',
    Secondary = 'SECONDARY',
    Restaurant = 'RESTARUANT',
    Establishment = 'ESTABLISHMENT',
}

export const CardColors: {[key: string]: {color: string, bgcolor: string}} = {
    [CardType.Primary]: {color: '#2c387e', bgcolor: '#a3b1ff'},
    [CardType.Secondary]: {color: '#357a38', bgcolor: '#74b2a4'},
    [CardType.Restaurant]: {color: '#aa2e25', bgcolor: '#ffa199'},
    [CardType.Establishment]: {color: '#6d1b7b', bgcolor: '#c29fff'}
}
export interface Card {
    place: string
    sort: number
    dice?: string
    type: CardType
}

export interface StartNewGameFormData {
    [Expansions.Harbor]: boolean
    [Expansions.MillionaireRow]: boolean
    numCards: number
}
export const base: Card[] = [
    { place: 'Wheat Field', sort: 1, type: CardType.Primary },
    { place: 'Ranch', sort: 2, type: CardType.Primary },
    { place: 'Bakery', dice: '2-3', sort: 2, type: CardType.Secondary },
    { place: 'Cafe', sort: 3, type: CardType.Restaurant },
    { place: 'Convenience Store', sort: 4, type: CardType.Secondary },
    { place: 'Forest', sort: 5, type: CardType.Primary },
    {
        place: 'Stadium',
        sort: 6,
        type: CardType.Establishment,
    },
    { place: 'TV Station', sort: 6, type: CardType.Establishment },
    { place: 'Business Center', sort: 6, type: CardType.Establishment },
    { place: 'Cheese Factory', sort: 7, type: CardType.Secondary },
    { place: 'Furniture Factory', sort: 8, type: CardType.Secondary },
    { place: 'Mine', sort: 9, type: CardType.Primary },
    {
        place: 'Family Restaurant',
        sort: 9,
        dice: '9-10',
        type: CardType.Restaurant,
    },
    { place: 'Apple Orchard', sort: 10, type: CardType.Primary },
    {
        place: 'Farmers Market',
        sort: 11,
        dice: '11-12',
        type: CardType.Secondary,
    },
]
export const harbor = [
    { place: 'Sushi Bar', sort: 1, type: CardType.Restaurant },
    { place: 'Flower Garden', sort: 4, type: CardType.Primary },
    { place: 'Flower Shop', sort: 6, type: CardType.Secondary },
    { place: 'Pizza Joint', sort: 7, type: CardType.Restaurant },
    { place: 'Publisher', sort: 7, type: CardType.Establishment },
    { place: 'Mackerel Boat', sort: 8, type: CardType.Primary },
    { place: 'Hamburger Stand', sort: 8, type: CardType.Restaurant },
    { place: 'Tax Office', sort: 8, dice: '8-9', type: CardType.Establishment },
    {
        place: 'Food Warehouse',
        sort: 12,
        dice: '12-13',
        type: CardType.Secondary,
    },
    { place: 'Tuna Boat', sort: 12, dice: '12-14', type: CardType.Primary },
]
export const millionaireRow = [
    { place: 'General Store', sort: 2, type: CardType.Secondary },
    { place: 'Corn Field', sort: 3, dice: '3-4', type: CardType.Primary },
    { place: 'Demolition Company', sort: 4, type: CardType.Secondary },
    { place: 'French Restaurant', sort: 5, type: CardType.Restaurant },
    { place: 'Loan Office', sort: 5, dice: '5-6', type: CardType.Secondary },
    { place: 'Vineyard', sort: 7, type: CardType.Primary },
    { place: 'Renovation Company', sort: 8, type: CardType.Establishment },
    { place: 'Winery', sort: 9, type: CardType.Secondary },
    {
        place: 'Moving Company',
        sort: 9,
        dice: '9-10',
        type: CardType.Secondary,
    },
    { place: 'Tech Startup', sort: 10, type: CardType.Establishment },
    {
        place: 'Exhibit Hall',
        sort: 10,
        type: CardType.Establishment,
    },
    { place: 'Soda Bottling Plant', sort: 11, type: CardType.Secondary },
    { place: 'Park', sort: 11, dice: '11-13', type: CardType.Establishment },
    {
        place: 'Private Club',
        sort: 12,
        dice: '12-14',
        type: CardType.Restaurant,
    },
]

export const STARTING_NUMBER_CARDS = 10
