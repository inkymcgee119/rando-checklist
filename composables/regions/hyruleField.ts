import {LocationTypes, Tags} from "../constants";

export const hyruleField = {
    name: "Hyrule Field",
    bgColor: 'bg-yellow-700',
    hasMQ: false,
    locations: [
        // items
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

        // gold skulltulas
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

        // cows
        {
            title: "Grotto near gerudo valley",
            isChecked: false,
            type: LocationTypes.cow,
            tags: [Tags.grotto]
        },

        // beehives
        {
            title: "Open grotto near lake hylia (2)",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
        {
            title: "Southeast grotto, under rock (2)",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
        {
            title: "Deku salesman",
            description: "Grotto inside the fences by lake hylia",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
        {
            title: "Grotto west of castle town (2)",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },

        // pots
        {
            title: "Grotto near gerudo valley (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.grotto]
        },
    ]
};