
export function getEntranceTypeByName(entType): any {
    let appState = useAppState();
    let result = "";
    if (appState.value.selectedGame.entranceOptions.settings[entType])
        result = appState.value.selectedGame.entranceOptions.settings[entType];
    return result;
}

export function getRegion(regName): Region {
    let appState = useAppState();
    return appState.value.regions.find((reg) => stringCompareCaseInsensitive(reg.name, regName));
}

export function getLocation(regName, locName, locType): Item {
    let region = getRegion(regName);
    return region.items.find(x => stringCompareCaseInsensitive(x.name, locName) && stringCompareCaseInsensitive(x.type, locType));
}

export function getEntranceRegion(regName): Region {
    let appState = useAppState();
    return appState.value.entranceRegions.find((reg) => stringCompareCaseInsensitive(reg.name, regName));
}

export function getEntrance(regName, entName, entType): Item {
    return getEntranceRegion(regName)?.items.find(x => stringCompareCaseInsensitive(x.name, entName) && stringCompareCaseInsensitive(x.type, entType));
}