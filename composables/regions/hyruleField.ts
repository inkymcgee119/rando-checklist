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
    ],
    entrances: [
        // overworld
        {
            name: "Lost Woods Bridge",
            type: EntranceType.overworld
        },
        {
            name: "Zora River",
            type: EntranceType.overworld
        },
        {
            name: "Kakariko Village",
            type: EntranceType.overworld
        },
        {
            name: "Market Entrance",
            type: EntranceType.overworld
        },
        {
            name: "Gerudo Valley",
            type: EntranceType.overworld
        },
        {
            name: "Lon Lon Ranch",
            type: EntranceType.overworld
        },
        {
            name: "Lake Hylia",
            type: EntranceType.overworld
        },


        // grottos
        {
            name: "Open",
            type: EntranceType.grotto
        },
        {
            name: "Near kakariko",
            type: EntranceType.grotto
        },
        {
            name: "Near market entrance",
            type: EntranceType.grotto
        },
        {
            name: "Tektite",
            type: EntranceType.grotto
        },
        {
            name: "Fairy",
            type: EntranceType.grotto
        },
        {
            name: "Cow",
            type: EntranceType.grotto
        },
        {
            name: "Southeast",
            type: EntranceType.grotto
        },
        {
            name: "Inside fence",
            type: EntranceType.grotto
        },
    ]

};