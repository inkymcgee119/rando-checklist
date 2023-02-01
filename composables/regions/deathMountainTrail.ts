import { LocationTypes, Tags } from "../constants";

export const deathMountainTrail = {
    name: "Death Mountain Trail",
    bgColor: 'bg-orange-700',
    hasMQ: false,
    locations: [
        {
            title: "Bombable wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Song of storms grotto",
            description: "Rock circle outside goron city",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Great fairy at the summit",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Above dodongo's cavern",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Biggeron trade quest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        {
            title: "Bombable wall, near entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: []
        },
        {
            title: "Bean patch, dodongo's cavern",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },
        {
            title: "Hammer rock, above DC",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Hammer rock, path to summit",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Grotto heading towards summit",
            isChecked: false,
            type: LocationTypes.cow,
            tags: [Tags.grotto]
        },

        // rupees and hearts
        {
            title: "Under rocks on ramp",
            description: "The rupees are only there as child, but logic can require breaking the rocks as adult then returning as child.",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child],
            count: 2
        },
        {
            title: "Cow grotto",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.grotto],
            count: 11
        },
        {
            title: "Cow grotto",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },

        // beehives
        {
            title: "Song of storms grotto",
            description: "Rock circle outside goron city",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto],
            count: 2
        },
    ],
    entrances: [
        // overworld
        {
            name: "Kakariko Village",
            type: EntranceType.overworld
        },
        {
            name: "Goron City",
            type: EntranceType.overworld
        },
        {
            name: "Death Mountain Crater",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Great fairy",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Song of storms",
            type: EntranceType.grotto
        },
        {
            name: "Cow",
            type: EntranceType.grotto
        },

        // dungeons
        {
            name: "Dodongo's cavern",
            type: EntranceType.dungeon
        },

        // owls
        {
            name: "Owl",
            type: EntranceType.owl
        },
    ]
};