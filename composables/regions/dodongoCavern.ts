import { LocationTypes, Tags } from "../constants";

export const dodongoCavern = {
    name: "Dodongo's Cavern",
    bgColor: 'bg-red-800',
    hasMQ: true,
    showMQ: false,
    locations: [
        // items
        {
            title: "Lobby, left side bombable wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Lower left, bombable wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Upper right, bomb flower platform",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Upper right, bomb bag chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Upper lobby, across the bridge",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Room before King Dodongo",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "King Dodongo",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.vanilla]
        },

        // gold skulltulas
        {
            title: "Lower right, scarecrow song",
            description: "This can also be gotten by dragging a statue all way from the other end of the hallway",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla, Tags.adult]
        },
        {
            title: "Lower right, bombable wall",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Left side, above the stairs",
            description: "You can reach this by activating the elevator shortcut and re-entering the dungeon to reset the stairs",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Left side, on vines",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Inside the dodongo face, back room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },

        // scrubs
        {
            title: "Lobby, left side",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.vanilla]
        },
        {
            title: "Lower right, after lizafos",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.vanilla]
        },
        {
            title: "Upper right, bombable wall (2)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.vanilla]
        },


        // rupees and hearts
        {
            title: "Lower lizafos fight",
            description: "Hidden behind the left side of the lavafall",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Upper lizafos fight (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },
        {
            title: "Upper right, behind block",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },

        // pots        
        {
            title: "Lower right hallway (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Before Lower lizafos (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Lower lizafos (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Lower right, after lizafos (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Left side, staircase (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },

        {
            title: "Sliding blades room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Single eye switch room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Double eye switch room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Before boss (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },


        // MQ
        // items
        {
            title: "Lobby, right side bombable wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Lower right path, after poe room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Upper left side, dodongo room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Upper right side, barred room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Upper right side, bomb bag room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Inside dodongo head, back room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Room before King Dodongo",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "King Dodongo",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.mq]
        },

        // gold skulltulas
        {
            title: "Lower right path, room after lizafos",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Lower left side, song of time room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Upper right side, lizafos fight",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Upper right side, barred room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Inside dodongo head, top of maze",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },

        // scrubs
        {
            title: "Lobby, left side (2)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.mq]
        },
        {
            title: "Lower right, before lizafos",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.mq]
        },
        {
            title: "Left side, above stairs",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.mq]
        },

        // rupees
        {
            title: "Torch puzzle",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },
        {
            title: "Lower lizafos fight",
            description: "Hidden behind the left side of the lavafall",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },

        // crates
        {
            title: "Lower right, poe room (8)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "Left side, staircase (6)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "Upper right, back room (6)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "After upper lizafos (2)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },

        // pots
        {
            title: "Lower right hallway (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Lower right, poe room (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Left side, staircase (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Torch puzzle, pillar",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Torch puzzle, corner",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Before upper lizafos (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Upper lizafos (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "After upper lizafos (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Armos army (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Armos army, upper",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Back poe room (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Before boss (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },

    ]
};