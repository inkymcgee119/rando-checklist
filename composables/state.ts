
export const columns = ref(1);
export const columnsEntrances = ref(1);


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
    },
    
}));