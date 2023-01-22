import {LocationTypes, Tags} from "../constants";

export const kakarikoVillage = {
    name: "Kakariko Village",
    bgColor: 'bg-lime-900',
    hasMQ: false,
    locations: [
        // items
        {
            title: "Anju's chickens",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.child]
        },
        {
            title: "Impa's cow hp",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Redead grotto",
            description: "In center of the village",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Open grotto, near potion shop",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.grotto]
        },
        {
            title: "Talk to Anju",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Talk to man on the roof",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Shooting gallery minigame",
            description: "Requires bow for item",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
        {
            title: "Windmill hp",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },

        {
            title: "Gold skulltula reward: 10",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Gold skulltula reward: 20",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Gold skulltula reward: 30",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Gold skulltula reward: 40",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },
        {
            title: "Gold skulltula reward: 50",
            isChecked: false,
            type: LocationTypes.item,
            tags: []
        },        
        {
            title: "Windmill song",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.adult]
        },
        {
            title: "Sheik's song",
            description: "Need forest, fire, and water medallions",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.adult]
        },

        // gold skulltulas
        {
            title: "Tree near entrance",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Side of skulltula house",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Partially built house",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Side of shop by DMT",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "Ladder on the lookout tower",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.child, Tags.night]
        },
        {
            title: "On top of Impa's house",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.adult, Tags.night]
        },

        // cows
        {
            title: "Impa's house",
            isChecked: false,
            type: LocationTypes.cow,
            tags: []
        },

        // shops
        {
            title: "Shop, bazaar",
            isChecked: false,
            type: LocationTypes.shop,
            tags: [Tags.adult]
        },
        {
            title: "Shop, potion",
            isChecked: false,
            type: LocationTypes.shop,
            tags: []
        },

        // beehives
        {
            title: "Open grotto, near potion shop (2)",
            isChecked: false,
            type: LocationTypes.beehive,
            tags: [Tags.grotto]
        },

        // crates
        {
            title: "Near open grotto (2)",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.adult]
        },
        {
            title: "Near archery",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.adult]
        },
        {
            title: "Near man on knees",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.adult]
        },

        // pots
        {
            title: "Outside potion shop (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child]
        },
        {
            title: "Outside bazaar (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child]
        },
        {
            title: "Outside impa's house (3)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child]
        },
        {
            title: "Outside odd medicine shop (2)",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.child]
        },

    ]
};