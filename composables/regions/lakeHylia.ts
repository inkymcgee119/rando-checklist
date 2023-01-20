import {LocationTypes, Tags} from "../constants";

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
            title: "Back of the house",
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
            title: "Under gravestone (3)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto]
        },

    ]
};