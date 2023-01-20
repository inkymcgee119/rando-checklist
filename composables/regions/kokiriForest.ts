import {LocationTypes, Tags} from "../constants";

export const kokiriForest = {
    name: "Kokiri Forest",
    bgColor: 'bg-lime-500',
    hasMQ: false,
    locations: [
        {
            title: "Mido's House (4)",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Kokiri sword chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Song of storms grotto",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },

        {
            title: "Back of Know-it-all Bros house",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Bean patch by shop",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },
        {
            title: "On top of twins' house",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Link's cow",
            description: "Win obstacle course minigame at lon lon ranch",
            isChecked: false,
            type: LocationTypes.cow,
            tags: []
        },
        {
            title: "Shop",
            isChecked: false,
            type: LocationTypes.shop,
            tags: []
        },
    ]

};