import {LocationTypes, Tags} from "../constants";

export const deathMountainCrater = {
    name: "Death Mountain Crater",
    bgColor: 'bg-red-900',
    hasMQ: false,
    locations: [
        {
            title: "Crater grotto",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Wall heart piece",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Great fairy",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Heart piece on top of the volcano",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Sheik's song",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.adult]
        },

        {
            title: "Crate near exit at the top of the crater",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
        {
            title: "Bean patch",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },

        {
            title: "Hammer rock near bridge (3)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto]
        },
        {
            title: "Down ladder from upper DMC",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.child]
        },
    ]
};