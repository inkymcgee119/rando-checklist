import {LocationTypes, Tags} from "../constants";

export const hauntedWasteland = {
    name: "Haunted Wasteland",
    bgColor: 'bg-rose-800',
    hasMQ: false,
    locations: [
        {
            title: "Light torches",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Carpet salesman (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Inside building",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult]
        },

    ]
};