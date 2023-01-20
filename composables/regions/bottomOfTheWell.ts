import {LocationTypes, Tags} from "../constants";

export const bottomOfTheWell = {
    name: "Bottom of the Well",
    bgColor: 'bg-fuchsia-500',
    hasMQ: true,
    showMQ: false,
    locations: [
        {
            title: "Front left invisible wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Right side invisible wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Left side invisible wall",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Center room, behind skulltula",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Left side, Coffin Room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Bombable debris, front",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Bombable debris, back left",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Basement, behind rocks",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Drained water, left side",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Drained water, front",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Back right room, keese",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Back right room, like like",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Invisible chest in deadhand room",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },
        {
            title: "Deadhand",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.vanilla]
        },

        
        {
            title: "Center, left key door",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Center, right key door",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },
        {
            title: "Back right room, like like",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.vanilla]
        },


        // MQ
        {
            title: "Center chest",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Back right room, free standing",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Basement chest",
            description: "Switch in back right room under bombable debris",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Deadhand room, bombable debris",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },
        {
            title: "Deadhand",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.mq]
        },




        {
            title: "Left side, coffin room",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Basement, end of the tunnel",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
        {
            title: "Center, left room, under gravestone",
            isChecked: false,
            type: LocationTypes.gs,
            tags: [Tags.mq]
        },
    ]
};