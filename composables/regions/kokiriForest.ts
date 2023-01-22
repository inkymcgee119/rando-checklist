import {LocationTypes, Tags} from "../constants";

export const kokiriForest = {
    name: "Kokiri Forest",
    bgColor: 'bg-lime-500',
    hasMQ: false,
    locations: [
        // items
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

        // gold skulltulas
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

        //rupees and hearts
        {
            title: "Behind mido's house",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Boulder maze (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "End of the skywalk",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Top of saria's house (3)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Grass near mido's house (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Grass near ramp (2)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Nook above shop (7)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: []
        },
        {
            title: "Inside saria's house (4)",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: []
        },
        {
            title: "Shop, around corner",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: []
        },

        // beehives
        {
            title: "Song of storms grotto (2)",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },

        // pots 
        {
            title: "Link's house",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
        {
            title: "Twin's house (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
        {
            title: "Know-it-all bros' house",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },

    ]

};