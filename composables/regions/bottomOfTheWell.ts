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
            title: "Left side, coffin room (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Fall into pit, platform (5)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },

        // pots
        {
            title: "Near entrance (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Left side, basement exit (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Center room, flying pots (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
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
            title: "Basement (12)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
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
            title: "Bombable debris, front (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },
        {
            title: "Left side, coffin room (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },
        {
            title: "Basement, end of tunnel (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },

        // pots
        {
            title: "Center area (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Center, right room (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },


    ]
};