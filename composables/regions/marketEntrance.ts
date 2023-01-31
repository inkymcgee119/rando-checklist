import {LocationTypes, Tags} from "../constants";

export const marketEntrance = {
    name: "Market entrance",
    bgColor: 'bg-slate-600',
    hasMQ: false,
    locations: [],
    entrances: [
        // overworld
        {
            name: "Hyrule field",
            type: EntranceType.overworld
        },
        {
            name: "Market",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Pot room",
            type: EntranceType.interior
        },

    ]
};