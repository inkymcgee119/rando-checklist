<template>
    <div v-if="appState.selectedGame.entranceOptions">
        <Filters v-model="appState.entranceOptions" :settings="appState.selectedGame.entranceOptions.settings"
            :toggle-settings="appState.selectedGame.entranceOptions.toggleSettings"
            :toggle-tags="appState.selectedGame.entranceOptions.toggleTags" @reset="reset" />

        <div class="flex flex-row my-2 mx-1 p-2 bg-white rounded-lg">
            <div class="w-full flex-shrink">
                <input type="text" placeholder="Search" class="w-full p-1" v-model="searchTerm" />
            </div>
            <div class="ml-2 flex-grow text-xl whitespace-nowrap">Total {{ totalChecked }}/{{ totalChecks }}</div>
        </div>

        <div class="flex flex-row my-2">
            <!-- no results -->
            <div v-if="searchResults.length == 0" class="w-full text-white text-center font-sans">
                No Results
            </div>

            <div class="flex flex-col mx-1 grow" v-for="col in cardColumns">
                <div v-for="region in col">
                    <EntranceCard :region="region" :dropdown-groups="dropdownGroupsByType" @update="updateDropdown">
                    </EntranceCard>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

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

watch(appState.value.entranceOptions, () => save());

const totalChecks = computed(() => filteredRegions.value.reduce((acc, val) => acc + val.items.length, 0));
const totalChecked = computed(() => filteredRegions.value.reduce((acc, val) => acc + val.items.filter(x => x.destination).length, 0));

const filteredRegions = computed(() => {
    let result = [];

    if (!appState.value.selectedGame.entranceOptions)
        return result;

    let combinedSettings = { ...appState.value.selectedGame.entranceOptions.settings, ...appState.value.selectedGame.entranceOptions.toggleSettings };

    for (let region of appState.value.entranceRegions) {
        let r = { ...region };
        if (!r.items)
            continue;

        r.items = r.items.filter(ent => {
            let rowVisible = 1;

            // filter settings
            if (combinedSettings && combinedSettings[ent.type] && !combinedSettings[ent.type].isHidden)
                rowVisible &= appState.value.entranceOptions.settings[ent.type];
            else
                rowVisible = 0;

            // filter tags
            if (appState.value.selectedGame.entranceOptions.tags)
                for (let tag of Object.getOwnPropertyNames(appState.value.selectedGame.entranceOptions.tags)) {
                    if (appState.value.entranceOptions.tags[tag])
                        rowVisible &= ent.tags && !!ent.tags.find(x => stringCompareCaseInsensitive(x, tag)) ? 1 : 0;
                }

            // filter tags
            if (appState.value.selectedGame.entranceOptions.toggleTags)
                for (let tag of Object.getOwnPropertyNames(appState.value.selectedGame.entranceOptions.toggleTags)) {
                    if (!appState.value.selectedGame.entranceOptions.toggleTags[tag].ignore && appState.value.entranceOptions.toggleTags[tag])
                        rowVisible &= ent.tags && !!ent.tags.find(t => stringCompareCaseInsensitive(t, tag)) ? 1 : 0;
                }

            return rowVisible;
        });

        if (r.items.length > 0)
            result.push(r);
    }

    return result;
});

const searchResults = computed(() => {
    if (!searchTerm.value)
        return filteredRegions.value;

    let result = [];
    for (let region of filteredRegions.value) {
        let r = { ...region };
        if (!r.items)
            continue;

        r.items = r.items.filter(ent => {
            let searchFound = 0;
            for (let term of searchTerm.value.split(' ').filter(x => x != ""))
                searchFound |= region.name.toUpperCase().indexOf(term.toUpperCase()) > -1 || ent.name.toUpperCase().indexOf(term.toUpperCase()) > -1 ? 1 : 0;

            return searchFound;
        });

        if (r.items.length > 0) {
            result.push(r);
        }
    }

    return result;
});

// full entrance list
const filteredRegionEntranceList = computed(() => {
    let items = [];
    for (let region of appState.value.entranceRegions) {
        if (region.items) {
            let ents = region.items.filter(x => appState.value.entranceOptions.settings[x.type]);
            if (ents.length > 0) {
                items.push({
                    name: region.name,
                    items: ents
                });
            }
        }
    }

    return items;
});


// items grouped by type, used for dropdown
const dropdownGroupsByType = computed(() => {
    let result = [];

    for (let entType of Object.getOwnPropertyNames(appState.value.selectedGame.entranceOptions.settings)) {
        result[entType] = getDropdownGroupsByType(entType);
    }
    result["all"] = getDropdownGroupsByType("all");

    return result;
});


function getDropdownGroupsByType(entTypeName):  DropdownItemGroup[] {
    let groups = [];
    let entType = getEntranceTypeByName(entTypeName);

    for (let region of filteredRegionEntranceList.value) {
        if (region.items) {
            let ents = region.items.filter(ent => {
                let rowVisible = 0;
                if (stringCompareCaseInsensitive(ent.type, entTypeName))
                    rowVisible |= 1;
                if (entType.showAll)
                    rowVisible |= 1;

                // mixed pool, all items included as long as the option is selected
                if (stringCompareCaseInsensitive(entTypeName, "all") && appState.value.entranceOptions.settings[ent.type])
                    rowVisible |= 1;

                // filter tags
                if (appState.value.selectedGame.entranceOptions.toggleTags)
                    for (let tag of Object.getOwnPropertyNames(appState.value.selectedGame.entranceOptions.toggleTags)) {
                        if (!appState.value.selectedGame.entranceOptions.toggleTags[tag].ignore && appState.value.entranceOptions.toggleTags[tag])
                            rowVisible &= ent.tags && !!ent.tags.find(t => stringCompareCaseInsensitive(t, tag)) ? 1 : 0;
                    }

                return rowVisible;
            }).map(ent => ({
                description: ent.name,
                icon: getEntranceTypeByName(ent.type).icon,
                region: region.name,
                name: ent.name,
                type: ent.type
            }));

            if (ents.length > 0) {
                groups.push({
                    description: region.name,
                    items: ents
                });
            }
        }
    }

    return groups;
}

function updateDropdown(data) {
    // clear value
    if (!data || !data.dest)
        return;

    let srcRegion = data.src.region.name;
    let srcEnt = data.src.entrance.name;
    let destRegion = data.dest.region;
    let destEnt = data.dest.name;

    // find in entrance list
    let dropdownItems = getDropdownGroupsByType("all");
    let srcRegionDDItem = dropdownItems.find(r => stringCompareCaseInsensitive(r.description, srcRegion));
    let srcEntDDItem = srcRegionDDItem?.items.find(x => stringCompareCaseInsensitive(x.name, srcEnt));

    let destRegionDDItem = dropdownItems.find(r => stringCompareCaseInsensitive(r.description, destRegion));
    let destEntDDItem = destRegionDDItem?.items.find(x => stringCompareCaseInsensitive(x.name, destEnt));

    // assign in regions    
    let srcRegEnt = getEntrance(srcRegion, srcEnt, srcEntDDItem.type);
    let srcRegEntType = getEntranceTypeByName(data.src.entrance.type);
    
    let destRegEnt = getEntrance(destRegion, destEnt, destEntDDItem.type);
    let destRegEntType = getEntranceTypeByName(data.dest.type);

    if (destRegEnt && srcEntDDItem)
        srcRegEnt.destination = { ...destEntDDItem, value: getEntranceDescription(destEntDDItem) };

    // A->B becomes C->D, D->C also becomes B->A, assign the inverse if coupled items
    if (appState.value.entranceOptions.toggleSettings.coupled &&
        (srcRegEntType.isBidirectional || destRegEntType.isBidirectional) &&
        !(srcRegEntType.isUnidirectional || destRegEntType.isUnidirectional)) {

        srcRegionDDItem = dropdownItems.find(r => stringCompareCaseInsensitive(r.description, destRegion));
        srcEntDDItem = srcRegionDDItem?.items.find(x => stringCompareCaseInsensitive(x.name, destEnt));

        destRegionDDItem = dropdownItems.find(r => stringCompareCaseInsensitive(r.description, srcRegion));
        destEntDDItem = destRegionDDItem?.items.find(x => stringCompareCaseInsensitive(x.name, srcEnt));

        destRegEnt.destination = { ...destEntDDItem, value: getEntranceDescription(destEntDDItem) };
    }

    save();
}

function assignColumnNumber(width) {
    // responsive sizes configured in tailwind
    if (width >= constants.ResponsiveBreakPoints.xxl)
        columns.value = 3;
    else if (width >= constants.ResponsiveBreakPoints.lg)
        columns.value = 2;
    else
        columns.value = 1;
}

function getEntranceDescription(ddItem) {
    let entType = getEntranceTypeByName(ddItem.type);
    if (entType.hideRegionLabel)
        return ddItem.name;
    else
        return `${ddItem.region}, ${ddItem.name}`;
}

watch(searchResults, () => {
    cardColumns.value = assignCardColumns(searchResults.value, columns.value);
});
watch(columns, () => {
    cardColumns.value = assignCardColumns(searchResults.value, columns.value);
});
</script>