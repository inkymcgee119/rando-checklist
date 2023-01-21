import {LocationTypes, Tags} from "../constants";

export const dekuTree = {
    name: "Deku Tree",
    bgColor: 'bg-emerald-600',
    hasMQ: true,
    showMQ: false,
    locations: [
        {
            title: "Lobby",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "First floor Room (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Second floor Room (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Basement",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        
        {
            title: "Queen Gohma",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.vanilla]
        },
        {
            title: "Compass Room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Basement on vines",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Basement on the bars",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Basement, back room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },


        // MQ
        {
            title: "Lobby",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "First floor Room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Second floor Room (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Basement",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Water platform room chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Water platform room, song of time",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Queen Gohma",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.mq]
        },
        {
            title: "Under crate in lobby",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "First floor room, behind rock",
            description: "Use song of time",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Basement, grave room, ceiling",
            description: "Use song of time",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Basement, back room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },

        
        {
            title: "Scrub near gohma's hole",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.mq]
        },


        // rupees and hearts
        {
            title: "Walk the plank",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Leap down",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Water before boss (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },

    ]
};