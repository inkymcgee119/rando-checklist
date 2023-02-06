import { useAppState } from "./state";

import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';

export function save(data) {
    localStorage.setItem("ootTrackerData", JSON.stringify(data));
}

export async function reset() {
    localStorage.removeItem("ootTrackerData");
    await loadRegions();
}

export function getLocationIcon(locType) {
    let appState = useAppState();
    let result = "";
    if (appState.value.locationTypes[locType])
        result = appState.value.locationTypes[locType].icon;
    return result;
}

export function getEntranceIcon(entType) {
    let appState = useAppState();
    let result = "";
    if (appState.value.entranceTypes[entType])
        result = appState.value.entranceTypes[entType].icon;
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

export async function loadRegions() {
    let appState = useAppState();

    if (window.__TAURI_IPC__) {
        Promise.all([
            JSON.parse(await readTextFile(await resolveResource('_up_/public/tags.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/locationTypes.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/entranceTypes.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/games.json')))
        ]).then(x => {
            appState.value.tags = x[0];
            appState.value.locationTypes = x[1];
            appState.value.entranceTypes = x[2];
            appState.value.gameInfo = x[3];
        });
    
        let results = await Promise.all([
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/kokiriForest.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/lostWoods.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/lostWoodsBridge.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/sacredForestMeadow.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/hyruleField.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/marketEntrance.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/market.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/castleGrounds.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/templeOfTimeEntrance.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/templeOfTime.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/lonLonRanch.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/kakarikoVillage.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/graveyard.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/deathMountainTrail.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/deathMountainCrater.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/goronCity.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/zoraRiver.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/zoraDomain.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/zoraFountain.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/lakeHylia.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/gerudoValley.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/gerudoFortress.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/hauntedWasteland.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/desertColossus.json'))),
    
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/dekuTree.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/dodongoCavern.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/jabu.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/forestTemple.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/fireTemple.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/iceCavern.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/waterTemple.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/bottomOfTheWell.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/shadowTemple.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/gerudoTrainingGrounds.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/spiritTemple.json'))),
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/ganonCastle.json'))),
    
            JSON.parse(await readTextFile(await resolveResource('_up_/public/regions/warpSongs.json'))),
        ]);
    
        appState.value.regions = results;
    }
    else {
        Promise.all([
            (await fetch("./tags.json")).json(),
            (await fetch("./locationTypes.json")).json(),
            (await fetch("./entranceTypes.json")).json(),
            (await fetch("./games.json")).json()
        ]).then(x => {
            appState.value.tags = x[0];
            appState.value.locationTypes = x[1];
            appState.value.entranceTypes = x[2];
            appState.value.gameInfo = x[3];
        });

        let results = await Promise.all([
            await (await fetch("./regions/kokiriForest.json")).json(),
            await (await fetch("./regions/lostWoods.json")).json(),
            await (await fetch("./regions/lostWoodsBridge.json")).json(),
            await (await fetch("./regions/sacredForestMeadow.json")).json(),
            await (await fetch("./regions/hyruleField.json")).json(),
            await (await fetch("./regions/marketEntrance.json")).json(),
            await (await fetch("./regions/market.json")).json(),
            await (await fetch("./regions/castleGrounds.json")).json(),
            await (await fetch("./regions/templeOfTimeEntrance.json")).json(),
            await (await fetch("./regions/templeOfTime.json")).json(),
            await (await fetch("./regions/lonLonRanch.json")).json(),
            await (await fetch("./regions/kakarikoVillage.json")).json(),
            await (await fetch("./regions/graveyard.json")).json(),
            await (await fetch("./regions/deathMountainTrail.json")).json(),
            await (await fetch("./regions/deathMountainCrater.json")).json(),
            await (await fetch("./regions/goronCity.json")).json(),
            await (await fetch("./regions/zoraRiver.json")).json(),
            await (await fetch("./regions/zoraDomain.json")).json(),
            await (await fetch("./regions/zoraFountain.json")).json(),
            await (await fetch("./regions/lakeHylia.json")).json(),
            await (await fetch("./regions/gerudoValley.json")).json(),
            await (await fetch("./regions/gerudoFortress.json")).json(),
            await (await fetch("./regions/hauntedWasteland.json")).json(),
            await (await fetch("./regions/desertColossus.json")).json(),

            await (await fetch("./regions/dekuTree.json")).json(),
            await (await fetch("./regions/dodongoCavern.json")).json(),
            await (await fetch("./regions/jabu.json")).json(),
            await (await fetch("./regions/forestTemple.json")).json(),
            await (await fetch("./regions/fireTemple.json")).json(),
            await (await fetch("./regions/iceCavern.json")).json(),
            await (await fetch("./regions/waterTemple.json")).json(),
            await (await fetch("./regions/bottomOfTheWell.json")).json(),
            await (await fetch("./regions/shadowTemple.json")).json(),
            await (await fetch("./regions/gerudoTrainingGrounds.json")).json(),
            await (await fetch("./regions/spiritTemple.json")).json(),
            await (await fetch("./regions/ganonCastle.json")).json(),

            await (await fetch("./regions/warpSongs.json")).json()
        ]);
        appState.value.regions = results;
    }
}


export function stringCompareCaseInsensitive(a, b) {
    return a.toUpperCase() == b.toUpperCase();
}