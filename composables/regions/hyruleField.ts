import {LocationTypes, Tags} from "../constants";

export const hyruleField = {
    name: "Hyrule Field",
    bgColor: 'bg-yellow-700',
    hasMQ: false,
    locations: [
        {
            title: "Open grotto near lake hylia",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Deku salesman",
            description: "Grotto inside the fences by lake hylia",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Southeast grotto, under rock",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Tektite grotto",
            description: "Northwest of lon lon by tree",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Grotto west of castle town",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Ocarina of time",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Ocarina of time, song",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.child]
        },

       
        {
            title: "Grotto near kakariko, near tree",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.grotto]
        },
        {
            title: "Grotto near gerudo valley",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.grotto]
        },
        {
            title: "Grotto near gerudo valley",
            isChecked: false,
            type: LocationTypes.cow,
            tags: [Tags.grotto]
        },
    ]
};