import {LocationTypes, Tags} from "../constants";

export const ganonCastle = {
    name: "Ganon's Castle",
    bgColor: 'bg-slate-800',
    hasMQ: true,
    showMQ: false,
    locations: [
        // items
        {
            title: "Forest trial",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Water trial",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Shadow trial, left platform",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Shadow trial, rear platform",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Spirit trial, before bars",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Spirit trial, after bars",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Light trial, first room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla],
            count: 7
        },
        {
            title: "Light trial, lullaby room chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },        
        {
            title: "Boss key chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Scrubs behind invisible wall",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.vanilla],
            count: 4
        },
        // rupees and hearts
        {
            title: "Fire trial",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Shadow trial",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 3
        },
        {
            title: "Spirit trial",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },

        // pots
        {
            title: "Forest trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Water trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Shadow trial, like like",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Shadow trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Fire trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Light trial, boulder room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Light trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Spirit trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Before ganondorf",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 14
        },

        // MQ
        // items
        {
            title: "Forest trial, freestanding item",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Forest trial, eye switch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Forest trial, frozen eye switch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Water trial",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Shadow Trial, hookshot chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Shadow Trial, eye switch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Spirit Trial, visible chest before gate",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Spirit Trial, invisible chest after gate",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Spirit Trial, sun switchs",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq],
            count: 4
        },
        {
            title: "Light Trial",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Boss key chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Scrubs behind invisible wall",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.mq],
            count: 5
        },

        // rupees and hearts
        {
            title: "Water trial",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },
        {
            title: "Light trial",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 2
        },

        // pots
        {
            title: "Forest trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Water trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Shadow trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Fire trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Light trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Spirit trial",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Before ganondorf",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 14
        },
        
    ]
};