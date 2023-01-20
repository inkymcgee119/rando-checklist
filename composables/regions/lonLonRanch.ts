import {LocationTypes, Tags} from "../constants";

export const lonLonRanch = {
    name: "Lon Lon Ranch",
    bgColor: 'bg-amber-400',
    hasMQ: false,
    locations: [
        {
            title: "Silo, rear of the ranch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Chicken minigame",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Malon's song",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.child]
        },
        {
            title: "Tree near entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
        {
            title: "Backside of the fenced in area",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "On building near the entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Rear wall",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Open grotto in the rear  (3)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto]
        },
        {
            title: "In stable (2)",
            isChecked: false,
            type: LocationTypes.cow,
            tags: []
        },
        {
            title: "Rear silo (2)",
            isChecked: false,
            type: LocationTypes.cow,
            tags: []
        },
    ]
};