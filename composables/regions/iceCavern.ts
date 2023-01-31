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
            title: "Back room (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Block pushing puzzle (3)",
            description: "Use song of time to reach",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },

        // pots
        {
            title: "Hallway (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Spinning blade (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Back room, frozen",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Before wolfos (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
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
            title: "Tektite room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Center room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },        
        {
            title: "Back room, floor (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Before stalfos",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },

    ]
};