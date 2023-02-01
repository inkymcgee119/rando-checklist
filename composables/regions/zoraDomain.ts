import {LocationTypes, Tags} from "../constants";

export const zoraDomain = {
    name: "Zora's Domain",
    bgColor: 'bg-sky-600',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Diving Minigame",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Light torches",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Melt king zora",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        // gold skulltulas
        {
            title: "Top of the waterfall",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },

        // shops
        {
            title: "Shop",
            isChecked: false,
            type: LocationTypes.shop,
            tags: []
        },


        // beehives
        {
            title: "In front of king zora",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.child],
            count: 2
        },
        {
            title: "Behind king zora",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.child]
        },

        // pots
        {
            title: "Pots",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 5
        },
    ],
    entrances: [
        // overworld
        {
            name: "Zora River",
            type: EntranceType.overworld
        },
        {
            name: "Lake Hylia",
            type: EntranceType.overworld
        },
        {
            name: "Zora's Fountain",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Shop",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Song of storms",
            type: EntranceType.grotto
        },
    ]
};