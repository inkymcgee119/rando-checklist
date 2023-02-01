import { LocationTypes, Tags } from "../constants";

export const lakeHylia = {
    name: "Lake Hylia",
    bgColor: 'bg-blue-500',
    hasMQ: false,
    locations: [
        {
            title: "Lab diving (gold scale)",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Underwater bottle",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Fishing",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Fishing",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Rooftop heart piece",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Shoot the sun",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        {
            title: "Bean patch",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },
        {
            title: "Back of the lab",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "On the little island",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Top of the tree",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Crate in the lab",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },
        {
            title: "Under gravestone",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto],
            count: 3
        },

        // rupees and hearts
        {
            title: "Near bottle, shallow",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Near bottle, deep",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child],
            count: 2
        },
        {
            title: "In the lab",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [],
            count: 3
        },

        // beehives
        {
            title: "Under gravestone",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
    ],
    entrances: [
        // overworld
        {
            name: "Hyrule Field",
            type: EntranceType.overworld
        },
        {
            name: "Zora's Domain",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Fishing",
            type: EntranceType.interior
        },
        {
            name: "Lab",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Gravestone",
            type: EntranceType.grotto
        },

        // dungeons
        {
            name: "Water temple",
            type: EntranceType.dungeon
        },

        // owls
        {
            name: "Owl",
            type: EntranceType.owl
        },
    ]
};