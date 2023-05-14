import { useAppState } from "../composables/state";
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';

export function save() {
    let appState = useAppState();
    if (appState.value.selectedGame.dir && appState.value)
        localStorage.setItem(appState.value.selectedGame.dir, JSON.stringify(appState.value));
}

export async function reset() {
    let appState = useAppState();

    localStorage.removeItem(appState.value.selectedGame.dir);

    await loadGameInfoData();
    let gameInfo = appState.value.games.find(x => x.dir == appState.value.selectedGame.dir); // reset region data 
    appState.value.selectedGame = gameInfo;

    await loadGameData(gameInfo);
    save();
}

export function getEntranceTypeByName(entType) {
    let appState = useAppState();
    let result = "";
    if (appState.value.selectedGame.entranceOptions.settings[entType])
        result = appState.value.selectedGame.entranceOptions.settings[entType];
    return result;
}

export function isTauri() {
    return !!window.__TAURI_IPC__;
}

export async function loadGameInfoData() {
    let appState = useAppState();
    let fetchResult = await fetch("/games.json");
    let gameInfo = await fetchResult.json();
    appState.value.games = gameInfo.games;
}

export async function loadGameData(gameInfo) {

    let appState = useAppState();
    let dirPrefix = "../";

    try {
        if (isTauri()) {
            dirPrefix = "_up_/public";            

            let regionPromises = [];
            if(gameInfo.regions)
                for (let r of gameInfo.regions) {
                    let file = await resolveResource(`${dirPrefix}/${gameInfo.dir}/${r}`);
                    regionPromises.push(JSON.parse(await readTextFile(file)));
                }

            let entrancePromises = [];
            if(gameInfo.entranceRegions)
                for (let r of gameInfo.entranceRegions) {
                    entrancePromises.push(JSON.parse(await readTextFile(await resolveResource(`${dirPrefix}/${gameInfo.dir}/${r}`))));
                }

            let resultsRegions = await Promise.all(regionPromises);
            let resultsEntrances = await Promise.all(entrancePromises);
            
            appState.value.regions = resultsRegions;
            appState.value.entranceRegions = resultsEntrances;
        }
        else {
            let regionPromises = [];
            if(gameInfo.regions)
                for (let r of gameInfo.regions) {
                    regionPromises.push((await fetch(`/${gameInfo.dir}/${r}`)).json());
                }

            let entrancePromises = [];
            if(gameInfo.entranceRegions)
                for (let r of gameInfo.entranceRegions) {
                    entrancePromises.push((await fetch(`/${gameInfo.dir}/${r}`)).json());
                }

            let resultsRegions = await Promise.all(regionPromises);
            let resultsEntrances = await Promise.all(entrancePromises);

            appState.value.regions = resultsRegions;
            appState.value.entranceRegions = resultsEntrances;
        }

        // set default options
        let combinedSettings = {...gameInfo.options.settings, ...gameInfo.options.toggleSettings};        
        for (let setting of Object.getOwnPropertyNames(combinedSettings)) {
            if (combinedSettings[setting].isDefault)
                appState.value.options.settings[setting] = true;
        }

        let combinedTags = {...gameInfo.options.tags, ...gameInfo.options.toggleTags};        
        for (let tag of Object.getOwnPropertyNames(combinedTags)) {
            if (combinedTags[tag].isDefault)
                appState.value.options.tags[tag] = true;
        }
         
        if(gameInfo.entranceOptions.settings)
            for (let setting of Object.getOwnPropertyNames(gameInfo.entranceOptions.settings)) {
                if (gameInfo.entranceOptions.settings[setting].isDefault)
                    appState.value.entranceOptions.settings[setting] = true;
            }
        if(gameInfo.entranceOptions.toggleSettings)
            for (let setting of Object.getOwnPropertyNames(gameInfo.entranceOptions.toggleSettings)) {
                if (gameInfo.entranceOptions.toggleSettings[setting].isDefault)
                    appState.value.entranceOptions.toggleSettings[setting] = true;
            }
            
        if(gameInfo.entranceOptions.tags)
            for (let tag of Object.getOwnPropertyNames(gameInfo.entranceOptions.tags)) {
                if (gameInfo.entranceOptions.tags[tag].isDefault)
                    appState.value.entranceOptions.tags[tag] = true;
            }
        if(gameInfo.entranceOptions.toggleTags)
            for (let tag of Object.getOwnPropertyNames(gameInfo.entranceOptions.toggleTags)) {
                if (gameInfo.entranceOptions.toggleTags[tag].isDefault)
                    appState.value.entranceOptions.toggleTags[tag] = true;
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