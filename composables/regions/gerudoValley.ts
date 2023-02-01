import {LocationTypes, Tags} from "../constants";

export const gerudoValley = {
    name: "Gerudo Valley",
    bgColor: 'bg-rose-400',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Crate heart piece",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Waterfall heart piece",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Chest behind hammer rocks",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        // gold skulltulas
        {
            title: "Bean patch, bottom of canyon",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },
        {
            title: "On waterfall near entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Underside of rock arch",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Behind carpenter's tent",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },

        // scrubs
        {
            title: "Song of storms, behind tent",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto, Tags.adult],
            count: 2
        },

        // cows
        {
            title: "Bottom of canyon",
            isChecked: false,
            type: LocationTypes.cow,
            tags: [Tags.child]
        },

        // rupees and hearts
        {
            title: "Silver rock grotto",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.grotto],
            count: 8
        },

        // beehives
        {
            title: "Song of storms, behind tent",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.adult, Tags.grotto]
        },

        // pots and crates
        {
            title: "Near cow",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.child]
        },
        {
            title: "Crate heart piece",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },
    ],
    entrances: [
        // overworld
        {
            name: "Hyrule Field",
            type: EntranceType.overworld
        },
        {
            name: "Gerudo Fortress",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Carpenter's tent",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Song of storms",
            type: EntranceType.grotto
        },
        {
            name: "Silver rock",
            type: EntranceType.grotto
        },
    ]
};