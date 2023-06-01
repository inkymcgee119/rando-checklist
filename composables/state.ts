export const useAppState = () => useState("appState", () => ({    
    games: [],
    selectedGame: null,

    notes: "",
    regions: [],
    entranceRegions: [],
    
    options: {
        settings: {},
        tags: {},
        toggleSettings: {},
        toggleTags: {}
     },
    entranceOptions: { 
        settings: {},
        tags: {},
        toggleSettings: {},
        toggleTags: {}
    }    
}));