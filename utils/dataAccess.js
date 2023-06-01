
export function getEntranceTypeByName(entType) {
    let appState = useAppState();
    let result = "";
    if (appState.value.selectedGame.entranceOptions.settings[entType])
        result = appState.value.selectedGame.entranceOptions.settings[entType];
    return result;
}

export function getRegion(regName) {
    let appState = useAppState();
    return appState.value.regions.find((reg) => stringCompareCaseInsensitive(reg.name, regName));
}

export function getLocation(regName, locName, locType) {
    let region = getRegion(regName);
    return region.items.find(x => stringCompareCaseInsensitive(x.name, locName) && stringCompareCaseInsensitive(x.type, locType));
}

export function getEntranceRegion(regName) {
    let appState = useAppState();
    return appState.value.entranceRegions.find((reg) => stringCompareCaseInsensitive(reg.name, regName));
}

export function getEntrance(regName, entName, entType) {
    return getEntranceRegion(regName)?.items.find(x => stringCompareCaseInsensitive(x.name, entName) && stringCompareCaseInsensitive(x.type, entType));
}