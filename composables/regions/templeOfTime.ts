import {LocationTypes, Tags} from "../constants";

export const templeOfTime = {
    name: "Temple of Time",
    bgColor: 'bg-stone-700',
    hasMQ: false,
    locations: [
        {
            title: "Prelude of light",
            isChecked: false,
            type: LocationTypes.song,
            tags: [Tags.adult]
        },
        {
            title: "Light arrows",
            isChecked: false,
            type: LocationTypes.item,
            tags: [Tags.adult]
        },
    ]
};