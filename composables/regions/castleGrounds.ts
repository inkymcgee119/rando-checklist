import {LocationTypes, Tags} from "../constants";

export const castleGrounds = {
    name: "Hyrule/Ganon's Castle Grounds",
    bgColor: 'bg-zinc-400',
    hasMQ: false,
    locations: [
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
    ]
};