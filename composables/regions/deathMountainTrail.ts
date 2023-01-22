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
            title: "Under rocks on ramp (2)",
            description: "The rupees are only there as child, but logic can require breaking the rocks as adult and returning as child.",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Cow grotto (11)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.grotto]
        },
        {
            title: "Cow grotto",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },

        // beehives
        {
            title: "Song of storms grotto (2)",
            description: "Rock circle outside goron city",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
    ]
};