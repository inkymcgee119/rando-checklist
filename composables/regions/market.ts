import {LocationTypes, Tags} from "../constants";

export const market = {
    name: "Market",
    bgColor: 'bg-purple-500',
    locations: [
        // items
        {
            title: "Slingshot minigame",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Save Richard the dog",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Bombchu bowling",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child],
            count: 2
        },
        {
            title: "Treasure chest minigame",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Big poes",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        // gold skulltulas
        {
            title: "Pot room, back crate",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },

        // shops
        {
            title: "Shop, bazaar",
            isChecked: false,
            type: LocationTypes.shop,
            tags: []
        },
        {
            title: "Shop, potion",
            isChecked: false,
            type: LocationTypes.shop,
            tags: []
        },
        {
            title: "Shop, bombchu",
            isChecked: false,
            type: LocationTypes.shop,
            tags: []
        },

        // crates
        {
            title: "Market",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.child, Tags.night],
            count: 4
        },
        {
            title: "Richard's house",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.child]
        },
        {
            title: "Pot room",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.child]
        },

        // pots
        {
            title: "Pot room",
            description: "The pots on top of the walls can be reached by jumping from the crate with the Skulltula. From the first wall, you can reach the second wall by jumping from the sloped part of the first wall.",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child],
            count: 44
        },
        {
            title: "Back alley house",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child],
            count: 3
        },
        {
            title: "Pot room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.adult],
            count: 7
        },
    ],
    entrances: [
        // overworld
        {
            name: "Market Entrance",
            type: EntranceType.overworld
        },
        {
            name: "Hyrule/Ganon's Castle Grounds",
            type: EntranceType.overworld
        },
        {
            name: "Temple of Time Entrance",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Bazaar",
            type: EntranceType.interior
        },
        {
            name: "Potion shop",
            type: EntranceType.interior
        },
        {
            name: "Mask shop",
            type: EntranceType.interior
        },
        {
            name: "Shooting gallery",
            type: EntranceType.interior
        },
        {
            name: "Bombchu bowling",
            type: EntranceType.interior
        },
        {
            name: "Treasure chest game",
            type: EntranceType.interior
        },
        {
            name: "Back alley, bombchu shop",
            type: EntranceType.interior
        },
        {
            name: "Back alley, man in green",
            type: EntranceType.interior
        },

    ]
};