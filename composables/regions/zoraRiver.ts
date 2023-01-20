import {LocationTypes, Tags} from "../constants";

export const zoraRiver = {
    name: "Zora's River",
    bgColor: 'bg-sky-400',
    hasMQ: false,
    locations: [
        {
            title: "Open grotto",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Lower river heart piece",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Upper river heart piece",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Frogs, song of storms",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Frogs, minigame",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Bean salesman (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },


        {
            title: "Tree near entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
        {
            title: "Upper river, on the ladder",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "On wall near the open grotto",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Upper river, high on the wall",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Song of storms, rock circle (2)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto]
        },

    ]
};