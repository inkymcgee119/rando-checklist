import {LocationTypes, Tags} from "../constants";

export const desertColossus = {
    name: "Desert Colossus",
    bgColor: 'bg-orange-400',
    hasMQ: false,
    locations: [        
        {
            title: "Great fairy",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Heart piece on archway",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Sheik's song",
            isChecked: false,
            type: LocationTypes.song,
            tags: []
        },

        {
            title: "Bean patch",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },
        {
            title: "Palm tree by dried pond",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },
        {
            title: "Top of the sand dune",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },

        {
            title: "Under silver rock",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto],
            count: 2
        },

        // beehives
        {
            title: "Silver rock grotto",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
    ],
    entrances: [
        // overworld
        {
            name: "Haunted Wasteland",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Great fairy",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Silver rock",
            type: EntranceType.grotto
        },

        // dungeons
        {
            name: "Spirit temple",
            type: EntranceType.dungeon
        },
    ]
};