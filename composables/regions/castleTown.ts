import {LocationTypes, Tags} from "../constants";

export const castleTown = {
    name: "Castle Town",
    bgColor: 'bg-purple-500',
    locations: [
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
        {
            title: "Pot room, back crate",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child]
        },
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
    ]
};