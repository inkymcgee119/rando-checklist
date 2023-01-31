import {LocationTypes, Tags} from "../constants";

export const lostWoodsBridge = {
    name: "Lost Woods Bridge",
    bgColor: 'bg-amber-400',
    hasMQ: false,
    locations: [],
    entrances: [
        // overworld
        {
            name: "Hyrule Field",
            type: EntranceType.overworld
        },
        {
            name: "Kokiri Forest",
            type: EntranceType.overworld
        },

    ]
};