import {LocationTypes, Tags} from "../constants";

export const deathMountainCrater = {
    name: "Death Mountain Crater",
    bgColor: 'bg-red-900',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Upper grotto",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Wall heart piece",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Great fairy",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Heart piece on top of the volcano",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Sheik's song",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.adult]
        },

        // gold skulltulas
        {
            title: "Crate near exit at the top of the crater",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
        {
            title: "Bean patch",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },

        // scrubs
        {
            title: "Hammer rock near bridge",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto],
            count: 3
        },
        {
            title: "Down ladder from upper DMC",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.child]
        },

        // rupees and hearts
        {
            title: "Scarecrow song platform",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.adult],
            count: 7
        },
        {
            title: "Lower platform",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child],
            count: 8
        },

        // beehives
        {
            title: "Upper grotto",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto],
            count: 2
        },
        {
            title: "Hammer rock near bridge",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },

        // pots
        {
            title: "Near goron city entrance",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.adult],
            count: 4
        },
    ],
    entrances: [
        // overworld
        {
            name: "Goron City",
            type: EntranceType.overworld
        },
        {
            name: "Death Mountain Trail",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Great fairy",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Hammer rock",
            type: EntranceType.grotto
        },
        {
            name: "Upper rock",
            type: EntranceType.grotto
        },

        // dungeons
        {
            name: "Fire temple",
            type: EntranceType.dungeon
        },
    ]
};