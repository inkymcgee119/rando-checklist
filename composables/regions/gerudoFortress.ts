import {LocationTypes, Tags} from "../constants";

export const gerudoFortress = {
    name: "Gerudo's Fortress",
    bgColor: 'bg-rose-600',
    hasMQ: false,
    locations: [
        {
            title: "Chest on the roof",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Guard 1",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Guard 2",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Guard 3",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        
        {
            title: "Guard 4",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Gerudo membership card",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Horseback archery (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        {
            title: "Top of the fortress",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Target on horse archery range",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult, Tags.night]
        },

    ]
};