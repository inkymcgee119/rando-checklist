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
            title: "First floor Room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Second floor Room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla],
            count: 2
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
            title: "Water before boss",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 3
        },

        // MQ
        // items
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
            title: "Second floor Room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Basement, switch",
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

        // gold skulltulas
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

        // scrubs
        {
            title: "Scrub near gohma's hole",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.mq]
        },


        // rupees and hearts
        {
            title: "Lobby, on branch",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },
        {
            title: "Lobby, giant deku baba room",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },
        {
            title: "Lobby, first floor chest room",
            description: "Under the rocks next to the gold skulltula",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },
        {
            title: "Second floor room",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },
        {
            title: "Basement, before gohma",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 3
        },

        // crates        
        {
            title: "Lobby",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "Second floor room",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 2
        },

    ]
};