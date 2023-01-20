import {LocationTypes, Tags} from "../constants";

export const iceCavern = {
    name: "Ice Cavern",
    bgColor: 'bg-cyan-600',
    hasMQ: true,
    showMQ: false,
    locations: [
        {
            title: "Back room chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Right room, chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Right room, red ice",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Wolfos chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Sheik's song",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.vanilla]
        },
        {
            title: "Spinning blade room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Right room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Block puzzle room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },


        // MQ
        {
            title: "Right room, red ice",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Back room, chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Back room, switch hidden in floor",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Stafos chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Sheik's song",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.mq]
        },
        {
            title: "Right room, under red ice",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Block pushing puzzle, switch ",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Block pushing puzzle, side cave",
            description: "Use scarecrow song to reach",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
    ]
};