import { LocationTypes, Tags } from "../constants";

export const kokiriForest = {
    name: "Kokiri Forest",
    bgColor: 'bg-lime-500',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Mido's House",
            //isChecked: false,
            type: LocationTypes.item,
            tags: [],
            count: 4
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
            title: "Boulder maze",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child],
            count: 2
        },
        {
            title: "End of the skywalk",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child]
        },
        {
            title: "Top of saria's house",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child],
            count: 3
        },
        {
            title: "Grass near mido's house",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child],
            count: 2
        },
        {
            title: "Grass near ramp",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.child],
            count: 2
        },
        {
            title: "Nook above shop",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.adult],
            count: 7
        },
        {
            title: "Inside saria's house",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [],
            count: 4
        },
        {
            title: "Shop, around corner",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: []
        },

        // beehives
        {
            title: "Song of storms grotto",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto],
            count: 2
        },

        // pots 
        {
            title: "Link's house",
            isChecked: false,
            type: LocationTypes.pot,
            tags: []
        },
        {
            title: "Twin's house",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 2
        },
        {
            title: "Know-it-all bros' house",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [],
            count: 2
        },

    ],
    entrances: [
        // overworld
        {
            name: "Lost Woods Bridge",
            type: EntranceType.overworld
        },
        {
            name: "Lost Woods",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Link's house",
            type: EntranceType.interior
        },
        {
            name: "Mido's house",
            type: EntranceType.interior
        },
        {
            name: "Know-it-all brothers",
            type: EntranceType.interior
        },
        {
            name: "Saria's house",
            type: EntranceType.interior
        },
        {
            name: "Twin's house",
            type: EntranceType.interior
        },
        {
            name: "Shop",
            type: EntranceType.interior
        },

        // grottos
        {
            name: "Song of storms",
            type: EntranceType.grotto
        },

        // dungeons
        {
            name: "Deku tree",
            type: EntranceType.dungeon
        },
    ]


};