<template>
    <div class="pb-64">
        <Filters v-model="appState.options" :settings="appState.selectedGame.options.settings"
            :tags="appState.selectedGame.options.tags" @reset="reset" />

        <div class="flex flex-row my-2 mx-1 p-2 bg-white rounded-lg">
            <div class="w-full flex-shrink">
                <input type="text" placeholder="Search" class="w-full p-1" v-model="searchTerm" />
            </div>
            <div class="ml-2 flex-grow text-xl">{{ totalChecked }}/{{ totalChecks }}</div>
        </div>

        <div class="my-2 flex flex-row flex-nowrap card-container">

            <!-- no results -->
            <div v-if="searchResults.length == 0" class="w-full text-white text-center font-sans">
                No Results
            </div>

            <!-- region layout -->
            <div class="flex flex-col mx-1 grow" v-for="regionGroup in filteredRegionGroups">
                <div class="bg-slate-200 mb-3 rounded-md shadow-xl pb-2 region-card select-none"
                    v-for="region in regionGroup">
                    <RegionCard :region="region"></RegionCard>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const appState = useAppState();
const filteredRegionGroups = ref([]);
const searchTerm = useDebouncedRef("", 200);

onMounted(() => {
    assignColumnNumber(window.innerWidth);
    assignRegionCardColumns(columns.value);

    window.addEventListener("resize", (e) => {
        assignColumnNumber(window.innerWidth);
    });
});

const totalChecks = computed(() => filteredRegions.value.reduce((acc, val) => acc + val.locations.reduce((acc2, x) => acc2 + (x.count ? x.count : 1), 0), 0));
const totalChecked = computed(() => filteredRegions.value.reduce((acc, val) => acc + val.locations.filter(x => x.isChecked).reduce((acc2, x) => acc2 + (x.count ? x.count : 1), 0), 0));

const filteredRegions = computed(() => {
    let result = [];
    if (appState.value.regions) {
        for (let region of appState.value.regions) {
            let r = { ...region }; // to prevent infinite loop

            r.locations = r.locations.filter(loc => {
                let rowVisible = true;

                // filter location types
                if (appState.value.selectedGame.options.settings)
                    if (appState.value.selectedGame.options.settings[loc.type]) {
                        let filterType = appState.value.selectedGame.options.settings[loc.type].filterWith ? appState.value.selectedGame.options.settings[loc.type].filterWith : loc.type;
                        rowVisible &= !!appState.value.options.settings[filterType];
                    }
                    else
                        rowVisible = false;

                if (appState.value.selectedGame.options.toggleSettings)
                    if (appState.value.selectedGame.options.toggleSettings[loc.type]) {
                        let filterType = appState.value.selectedGame.options.toggleSettings[loc.type].filterWith ? appState.value.selectedGame.options.toggleSettings[loc.type].filterWith : loc.type;
                        rowVisible &= !!appState.value.options.toggleSettings[filterType];
                    }
                    else
                        rowVisible = false;


                // filter tags
                if (appState.value.selectedGame.options.tags)
                    for (let tag of Object.getOwnPropertyNames(appState.value.selectedGame.options.tags)) {
                        if (appState.value.options.tags[tag])
                            rowVisible &= !!loc.tags.find(x => stringCompareCaseInsensitive(x, tag));
                    }

                if (appState.value.selectedGame.options.toggleTags)
                    for (let tag of Object.getOwnPropertyNames(appState.value.selectedGame.options.toggleTags)) {
                        if (appState.value.options.toggleTags[tag])
                            rowVisible &= loc.tags && !!loc.tags.find(x => stringCompareCaseInsensitive(x, tag));
                    }

                // master quest filter
                if (r.hasMQ) {
                    if (!r.showMQ)
                        rowVisible &= !!loc.tags.find(x => stringCompareCaseInsensitive(x, "vanilla"));
                    else
                        rowVisible &= !!loc.tags.find(x => stringCompareCaseInsensitive(x, "mq"));
                }

                return rowVisible;
            });

            if (r.locations.length > 0) {
                result.push(r);
            }
        }
    }

    return result;
});

const searchResults = computed(() => {
    if (!searchTerm.value)
        return filteredRegions.value;

    let result = [];
    for (let region of filteredRegions.value) {
        let r = { ...region }; // to prevent infinite loop

        r.locations = r.locations.filter(loc => {
            let searchFound = false;
            for (let term of searchTerm.value.split(' ').filter(x => x != ""))
                searchFound |= r.name.toUpperCase().indexOf(term.toUpperCase()) > -1 || loc.title.toUpperCase().indexOf(term.toUpperCase()) > -1;

            return searchFound;
        });

        if (r.locations.length > 0) {
            result.push(r);
        }
    }

    return result;
});

watch(searchResults, () => {
    assignRegionCardColumns(columns.value);
});
watch(columns, () => {
    assignRegionCardColumns(columns.value);
});

function assignRegionGroups() {
    let results = [];
    for (let r of searchResults.value) {
        if (results[r.colNum])
            results[r.colNum].push(r);
        else
            results[r.colNum] = [r];
    }

    filteredRegionGroups.value = results;
};

function assignColumnNumber(width) {
    let prevColNum = columns.value;

    // responsive sizes configured in tailwind
    if (width >= 2058)
        columns.value = appState.value.selectedGame?.columns?.xxxl ?? 6; //3xl
    else if (width >= 1715)
        columns.value = appState.value.selectedGame?.columns?.xxl ?? 5; //2xl
    else if (width >= 1372)
        columns.value = appState.value.selectedGame?.columns?.xl ?? 4; //xl
    else if (width >= 1029)
        columns.value = appState.value.selectedGame?.columns?.lg ?? 3; //lg
    else if (width >= 686)
        columns.value = appState.value.selectedGame?.columns?.md ?? 2; //md
    else
        columns.value = appState.value.selectedGame?.columns?.sm ?? 1; //sm

    if (columns.value != prevColNum) {
        assignRegionCardColumns(columns.value);
    }

}

// hacky attempt to balance the height by distributing the region cards evenly by height
function assignRegionCardColumns(colNum) {

    if (!searchResults.value || searchResults.value.length == 0) {
        filteredRegionGroups.value = [];
        return;
    }
    let height = calculateRegionCardHeight(searchResults.value[0]);

    let currCol = 0;
    do {
        currCol = 0;
        let runningHeight = 0;

        for (let region of searchResults.value) {
            let cardHeight = calculateRegionCardHeight(region);

            // if overflowing, start new col
            if (runningHeight + cardHeight > height) {
                currCol++;
                runningHeight = cardHeight;
            }
            else
                runningHeight += cardHeight; // otherwise add to the current column

            region.colNum = currCol; // assign col to be used by layout
        }

        // there was overflow, increase size and try again
        if (currCol >= colNum)
            height += 2;
    } while (currCol >= colNum)

    assignRegionGroups();
}

function calculateRegionCardHeight(region) {
    return region.locations.length + 1;
}

function filtersTagClick(tagName) {

    for (let tag of Object.keys(appState.value.selectedGame.options.tags)) {
        if (tagName != tag)
            appState.value.tagFilters[tag] = false;
        else
            appState.value.tagFilters[tag] = !appState.value.tagFilters[tag];
    }

    appState.value.regions = [...appState.value.regions];
}
</script>