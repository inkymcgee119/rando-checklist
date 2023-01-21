import {LocationTypes, Tags} from "../constants";

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
            title: "Near deku theater (2)",
            isChecked: false,
            type: LocationTypes.scrub,
            tags: [Tags.child]
        },

        // rupees and hearts
        {
            title: "Under rock near exit",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: []
        },
        {
            title: "Water warp (8)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: []
        },

        // beehives
        {
            title: "Rock by Goron City warp (2)",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
        {
            title: "Deku Salesman, rock near exit",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },
    ]
};