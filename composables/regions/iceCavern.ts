import {LocationTypes, Tags} from "../constants";

export const iceCavern = {
    name: "Ice Cavern",
    bgColor: 'bg-cyan-600',
    hasMQ: true,
    showMQ: false,
    locations: [
        // items
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

        // gold skulltulas
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

        // rupees and hearts
        {
            title: "Red ice near entrance",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Back room",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 3
        },
        {
            title: "Block pushing puzzle",
            description: "Use song of time to reach",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 3
        },

        // pots
        {
            title: "Hallway",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Spinning blade",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 4
        },
        {
            title: "Back room, frozen",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Before wolfos",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },

        // MQ
        // items
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

        // gold skulltulas
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

        // pots
        {
            title: "First hallway",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Tektite room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Center room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },        
        {
            title: "Back room, floor",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Before stalfos",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },

    ]
};