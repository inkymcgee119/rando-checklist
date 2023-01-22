import {LocationTypes, Tags} from "../constants";

export const gerudoFortress = {
    name: "Gerudo's Fortress",
    bgColor: 'bg-rose-600',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Chest on the roof",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Guard 1",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Guard 2",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Guard 3",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        
        {
            title: "Guard 4",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Gerudo membership card",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Horseback archery (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        // gold skulltulas
        {
            title: "Top of the fortress",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Target on horse archery range",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },

        // crates
        {
            title: "Above jail cell",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },
        {
            title: "Break room (4)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },
        {
            title: "Kitchen (5)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },
        {
            title: "One torch jail",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },
        {
            title: "Two torch jail (2)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },
        {
            title: "Three torch jail",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },

        // pots
        {
            title: "Break room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
        {
            title: "Kitchen (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
        {
            title: "One torch jail (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
        {
            title: "Two torch jail (7)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
        {
            title: "Four torch jail (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },

    ]
};