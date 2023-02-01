import {LocationTypes, Tags} from "../constants";

export const waterTemple = {
    name: "Water Temple",
    bgColor: 'bg-blue-800',
    hasMQ: true,
    showMQ: false,
    locations: [
        // items
        {
            title: "Bottom floor, first chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Bottom floor, torch room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Bottom floor, dragon",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Bottom floor, waterfall boulders",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Central pillar, basement area",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Second floor, cracked wall",
            description: "Up from the room where you meet Ruto",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Second floor, water column room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Second floor, eye switch",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Top floor, dark Link",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Top floor, river chest after dark Link",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Morpha",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.vanilla]
        },

        // gold skulltulas
        {
            title: "Bottom floor, behind a gate",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Central pillar, at the top",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Top floor, hookshot waterfall room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "River after dark link",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Bottom floor, waterfall boulder",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },

        // rupees and hearts
        {
            title: "River after dark link",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 4
        },

        // pots
        {
            title: "Main room, second floor",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Bottom floor, torch room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Second floor, water column room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 3
        },
        {
            title: "Second floor, eye switch",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Bottom floor, behind a gate",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 4
        },
        {
            title: "Longshot area, back room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Before dark link",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Top floor, river after dark Link",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },


        // MQ
        // items
        {
            title: "Bottom floor, first chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Bottom floor, waterfall room crate",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Bottom floor, torch room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Central pillar, basement area",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Second floor, cracked wall",
            description: "Up from the room where you meet Ruto",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "After dark link",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },        
        {
            title: "Morpha",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.mq]
        },

        // gold skulltulas
        {
            title: "Bottom floor, triple torch room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Bottom floor, longshot area, gate",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Second floor, torches behind a gate",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Second floor, box button room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Top floor, river after dark link",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },

        // crates
        {
            title: "Central pillar",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Central pillar basement",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 14
        },
        {
            title: "Triple torch, submerged",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 6
        },
        {
            title: "Triple torch, behind gate",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 3
        },
        {
            title: "Second floor, spikey hookshot",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 7
        },
        {
            title: "Dragon, by door",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 8
        },
        {
            title: "Boss key",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 5
        },
        {
            title: "To top water switch, lower",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 6
        },
        {
            title: "To top water switch, lower",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Longshot area, behind gate",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 4
        },
        {
            title: "Longshot area, front crates",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Longshot area, submerged",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 6
        },
        {
            title: "Dodongo, lower",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 3
        },
        {
            title: "Dodongo, upper",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "Dodongo, hall",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq]
        },
        {
            title: "Waterfall room",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 5
        },
        {
            title: "Lizalfos hallway, gate",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Lizalfos hallway, hall",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 3
        },
        {
            title: "Lizalfos hallway, room",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 5
        },

        // pots
        {
            title: "Bottom, torch room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Triple torch room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 4
        },
        {
            title: "Second floor, spikey hookshot",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 3
        },
        {
            title: "Before dark link, lower",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Before dark link, upper",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Room after dark link",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "After dark link, river",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Boss key room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "To top water switch",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 3
        },
        {
            title: "Dodongo",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Waterfall room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },
        {
            title: "Lizalfos hallway",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 3
        },
        {
            title: "Lizalfos hallway, gate",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },

    ]
};