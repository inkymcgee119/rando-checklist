class AppState {
    games: GameInfo[];
    selectedGame: GameInfo;

    notes: string;
    regions: Region[] = [];
    entranceRegions: Region[] = [];
    
    options: Options = {
                settings: {},
                tags: {},
                toggleSettings: {},
                toggleTags: {}
            };    
    entranceOptions: Options = {
                settings: {},
                tags: {},
                toggleSettings: {},
                toggleTags: {}
             };
}

class Options {
    settings: any;
    tags: any;
    toggleSettings: any;
    toggleTags: any;
}

// export const useAppState = () => useState("appState", () => ({    
//     games: [],
//     selectedGame: null,

//     notes: "",
//     regions: [],
//     entranceRegions: [],
    
//     options: {
//         settings: {},
//         tags: {},
//         toggleSettings: {},
//         toggleTags: {}
//      },
//     entranceOptions: { 
//         settings: {},
//         tags: {},
//         toggleSettings: {},
//         toggleTags: {}
//     }    
// }));

export const useAppState = () => useState("appState", () => (new AppState()));