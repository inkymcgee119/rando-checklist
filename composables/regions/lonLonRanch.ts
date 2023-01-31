import {LocationTypes, Tags} from "../constants";

export const lonLonRanch = {
    name: "Lon Lon Ranch",
    bgColor: 'bg-amber-400',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Silo, rear of the ranch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Chicken minigame",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Malon's song",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.child]
        },

        // gold skulltulas
        {
            title: "Tree near entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
        {
            title: "Backside of the fenced in area",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "On building near the entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Rear wall",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },

        // scrubs
        {
            title: "Open grotto in the rear (3)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto]
        },

        // cows
        {
            title: "In stable (2)",
            isChecked: false,
            type: LocationTypes.cow,
            tags: []
        },
        {
            title: "Rear silo (2)",
            isChecked: false,
            type: LocationTypes.cow,
            tags: []
        },

        // beehives
        {
            title: "Open grotto in the rear",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },

        // crates
        {
            title: "Near tree",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.child]
        },

        // pots
        {
            title: "Near entrance (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child]
        },
        {
            title: "In fenced area (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child]
        },
        {
            title: "Talon's house (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
    ],
    entrances: [
        // overworld
        {
            name: "Hyrule Field",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Talon's house",
            type: EntranceType.interior
        },
        {
            name: "Stable",
            type: EntranceType.interior
        },
        {
            name: "Silo",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Open",
            type: EntranceType.grotto
        },
    ]
};