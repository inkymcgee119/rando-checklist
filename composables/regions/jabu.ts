import {LocationTypes, Tags} from "../constants";

export const jabu = {
    name: "Jabu Jabu",
    bgColor: 'bg-blue-600',
    hasMQ: true,
    showMQ: false,
    locations: [
        // items
        {
            title: "Tentacle area, right room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Tentacle area, left room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Tentacle area, back left room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },        
        {
            title: "Barinade",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.vanilla]
        },

        // gold skulltulas
        {
            title: "Bottom path, switch room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Ruto room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla],
            count: 2
        },        
        {
            title: "Room before Barinade",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },

        // scrubs
        {
            title: "Elevator room, dive under wall",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.vanilla]
        },
        
        // crates
        {
            title: "Elevator room, small crate",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.vanilla]
        },
        
        // pots
        {
            title: "Bottom path, switch room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Bottom path, wiggler room",
            description: "This is the rear door in the room you meet Ruto that you normally wouldn't enter.",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 4
        },
        {
            title: "After miniboss",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Barinade",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 6
        },

        // MQ
        // items
        {
            title: "First room, press button",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "First room, right cow",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },        
        {
            title: "Elevator room, bottom",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Elevator room, dive under wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Elevator room, cow switch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Bottom path, switch room chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Bottom path, switch room enemies",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Ruto room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Tentacle area, back right room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Room before Barinade",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Barinade",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.mq]
        },

        // gold skulltulas
        {
            title: "Bottom path, switch room SoT block",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Tentacle area, back left room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Ruto room, room behind tentacle",
            description: "This is the rear door in the room you meet Ruto that you normally wouldn't enter.",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Room before Barinade",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },

        // cows
        {
            title: "Room after miniboss",
            isChecked: false,
            type: LocationTypes.cow,
            tags: [Tags.mq]
        },

        // rupees
        {
            title: "Evevator room, dive under wall",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 3
        },
        {
            title: "Elevator room, between wigglers",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 2
        },

        // pots
        {
            title: "First room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Elevator room, dive under wall",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Bottom path, switch room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Tentacle area, back right",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Barinade",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 6
        },


    ]
};