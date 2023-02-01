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
            title: "Membership card (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Horseback archery",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult],
            count: 2
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
            title: "Break room",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [],
            count: 4
        },
        {
            title: "Kitchen",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [],
            count: 5
        },
        {
            title: "One torch jail",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },
        {
            title: "Two torch jail",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [],
            count: 2
        },
        {
            title: "Three torch jail",
            isChecked: false,
            type: LocationTypes.crate,
            tags: []
        },

        // pots
        {
            title: "Break room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 2
        },
        {
            title: "Kitchen",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 2
        },
        {
            title: "One torch jail",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 3
        },
        {
            title: "Two torch jail",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 7
        },
        {
            title: "Four torch jail",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 2
        },
    ],
    entrances: [
        // overworld
        {
            name: "Gerudo Valley",
            type: EntranceType.overworld
        },
        {
            name: "Haunted Wasteland",
            type: EntranceType.overworld
        },

        // grottos
        {
            name: "Song of storms",
            type: EntranceType.grotto
        },

        // dungeons
        {
            name: "Gerudo training grounds",
            type: EntranceType.dungeon
        },
    ]
};