import {LocationTypes, Tags} from "../constants";

export const fireTemple = {
    name: "Fire Temple",
    bgColor: 'bg-orange-800',
    hasMQ: true,
    showMQ: false,
    locations: [
        // items
        {
            title: "Room before volvagia",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },        
        {
            title: "Entrance loop, flame dancer",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Entrance loop, boss key chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Bridge room, goron room on left",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Bridge room, goron room on right",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Boulder maze lower, left side",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Boulder maze lower, right side",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Chest in lava wall room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Boulder maze upper, goron",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Boulder maze upper, down the hole",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Scarecrow chest",
            description: "Use scarecrow's song to hookshot up to elevator, chest is at the end of the path",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Firewall maze, room on right",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Firewall maze, center room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Hammer chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Volvagia",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.vanilla]
        },

        // gold skulltulas
        {
            title: "Entrance loop, back right room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Bridge room, room on left side",
            description: "Use song of time",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Boulder maze, bombable wall",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Above boulder maze (2 tokens)",
            description: "Scarecrow song area",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },

        // rupees and hearts
        {
            title: "Elevator room, on fence (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Room after boulder maze (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Moving fire wall room (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },

        // pots
        {
            title: "Room before volvagia (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Bridge room, left side (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Fire wall maze, left (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Fire wall maze, right (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },


        // MQ
        // items
        {
            title: "Room before volvagia",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Entrance loop, left room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Entrance loop, left room, in cage",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Entrance loop, flame dancer",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Bridge room, left room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Bridge room, right room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Boulder maze lower, crate",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Boulder maze lower, bombable wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Boulder maze upper, crate",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Boulder maze upper, down the hole",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Upper flame dancer, under elevator",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Former hammer chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Volvagia",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.mq]
        },

        // gold skulltulas
        {
            title: "Bridge room, left side room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Former scarecrow song area",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Firewall maze, room on right",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Firewall maze, center room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Path down from hammer room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        
        // rupees
        {
            title: "Elevator room, on fence (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },

        // crates
        {
            title: "Before volvagia, left (2)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "Before volvagia, right (4)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "Lizafos maze, lower (3)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "Lizafos maze, upper (3)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },        
        {
            title: "Lizafos maze, down hole (6)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },        
        {
            title: "Former lava wall chase (5)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },

        // pots        
        {
            title: "Lobby (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Before volvagia, right (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Bridge, left (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Bridge, right",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Narrow path room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Former lava wall chase (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Flame maze, upper right (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Flame maze, right (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Flame maze, left",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Iron knuckle room (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Boss key chest",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },

    ]
};