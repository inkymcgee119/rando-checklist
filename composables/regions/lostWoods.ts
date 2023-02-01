import { LocationTypes, Tags } from "../constants";

export const lostWoods = {
    name: "Lost Woods",
    bgColor: 'bg-emerald-500',
    hasMQ: false,
    locations: [
        {
            title: "Lost woods bridge",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Deku Salesman, by bridge",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Deku Salesman, rock near exit",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Grotto, rock by Goron City warp",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Target in the woods",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Ocarina memory game",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Skull kid (Saria's song)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Deku Theater, skull mask",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Deku Theater, mask of truth",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },


        {
            title: "Bean patch by bridge",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },
        {
            title: "Bean patch by deku theater",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.bean]
        },
        {
            title: "Above deku theater bean patch",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },


        {
            title: "Deku Salesman, rock near exit",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.grotto]
        },
        {
            title: "Near deku theater",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.child],
            count: 2
        },

        // rupees and hearts
        {
            title: "Under rock near exit",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: []
        },
        {
            title: "Water warp",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child],
            count: 8
        },

        // beehives
        {
            title: "Rock by Goron City warp",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto],
            count: 2
        },
        {
            title: "Deku Salesman, rock near exit",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
    ],

    entrances: [
        // overworld
        {
            name: "Kokiri Forest",
            type: EntranceType.overworld
        },
        {
            name: "Sacred Forest Meadow",
            type: EntranceType.overworld
        },
        {
            name: "Goron City",
            type: EntranceType.overworld
        },
        {
            name: "Zora River",
            type: EntranceType.overworld
        },

        // grottos
        {
            name: "Deku theater",
            type: EntranceType.grotto
        },
        {
            name: "Near goron city warp",
            type: EntranceType.grotto
        },
        {
            name: "Near exit",
            type: EntranceType.grotto
        },

    ]
};