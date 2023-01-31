import {LocationTypes, Tags} from "../constants";

export const templeOfTimeEntrance = {
    name: "Temple of time entrance",
    bgColor: 'bg-slate-600',
    hasMQ: false,
    locations: [],
    entrances: [
        // overworld
        {
            name: "Market",
            type: EntranceType.overworld
        },

        // interior
        {
            name: "Temple of time",
            type: EntranceType.interior
        },

    ]
};