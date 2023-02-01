import {LocationTypes, Tags} from "../constants";

export const hauntedWasteland = {
    name: "Haunted Wasteland",
    bgColor: 'bg-rose-800',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Light torches",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Carpet salesman (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        // gold skulltulas
        {
            title: "Inside building",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },

        // crates
        {
            title: "Before quicksand",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },
        {
            title: "After quicksand",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [],
            count: 3
        },
        {
            title: "Near colossus",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },

        // pots
        {
            title: "Inside building",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 3
        },
    ],
    entrances: [
        // overworld
        {
            name: "Gerudo Fortress",
            type: EntranceType.overworld
        },
        {
            name: "Desert Colossus",
            type: EntranceType.overworld
        },
    ]
};