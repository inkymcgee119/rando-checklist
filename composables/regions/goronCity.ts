import {LocationTypes, Tags} from "../constants";

export const goronCity = {
    name: "Goron City",
    bgColor: 'bg-amber-800',
    hasMQ: false,
    locations: [
        {
            title: "Rolling goron",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Darunia's joy",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Spinning pot",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Rock maze, right side (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Rock maze, left side",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Link the goron",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Medigoron (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        {
            title: "Rock maze, right side crate",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
        {
            title: "Back of pedestal in the center",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },
        {
            title: "Hookshot in lava room (3)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto]
        },
        {
            title: "Shop",
            isChecked: false,
            type: LocationTypes.shop,
            tags: []
        },
    ]
};