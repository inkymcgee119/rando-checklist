import { LocationTypes, EntranceType, Tags } from "./constants";

export function getLocationIcon(locType) {
    let result = "";
    if (LocationTypes[locType])
        result = LocationTypes[locType].icon;
    return result;
}

export function getEntranceIcon(entType) {
    let result = "";
    if (EntranceType[entType])
        result = EntranceType[entType].icon;
    return result;
}

export function getTagIcon(tag) {
    let result = "";
    if (Tags[tag])
        result = Tags[tag].icon;
    return result;
}