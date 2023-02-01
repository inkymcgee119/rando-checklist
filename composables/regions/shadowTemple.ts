import {LocationTypes, Tags} from "../constants";

export const shadowTemple = {
    name: "Shadow Temple",
    bgColor: 'bg-purple-800',
    hasMQ: true,
    showMQ: false,
    locations: [
        // items
        {
            title: "Whispering walls, redead room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Whispering walls, deadhand",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Gibdos room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Spinning blade room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Invisible blade room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Falling spike room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla],
            count: 3
        },
        {
            title: "Invisible floor spikes room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Skull room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Fan area, end room invisible chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Fan area, gibdos room chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },        
        {
            title: "Fan area, gibdos room debris",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },  
        {
            title: "Invisible maze, invisible floormaster",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },        
        {
            title: "Invisible maze, spike trap",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Bongo Bongo",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.vanilla]
        },

        // gold skulltulas
        {
            title: "Invisible spinning blade room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Falling spike room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },        
        {
            title: "Skull room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Before the boat, scarecrow song",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Triple skull room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },

        // rupees and hearts
        {
            title: "Invisible blade room",
            description: "Use song of time to reach",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Before boat",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "After boat",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 3
        },
        {
            title: "Triple skull room",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.vanilla],
            count: 9
        },

        // pots
        {
            title: "Whispering walls",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 7
        },
        {
            title: "Whispering walls, redead room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Falling spike room, lower",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Falling spike room, upper",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Fan area, gibdos room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 4
        },
        {
            title: "After boat",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Spike trap room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla]
        },
        {
            title: "Invisible floor master room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },
        {
            title: "Before boss",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.vanilla],
            count: 2
        },

        // MQ
        // items
        {
            title: "Whispering walls, redead room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Whispering walls, deadhand",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Gibdos room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Spinning blade room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Spinning blade room, invisible chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Invisible blade room, visible chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Invisible blade room, invisible chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Silver rupees around the beamos",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Falling spike room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq],
            count: 3
        },
        {
            title: "Invisible floor spikes room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Stalfos room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Fan area, end room invisible chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Fan area, gibdos room, kill enemies",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Fan area, gibdos room, debris",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Invisible maze, deadhand",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Invisible maze, triple skull",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Invisible maze, spike trap",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Bongo Bongo",
            isChecked: false,
            type: LocationTypes.boss,
            tags: [Tags.mq]
        },

        // gold skulltulas
        {
            title: "Falling spike room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Fan section, redead room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Fan section, gibdos room, debris",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "After boat, in the pit",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Room before Bongo Bongo",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },

        // rupees
        {
            title: "Invisible blade room",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Before boat",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "After boat, lower",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq]
        },
        {
            title: "After boat, upper",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Triple spinning pot",
            isChecked: false,
            type: LocationTypes.rupee,
            tags: [Tags.mq],
            count: 9
        },

        // crates
        {
            title: "Truth spinner",
            isChecked: false,
            type: LocationTypes.crate,
            tags: [Tags.mq],
            count: 4
        },

        // pots
        {
            title: "Whispering walls, before SoT",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 4
        },
        {
            title: "Whispering walls, after SoT",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Whispering walls, redead",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Falling spikes, lower",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Falling spikes, upper",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Fan area, gibdos room",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 4
        },
        {
            title: "After boat",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Near boss",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Invisible maze, deadhand 2",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq],
            count: 2
        },
        {
            title: "Invisible maze, spike walls",
            isChecked: false,
            type: LocationTypes.pot,
            tags: [Tags.mq]
        },

    ]
};