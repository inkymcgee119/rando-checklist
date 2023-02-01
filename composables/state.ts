
import { bottomOfTheWell } from "./regions/bottomOfTheWell";
import { dekuTree } from "./regions/dekuTree";
import { dodongoCavern } from "./regions/dodongoCavern";
import { fireTemple } from "./regions/fireTemple";
import { forestTemple } from "./regions/forestTemple";
import { ganonCastle } from "./regions/ganonCastle";
import { iceCavern } from "./regions/iceCavern";
import { jabu } from "./regions/jabu";
import { shadowTemple } from "./regions/shadowTemple";
import { spiritTemple } from "./regions/spiritTemple";
import { waterTemple } from "./regions/waterTemple";
import { gerudoTrainingGrounds } from "./regions/gerudoTrainingGrounds";
import { kokiriForest } from "./regions/kokiriForest";
import { lostWoods } from "./regions/lostWoods";
import { sacredForestMeadow } from "./regions/sacredForestMeadow";
import { hyruleField } from "./regions/hyruleField";
import { castleGrounds } from "./regions/castleGrounds";
import { market } from "./regions/market";
import { templeOfTime } from "./regions/templeOfTime";
import { templeOfTimeEntrance } from "./regions/templeOfTimeEntrance";
import { lonLonRanch } from "./regions/lonLonRanch";
import { kakarikoVillage } from "./regions/kakarikoVillage";
import { graveyard } from "./regions/graveyard";
import { deathMountainTrail } from "./regions/deathMountainTrail";
import { zoraRiver } from "./regions/zoraRiver";
import { zoraDomain } from "./regions/zoraDomain";
import { zoraFountain } from "./regions/zoraFountain";
import { lakeHylia } from "./regions/lakeHylia";
import { gerudoValley } from "./regions/gerudoValley";
import { gerudoFortress } from "./regions/gerudoFortress";
import { hauntedWasteland } from "./regions/hauntedWasteland";
import { desertColossus } from "./regions/desertColossus";
import { goronCity } from "./regions/goronCity";
import { deathMountainCrater } from "./regions/deathMountainCrater";
import { marketEntrance } from "./regions/marketEntrance";
import { lostWoodsBridge } from "./regions/lostWoodsBridge";
import { warpSongs } from "./regions/warpSongs";



export const columns = ref(1);
export const columnsEntrances = ref(1);
export function save(data: any) {
    localStorage.setItem("ootTrackerData", JSON.stringify(data));
}

export const useAppState = () => useState("appState", () => ({    
    notes: "",
    options: {
        items: true,
        skulltulas: false,
        shops: false,
        scrubs: false,
        cows: false,
        rupees: false,
        pots: false,
        crates: false,
        beehives: false
    },
    tagFilters: {
        child: false,
        adult: false,
        grotto: false,
        bean: false,
        night: false
    },
    entranceOptions: {
        dungeons: false,
        interiors: false,
        overworld: false,
        grottos: false,
        owls: false,
        songs: false,
        mixedPool: false,
        decoupled: false
    },
    regions: [
        // overworld
        kokiriForest,
        lostWoods,
        lostWoodsBridge,
        sacredForestMeadow,
        hyruleField,
        marketEntrance,
        market,
        castleGrounds,
        templeOfTimeEntrance,
        templeOfTime,
        lonLonRanch,
        kakarikoVillage,
        graveyard,
        deathMountainTrail,
        deathMountainCrater,
        goronCity,
        zoraRiver,
        zoraDomain,
        zoraFountain,
        lakeHylia,
        gerudoValley,
        gerudoFortress,
        hauntedWasteland,
        desertColossus,


        // dungeons
        dekuTree,
        dodongoCavern,
        jabu,
        forestTemple,
        fireTemple,
        iceCavern,
        waterTemple,
        bottomOfTheWell,
        shadowTemple,
        gerudoTrainingGrounds,
        spiritTemple,
        ganonCastle,

        warpSongs
    ]
}));