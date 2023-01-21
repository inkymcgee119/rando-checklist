import {LocationTypes, Tags} from "../constants";

export const gerudoValley = {
    name: "Gerudo Valley",
    bgColor: 'bg-rose-400',
    hasMQ: false,
    locations: [
        {
            title: "Crate heart piece",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Waterfall heart piece",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Chest behind hammer rocks",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },


        {
            title: "Bean patch, bottom of canyon",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },
        {
            title: "On waterfall near entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Underside of rock arch",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Behind carpenter's tent",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Song of storms, behind tent",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto, Tags.adult]
        },
        {
            title: "Bottom of canyon",
            isChecked: false,
            type: LocationTypes.cow,
            tags: [Tags.child]
        },

        // rupees and hearts
        {
            title: "Silver rock grotto (8)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.grotto]
        },

        // beehives
        {
            title: "Song of storms, behind tent",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.adult, Tags.grotto]
        },
    ]
};