import {LocationTypes, Tags} from "../constants";

export const castleGrounds = {
    name: "Hyrule/Ganon's Castle Grounds",
    bgColor: 'bg-zinc-400',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Talk to Malon",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Great fairy",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Great fairy",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },        
        {
            title: "Zelda's lullaby",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.child]
        },

        // gold skulltulas
        {
            title: "In tree near entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
        {
            title: "Song of storms grotto",
            description: "Inside the gates, near the tree in the corner",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.grotto]
        },
        {
            title: "On the side of pillar",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },

        // pots
        {
            title: "Song of storms grotto (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.grotto]
        },
    ]
};