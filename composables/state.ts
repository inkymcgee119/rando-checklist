
export const columns = ref(1);
export const columnsEntrances = ref(1);


export const useAppState = () => useState("appState", () => ({    
    games: [],
    selectedGame: null,
    notes: "",
    options: { },
    tagFilters: { },
    entranceOptions: { },
    regions: []
    
}));