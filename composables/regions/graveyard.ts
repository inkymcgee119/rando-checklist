import {LocationTypes, Tags} from "../constants";

export const graveyard = {
    name: "Graveyard",
    bgColor: 'bg-violet-500',
    hasMQ: false,
    locations: [
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
            title: "Dampe race (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
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
            title: "Dampe race (8)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: []
        },
    ]
};