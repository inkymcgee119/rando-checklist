
export const columns = ref(1);
export const columnsEntrances = ref(1);


export const useAppState = () => useState("appState", () => ({    
    games: [],
    selectedGame: {},
    notes: "",
    options: {
        item: true,
        skulltula: false,
        shop: false,
        scrub: false,
        cow: false,
        rupee: false,
        pot: false,
        crate: false,
        beehive: false
    },
    tagFilters: {
        child: false,
        adult: false,
        grotto: false,
        bean: false,
        night: false
    },
    entranceOptions: {
        dungeon: false,
        interior: false,
        overworld: false,
        grotto: false,
        owl: false,
        song: false,
        mixedPool: false,
        decoupled: false
    },
    regions: [],
    tags: [],
    locationTypes: [],
    entranceTypes: []
}));