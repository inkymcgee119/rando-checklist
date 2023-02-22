import { useAppState } from "./state";

import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';

export function save() {
    let appState = useAppState();

    let key = appState.value.selectedGame.dir;
    localStorage.setItem("zeldoTrackdo", JSON.stringify(appState.value.selectedGame));
    localStorage.setItem(key, JSON.stringify(appState.value));
}

export async function reset() {
    let appState = useAppState();
    
    localStorage.removeItem(appState.value.selectedGame.dir);

    await loadGameInfo();
    let gameInfo = appState.value.games.find(x => x.dir == appState.value.selectedGame.dir); // reset region data 

    await loadGame(gameInfo);
}

export function getLocationIcon(locType) {
    let appState = useAppState();
    let result = "";
    if (appState.value.locationTypes[locType])
        result = appState.value.locationTypes[locType].icon;
    return result;
}


export function getEntranceTypeByName(entType) {
    let appState = useAppState();
    let result = "";
    if (appState.value.entranceTypes[entType])
        result = appState.value.entranceTypes[entType];
    return result;
}

export function getTagIcon(tag) {
    let appState = useAppState();
    let result = "";
    if (appState.value.tags[tag])
        result = appState.value.tags[tag].icon;
    return result;
}

export function isTauri() {
    return !!window.__TAURI_IPC__;
}

export async function loadGameInfo() {
    let appState = useAppState();
    let gameInfo = await (await fetch("./games.json")).json();
    appState.value.games = gameInfo.games;
}

export async function loadGame(gameInfo) {
    let appState = useAppState();
    let dirPrefix = "./";

    try {
        if (isTauri()) {
            dirPrefix = "_up_/public/";

            appState.value.tags = await (JSON.parse(await readTextFile(await resolveResource(`${dirPrefix}${gameInfo.dir}/tags.json`))));
            appState.value.locationTypes = await (JSON.parse(await readTextFile(await resolveResource(`${dirPrefix}${gameInfo.dir}/locationTypes.json`))));
            appState.value.entranceTypes = await (JSON.parse(await readTextFile(await resolveResource(`${dirPrefix}${gameInfo.dir}/entranceTypes.json`))));

            let regionPromises = [];
            for (let r of gameInfo.regions) {
                regionPromises.push(JSON.parse(await readTextFile(await resolveResource(`${dirPrefix}${gameInfo.dir}/${r}`))));
            }

            let results = await Promise.all(regionPromises);
            appState.value.regions = results;
        }
        else {
            appState.value.tags = await (await fetch(`${dirPrefix}${gameInfo.dir}/tags.json`)).json();
            appState.value.locationTypes = await (await fetch(`${dirPrefix}${gameInfo.dir}/locationTypes.json`)).json();
            appState.value.entranceTypes = await (await fetch(`${dirPrefix}${gameInfo.dir}/entranceTypes.json`)).json();

            let regionPromises = [];
            for (let r of gameInfo.regions) {
                regionPromises.push((await fetch(`${dirPrefix}${gameInfo.dir}/${r}`)).json());
            }

            let results = await Promise.all(regionPromises);
            appState.value.regions = results;

        }
    }
    catch (ex) {
        throw ("Error loading json files.")
    }
}


export function stringCompareCaseInsensitive(a, b) {
    if (!a || !b)
        return false;

    return a.toUpperCase() == b.toUpperCase();
}