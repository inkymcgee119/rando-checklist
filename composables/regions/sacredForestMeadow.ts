import {LocationTypes, Tags} from "../constants";

export const sacredForestMeadow = {
    name: "Sacred Forest Meadow",
    bgColor: 'bg-emerald-800',
    hasMQ: false,
    locations: [
        {
            title: "Wolfos grotto",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Song from Saria",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.child]
        },
        {
            title: "Song from Sheik",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.adult]
        },
        {
            title: "On the wall above the maze",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },
        {
            title: "Song of storms, in corner (2)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto]
        },

        // beehives
        {
            title: "Song of storms grotto",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
    ]
};