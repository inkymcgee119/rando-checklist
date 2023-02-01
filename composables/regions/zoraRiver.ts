import {LocationTypes, Tags} from "../constants";

export const zoraRiver = {
    name: "Zora River",
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
            title: "Frogs, zelda's lullaby (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Frogs, epona's song (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Frogs, saria's song (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Frogs, sun song (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Frogs, song of time (if enabled)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
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
            title: "Song of storms, rock circle",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto],
            count: 2
        },

        // rupees and hearts
        {
            title: "Under waterfall",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.adult],
            count: 4
        },

        // beehives
        {
            title: "Open grotto",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto],
            count: 2
        },
        {
            title: "Song of storms, rock circle",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },        
    ],
    entrances: [
        // overworld
        {
            name: "Hyrule Field",
            type: EntranceType.overworld
        },
        {
            name: "Zora's Domain",
            type: EntranceType.overworld
        },
        {
            name: "Lost Woods",
            type: EntranceType.overworld
        },

        // grottos
        {
            name: "Song of storms",
            type: EntranceType.grotto
        },
        {
            name: "Open",
            type: EntranceType.grotto
        },
        {
            name: "Fairy",
            type: EntranceType.grotto
        },

    ]
};