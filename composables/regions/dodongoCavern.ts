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
            title: "Upper right, bombable wall",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.vanilla],
            count: 2
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
            title: "Upper lizafos fight",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Upper right, behind block",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla]
        },

        // pots        
        {
            title: "Lower right hallway",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 4
        },
        {
            title: "Before Lower lizafos",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Lower lizafos",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 4
        },
        {
            title: "Lower right, after lizafos",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 4
        },
        {
            title: "Left side, staircase",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 4
        },

        {
            title: "Sliding blades room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Single eye switch room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Double eye switch room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Before boss",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 3
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
            title: "Poe room in the rear",
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
            title: "Armos army, top of maze",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },

        // scrubs
        {
            title: "Lobby, left side",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.mq],
            count: 2
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
            title: "Upper right, corner of maze",
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
            title: "Lower right, poe room",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 8
        },
        {
            title: "Left side, staircase",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 6
        },
        {
            title: "Upper right, barred room",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 6
        },
        {
            title: "After upper lizafos",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 2
        },

        // pots
        {
            title: "Lower right hallway",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 4
        },
        {
            title: "Lower right, poe room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 4
        },
        {
            title: "Left side, staircase",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 4
        },
        {
            title: "Upper right, pillar",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Upper right, corner",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Before upper lizafos",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Upper lizafos",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 4
        },
        {
            title: "After upper lizafos",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Armos army, before",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Armos army, after",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Poe room in the rear",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Before boss",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },

    ]
};