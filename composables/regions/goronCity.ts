import {LocationTypes, Tags} from "../constants";

export const goronCity = {
    name: "Goron City",
    bgColor: 'bg-amber-800',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Rolling goron",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Darunia's joy",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Spinning pot",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Rock maze, right side (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Rock maze, left side",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Link the goron",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Medigoron (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        // gold skulltulas
        {
            title: "Rock maze, right side crate",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
        {
            title: "Back of pedestal in the center",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },

        // scrubs
        {
            title: "Hookshot in lava room (3)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto]
        },

        // shops
        {
            title: "Shop",
            isChecked: false,
            type: LocationTypes.shop,
            tags: []
        },

        // rupees and hearts
        {
            title: "Spinning pot 🙂 (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Spinning pot 😐 (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Spinning pot 😡 (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },

        // crates
        {
            title: "Rock maze, right side",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },

        // pots
        {
            title: "Staircase (5)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
        {
            title: "Medigoron",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
        {
            title: "Darunia (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
    ],
    entrances: [
        // overworld
        {
            name: "Death Mountain Trail",
            type: EntranceType.overworld
        },
        {
            name: "Lost Woods",
            type: EntranceType.overworld
        },
        {
            name: "Death Mountain Crater",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Shop",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Song of time block",
            type: EntranceType.grotto
        },
    ]
};