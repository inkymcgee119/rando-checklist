import {LocationTypes, Tags} from "../constants";

export const bottomOfTheWell = {
    name: "Bottom of the Well",
    bgColor: 'bg-fuchsia-500',
    hasMQ: true,
    showMQ: false,
    locations: [
        // items
        {
            title: "Front left invisible wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Right side invisible wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Left side invisible wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Center room, behind skulltula",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Left side, Coffin Room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Bombable debris, front",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Bombable debris, back left",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Basement, behind rocks",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Drained water, left side",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Drained water, front",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Back right room, keese",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Back right room, like like",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Invisible chest in deadhand room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Deadhand",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },

        // gold skulltulas
        {
            title: "Center, left key door",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Center, right key door",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Back right room, like like",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },

        
        // rupees and hearts
        {
            title: "Left side, coffin room",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Fall into pit, platform",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 5
        },

        // pots
        {
            title: "Near entrance",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Left side, basement exit",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 3
        },
        {
            title: "Center room, flying pots",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 3
        },
        {
            title: "Near lullaby, after draining",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Back right room, fire keese",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Basement",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 12
        },


        // MQ
        // items
        {
            title: "Center area chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Center, right room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Basement chest",
            description: "Switch in back right room under bombable debris",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Deadhand room, bombable debris",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Deadhand",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },

        // gold skulltulas
        {
            title: "Left side, coffin room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Basement, end of the tunnel",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Center, left room, under gravestone",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },

        // rupees
        {
            title: "Bombable debris, front",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Left side, coffin room",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Basement, end of tunnel",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 3
        },

        // pots
        {
            title: "Center area",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 3
        },
        {
            title: "Center, right room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 3
        },


    ]
};