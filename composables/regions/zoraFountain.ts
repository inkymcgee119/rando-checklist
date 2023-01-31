import { LocationTypes, Tags } from "../constants";

export const zoraFountain = {
    name: "Zora's Fountain",
    bgColor: 'bg-sky-800',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Great fairy",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Ice platform",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Bottom of the lake",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        // gold skulltulas
        {
            title: "Tree near great fairy",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
        {
            title: "On wall to the right of entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Tunnel under silver rock",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },

        // rupees and hearts
        {
            title: "Bottom of lake (18)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.adult]
        },

        // pots
        {
            title: "Near jabu (4)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child]
        },
        {
            title: "Tunnel under silver rock (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.adult]
        },
    ],
    entrances: [
        // overworld
        {
            name: "Zora's domain",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Great fairy",
            type: EntranceType.interior
        },

        // dungeons
        {
            name: "Jabu jabu",
            type: EntranceType.dungeon
        },
        {
            name: "Ice cavern",
            type: EntranceType.dungeon
        },
    ]
};