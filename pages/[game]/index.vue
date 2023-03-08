<template>
    <div>
        <filters :options="appState.options" :tags="appState.tagFilters" :config="filterConfig"
            @tag-click="filtersTagClick"></filters>
        <div class="my-2 flex flex-row flex-nowrap card-container">

            <!-- no results -->
            <div v-if="filteredRegions.length == 0" class="w-full text-white text-center font-sans">
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
const filterConfig = ref({});
const route = useRoute();



watchEffect(() => {
    filterConfig.value = {
        options: Object.keys(appState.value.locationTypes).map(key => appState.value.locationTypes[key]).filter(x => x.hasFilter),
        tags: Object.keys(appState.value.tags).map(key => appState.value.tags[key]).filter(x => x.hasFilter)
    };
});

onMounted(() => {
    filterConfig.value = {
        options: Object.keys(appState.value.locationTypes).map(key => appState.value.locationTypes[key]).filter(x => x.hasFilter),
        tags: Object.keys(appState.value.tags).map(key => appState.value.tags[key]).filter(x => x.hasFilter)
    };
    assignColumnNumber(window.innerWidth);
    assignRegionCardColumns(columns.value);

    window.addEventListener("resize", (e) => {
        assignColumnNumber(window.innerWidth);
    });

});

const filteredRegions = computed(() => {
    let result = [];
    let total = 0;
    if (appState.value.regions) {
        for (let region of appState.value.regions) {
            let r = { ...region }; // to prevent infinite loop

            r.locations = region.locations.filter(loc => {
                let rowVisible = true;

                // filter location types
                if (appState.value.locationTypes[loc.type]) {
                    let filterType = appState.value.locationTypes[loc.type].filterWith ? appState.value.locationTypes[loc.type].filterWith : loc.type;
                    rowVisible &= !!appState.value.options[filterType];
                }
                else {
                    rowVisible = false;
                }

                // filter tags
                for (let tag of Object.getOwnPropertyNames(appState.value.tags)) {
                    if (appState.value.tags[tag].hasFilter) {
                        if (appState.value.tagFilters[tag])
                            rowVisible &= !!loc.tags.find(x => stringCompareCaseInsensitive(x, tag));
                    }
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
                total += r.locations.reduce((acc, x) => acc + (x.count ? x.count : 1), 0);
                console.log("Total:" + total);
            }
        }
    }

    return result;
});

watch(filteredRegions, () => {
    assignRegionCardColumns(columns.value);
});
watch(columns, () => {
    assignRegionCardColumns(columns.value);
});

function assignRegionGroups() {
    let results = [];
    for (let r of filteredRegions.value) {
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
        columns.value = 6;
    else if (width >= 1715)
        columns.value = 5;
    else if (width >= 1372)
        columns.value = 4;
    else if (width >= 1029)
        columns.value = 3;
    else if (width >= 686)
        columns.value = 2;
    else
        columns.value = 1;

    if (columns.value != prevColNum) {
        assignRegionCardColumns(columns.value);
    }

}

// hacky attempt to balance the height by distributing the region cards evenly by height
function assignRegionCardColumns(colNum) {

    if (!filteredRegions.value || filteredRegions.value.length == 0) {
        filteredRegionGroups.value = [];
        return;
    }
    let height = calculateRegionCardHeight(filteredRegions.value[0]);

    let currCol = 0;
    do {
        currCol = 0;
        let runningHeight = 0;

        for (let region of filteredRegions.value) {
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

    for (let tag of Object.keys(appState.value.tags)) {
        if (tagName != tag)
            appState.value.tagFilters[tag] = false;
        else
            appState.value.tagFilters[tag] = !appState.value.tagFilters[tag];
    }

    appState.value.regions = [...appState.value.regions];
}
</script>