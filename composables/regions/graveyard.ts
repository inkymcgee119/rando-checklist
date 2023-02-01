import {LocationTypes, Tags} from "../constants";

export const graveyard = {
    name: "Graveyard",
    bgColor: 'bg-violet-500',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Flower grave",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Composer grave, torches",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Redead grave (play sun's song)",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Dampe digging game",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Dampe race",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult],
            count: 2
        },
        {
            title: "Crate hp, above bean patch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Composer grave, song",
            isChecked: false,
            type: LocationTypes.song,
            tags: []
        },

        // gold skulltulas
        {
            title: "Back right wall",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Bean patch",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },

        // rupees and hearts
        {
            title: "Dampe race",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [],
            count: 8
        },

        // pots
        {
            title: "Dampe race",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 6
        },
    ],
    entrances: [
        // overworld
        {
            name: "Kakariko Village",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Dampe's hut",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Flower grave",
            type: EntranceType.grotto
        },
        {
            name: "Dampe's grave",
            type: EntranceType.grotto
        },
        {
            name: "Redead",
            type: EntranceType.grotto
        },
        {
            name: "Royal family tomb",
            type: EntranceType.grotto
        },

        // dungeons
        {
            name: "Shadow temple",
            type: EntranceType.dungeon
        },
    ]
};