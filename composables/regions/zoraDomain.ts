import {LocationTypes, Tags} from "../constants";

export const zoraDomain = {
    name: "Zora's Domain",
    bgColor: 'bg-sky-600',
    hasMQ: false,
    locations: [
        {
            title: "Diving Minigame",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Light torches",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Melt king zora",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Top of the waterfall",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },
        {
            title: "Shop",
            isChecked: false,
            type: LocationTypes.shop,
            tags: []
        },


        // beehives
        {
            title: "In front of king zora (2)",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.child]
        },
        {
            title: "Behind king zora",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.child]
        },
    ]
};