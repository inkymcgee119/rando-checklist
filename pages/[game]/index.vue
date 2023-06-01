<template>
    <div class="pb-64">
        <Filters v-model="appState.options" :settings="appState.selectedGame.options.settings"
            :tags="appState.selectedGame.options.tags" @reset="reset" />

        <!-- search bar -->
        <div class="flex flex-row my-2 mx-1 p-2 bg-white rounded-lg">
            <div class="w-full flex-shrink">
                <input type="text" placeholder="Search" class="w-full p-1" v-model="searchTerm" />
            </div>
            <div class="ml-2 flex-grow text-xl">{{ totalChecked }}/{{ totalChecks }}</div>
        </div>

        <!-- region layout -->
        <div class="my-2 flex flex-row flex-nowrap card-container">
            <!-- no results -->
            <div v-if="searchResults.length == 0" class="w-full text-white text-center font-sans">
                No Results
            </div>
            
            <div class="flex flex-col mx-1 grow" v-for="col in cardColumns">
                <div class="bg-slate-200 mb-3 rounded-md shadow-xl pb-2 region-card select-none" v-for="region in col">
                    <ItemCard :region="region"></ItemCard>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const appState = useAppState();
const cardColumns = ref([]);
const searchTerm = useDebouncedRef("", 200);
const columns = ref(1);

onMounted(() => {
    assignColumnNumber(window.innerWidth);

    window.addEventListener("resize", (e) => {
        assignColumnNumber(window.innerWidth);
    });
});

const totalChecks = computed(() => filteredRegions.value.reduce((acc, val) => acc + val.items.reduce((acc2, x) => acc2 + (x.count ? x.count : 1), 0), 0));
const totalChecked = computed(() => filteredRegions.value.reduce((acc, val) => acc + val.items.filter(x => x.isChecked).reduce((acc2, x) => acc2 + (x.count ? x.count : 1), 0), 0));

const filteredRegions = computed(() => {
    let result = [];
    if (appState.value.regions) {
        for (let region of appState.value.regions) {
            let r = { ...region }; // to prevent infinite loop

            r.items = r.items.filter(loc => {
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

            if (r.items.length > 0) {
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

        r.items = r.items.filter(loc => {
            let searchFound = false;
            for (let term of searchTerm.value.split(' ').filter(x => x != ""))
                searchFound |= r.name.toUpperCase().indexOf(term.toUpperCase()) > -1 || loc.name.toUpperCase().indexOf(term.toUpperCase()) > -1;

            return searchFound;
        });

        if (r.items.length > 0) {
            result.push(r);
        }
    }

    return result;
});

function assignColumnNumber(width) {
    // responsive sizes configured in tailwind
    if (width >= constants.ResponsiveBreakPoints.xxxl)
        columns.value = appState.value.selectedGame?.columns?.xxxl ?? 6;
    else if (width >= constants.ResponsiveBreakPoints.xxl)
        columns.value = appState.value.selectedGame?.columns?.xxl ?? 5;
    else if (width >= constants.ResponsiveBreakPoints.xl)
        columns.value = appState.value.selectedGame?.columns?.xl ?? 4;
    else if (width >= constants.ResponsiveBreakPoints.lg)
        columns.value = appState.value.selectedGame?.columns?.lg ?? 3;
    else if (width >= constants.ResponsiveBreakPoints.md)
        columns.value = appState.value.selectedGame?.columns?.md ?? 2;
    else
        columns.value = appState.value.selectedGame?.columns?.sm ?? 1;
}


watch(searchResults, () => {
    cardColumns.value = assignCardColumns(searchResults.value, columns.value);
});
watch(columns, () => {
    cardColumns.value = assignCardColumns(searchResults.value, columns.value);
});
</script>