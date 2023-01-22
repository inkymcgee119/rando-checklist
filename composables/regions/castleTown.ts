import {LocationTypes, Tags} from "../constants";

export const castleTown = {
    name: "Castle Town",
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
            title: "Bombchu bowling (2)",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
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
            title: "Market (4)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.child, Tags.night]
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
            title: "Pot room (44)",
            description: "The pots on top of the walls can be reached by jumping from the crate with the Skulltula. From the first wall, you can reach the second wall by jumping from the sloped part of the first wall.",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child]
        },
        {
            title: "Back alley house (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child]
        },
        {
            title: "Pot room (7)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.adult]
        },

    ]
};