import {LocationTypes, Tags} from "../constants";

export const zoraFountain = {
    name: "Zora's Fountain",
    bgColor: 'bg-sky-800',
    hasMQ: false,
    locations: [
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

    ]
};