import { useAppState } from "./state";

import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';

export function save(key, value) {
    if (key && value)
        localStorage.setItem(key, JSON.stringify(value));
}

export async function reset() {
    let appState = useAppState();

    localStorage.removeItem(appState.value.selectedGame.dir + "test");

    await loadGameInfoData();
    let gameInfo = appState.value.games.find(x => x.dir == appState.value.selectedGame.dir); // reset region data 

    await loadGameData(gameInfo);
}

export function getLocationIcon(locType) {
    let appState = useAppState();
    let result = "";
    if (appState.value.selectedGame.locationTypes[locType])
        result = appState.value.selectedGame.locationTypes[locType].icon;
    return result;
}


export function getEntranceTypeByName(entType) {
    let appState = useAppState();
    let result = "";
    if (appState.value.selectedGame.entranceTypes[entType])
        result = appState.value.selectedGame.entranceTypes[entType];
    return result;
}

export function getTagIcon(tag) {
    let appState = useAppState();
    let result = "";
    if (appState.value.selectedGame.tags[tag])
        result = appState.value.selectedGame.tags[tag].icon;
    return result;
}

export function isTauri() {
    return !!window.__TAURI_IPC__;
}

export async function loadGameInfoData() {
    let appState = useAppState();
    let gameInfo = await (await fetch("../games.json")).json();
    appState.value.games = gameInfo.games;
}

export async function loadGameData(gameInfo) {

    let appState = useAppState();
    let dirPrefix = "../";

    try {
        if (isTauri()) {
            dirPrefix = "_up_/public/";            

            let regionPromises = [];
            for (let r of gameInfo.regions) {
                regionPromises.push(JSON.parse(await readTextFile(await resolveResource(`${dirPrefix}${gameInfo.dir}/${r}`))));
            }

            let results = await Promise.all(regionPromises);
            appState.value.regions = results;
        }
        else {
            let regionPromises = [];
            for (let r of gameInfo.regions) {
                regionPromises.push((await fetch(`${dirPrefix}${gameInfo.dir}/${r}`)).json());
            }

            let results = await Promise.all(regionPromises);
            appState.value.regions = results;

        }

        // set default options
        if(gameInfo.locationTypes)
            for (let locType of Object.getOwnPropertyNames(gameInfo.locationTypes)) {
                if (gameInfo.locationTypes[locType].isDefault)
                    appState.value.options[locType] = true;
            }

        if(gameInfo.entranceTypes)
            for (let locType of Object.getOwnPropertyNames(gameInfo.entranceTypes)) {
                if (gameInfo.entranceTypes[locType].isDefault)
                    appState.value.entranceOptions[locType] = true;
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

function wait(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}