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

            <div class="flex flex-col mx-1 grow" v-for="regionGroup in filteredRegionGroups">
                <div class="bg-slate-200 mb-3 rounded-md shadow-xl pb-2 select-none" v-for="region in regionGroup">

                    <div class="px-2 font-sans text-white rounded-t-md text-xl font-semibold text-left cursor-pointer"
                        :style="{ background: region.bgColor }" v-collapsible-header>
                        {{ region.name }}
                    </div>
                    <div>
                        <div v-for="(ent, idx) in region.entrances" class="flex flex-row justify-between px-2 my-1"
                            :class="{ 'border-b-2 border-slate-300': idx < region.entrances.length - 1, 'bg-yellow-400': ent.isStarred }"
                            @contextmenu.prevent="rightClickLocation(ent)">
                            <div class="font-semibold my-auto basis-1/2">
                                <Icon :name="getEntranceTypeByName(ent.type).icon"></Icon> <span
                                    v-if="getEntranceTypeByName(ent.type).addToAndFromToDescription">To</span>
                                {{ ent.name }}
                            </div>

                            <div class="basis-1/2 my-auto">
                                <dropdown v-model="ent.destination" toggler-class="rounded-md text-white text-sm"
                                    :style="{ background: region.dropdownColor ?? region.bgColor }"
                                    toggler-text="Select location"
                                    :groups="dropdownGroupsByType[appState.entranceOptions.settings.mixedPool ? 'all' : ent.type]"
                                    :include-clear="true" :include-search="true"
                                    @update="(item) => updateDropdown({ src: { region: region, entrance: ent }, dest: item })">
                                </dropdown>
                            </div>
                        </div>
                    </div>

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
    assignRegionCardColumns(columnsEntrances.value);

    window.addEventListener("resize", (e) => {
        assignColumnNumber(window.innerWidth);
    });
});

watch(appState.value.entranceOptions, () => save());

const totalChecks = computed(() => filteredRegions.value.reduce((acc, val) => acc + val.entrances.length, 0));
const totalChecked = computed(() => filteredRegions.value.reduce((acc, val) => acc + val.entrances.filter(x => x.destination).length, 0));

function rightClickLocation(ent) {
    ent.isStarred = !ent.isStarred;
    save();

    return false;
}

const filteredRegions = computed(() => {
    let result = [];

    if (!appState.value.selectedGame.entranceOptions)
        return result;

    let combinedSettings = { ...appState.value.selectedGame.entranceOptions.settings, ...appState.value.selectedGame.entranceOptions.toggleSettings };

    for (let region of appState.value.entranceRegions) {
        let r = { ...region };
        if (!r.entrances)
            continue;

        r.entrances = r.entrances.filter(ent => {
            let rowVisible = true;

            // filter settings
            if (combinedSettings && combinedSettings[ent.type] && !combinedSettings[ent.type].isHidden)
                rowVisible &= appState.value.entranceOptions.settings[ent.type];
            else
                rowVisible = false;


            // filter tags
            if (appState.value.selectedGame.entranceOptions.tags)
                for (let tag of Object.getOwnPropertyNames(appState.value.selectedGame.entranceOptions.tags)) {
                    if (appState.value.entranceOptions.tags[tag])
                        rowVisible &= ent.tags && !!ent.tags.find(x => stringCompareCaseInsensitive(x, tag));
                }

            // filter tags
            if (appState.value.selectedGame.entranceOptions.toggleTags)
                for (let tag of Object.getOwnPropertyNames(appState.value.selectedGame.entranceOptions.toggleTags)) {
                    if (!appState.value.selectedGame.entranceOptions.toggleTags[tag].ignore && appState.value.entranceOptions.toggleTags[tag])
                        rowVisible &= ent.tags && !!ent.tags.find(t => stringCompareCaseInsensitive(t, tag));
                }

            return rowVisible;
        });

        if (r.entrances.length > 0)
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
        if (!r.entrances)
            continue;

        r.entrances = r.entrances.filter(ent => {
            let searchFound = false;
            for (let term of searchTerm.value.split(' ').filter(x => x != ""))
                searchFound |= region.name.toUpperCase().indexOf(term.toUpperCase()) > -1 || ent.name.toUpperCase().indexOf(term.toUpperCase()) > -1;

            return searchFound;
        });

        if (r.entrances.length > 0) {
            result.push(r);
        }
    }


    return result;
});

// full entrance list
const filteredRegionEntranceList = computed(() => {
    let entrances = [];

    for (let region of appState.value.entranceRegions) {
        if (region.entrances) {
            let ents = region.entrances.filter(x => appState.value.entranceOptions.settings[x.type]);
            if (ents.length > 0) {
                entrances.push({
                    name: region.name,
                    entrances: ents
                });
            }
        }
    }

    return entrances;
});


// entrances grouped by type, used for dropdown
const dropdownGroupsByType = computed(() => {
    let result = [];

    for (let entType of Object.getOwnPropertyNames(appState.value.selectedGame.entranceOptions.settings)) {
        result[entType] = getDropdownGroupsByType(entType);
    }
    result["all"] = getDropdownGroupsByType("all");

    return result;
});


function getDropdownGroupsByType(entTypeName) {
    let groups = [];
    let entType = getEntranceTypeByName(entTypeName);

    for (let region of filteredRegionEntranceList.value) {
        if (region.entrances) {
            let ents = region.entrances.filter(ent => {
                let rowVisible = true;
                if (stringCompareCaseInsensitive(ent.type, entTypeName))
                    rowVisible |= true;
                if (entType.showAll)
                    rowVisible |= true;

                // mixed pool, all entrances included as long as the option is selected
                if (stringCompareCaseInsensitive(entTypeName, "all") && appState.value.entranceOptions.settings[ent.type])
                    rowVisible |= true;

                // filter tags
                if (appState.value.selectedGame.entranceOptions.toggleTags)
                    for (let tag of Object.getOwnPropertyNames(appState.value.selectedGame.entranceOptions.toggleTags)) {
                        if (!appState.value.selectedGame.entranceOptions.toggleTags[tag].ignore && appState.value.entranceOptions.toggleTags[tag])
                            rowVisible &= ent.tags && !!ent.tags.find(t => stringCompareCaseInsensitive(t, tag));
                    }

                return rowVisible;
            }).map(ent => ({
                description: getEntranceTypeByName(ent.type).addToAndFromToDescription ? `from ${ent.name}` : ent.name,
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
    let srcReg = appState.value.entranceRegions.find(x => stringCompareCaseInsensitive(x.name, srcRegion));
    let srcRegEnt = srcReg?.entrances.find(x => stringCompareCaseInsensitive(x.name, srcEnt) && x.type == srcEntDDItem.type);
    let srcRegEntType = getEntranceTypeByName(data.src.entrance.type);

    let destReg = appState.value.entranceRegions.find(x => stringCompareCaseInsensitive(x.name, destRegion));
    let destRegEnt = destReg?.entrances.find(x => stringCompareCaseInsensitive(x.name, destEnt) && x.type == destEntDDItem.type);
    let destRegEntType = getEntranceTypeByName(data.dest.type);

    if (destRegEnt && srcEntDDItem)
        srcRegEnt.destination = { ...destEntDDItem, value: getEntranceDescription(destEntDDItem) };

    // A->B becomes C->D, D->C also becomes B->A, assign the inverse if coupled entrances
    if (appState.value.entranceOptions.toggleSettings.coupled &&
        (srcRegEntType.isBidirectional || destRegEntType.isBidirectional) &&
        !(srcRegEntType.isUnidirectional || destRegEntType.isUnidirectional) ) {

        srcRegionDDItem = dropdownItems.find(r => stringCompareCaseInsensitive(r.description, destRegion));
        srcEntDDItem = srcRegionDDItem?.items.find(x => stringCompareCaseInsensitive(x.name, destEnt));

        destRegionDDItem = dropdownItems.find(r => stringCompareCaseInsensitive(r.description, srcRegion));
        destEntDDItem = destRegionDDItem?.items.find(x => stringCompareCaseInsensitive(x.name, srcEnt));

        destRegEnt.destination = { ...destEntDDItem, value: getEntranceDescription(destEntDDItem) };
    }
    save();
}

function assignColumnNumber(width) {
    let prevColNum = columnsEntrances.value;

    // responsive sizes configured in tailwind
    if (width >= 2058)
        columnsEntrances.value = 3;
    else if (width >= 1715)
        columnsEntrances.value = 3;
    else if (width >= 1372)
        columnsEntrances.value = 2;
    else if (width >= 1029)
        columnsEntrances.value = 2;
    else if (width >= 686)
        columnsEntrances.value = 1;
    else
        columnsEntrances.value = 1;

    if (columnsEntrances.value != prevColNum) {
        assignRegionCardColumns(columnsEntrances.value);
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
                runningHeight += cardHeight; // else add to current column

            region.colNum = currCol; // assign col to be used by layout
        }

        // there was overflow, increase size and try again
        if (currCol >= colNum)
            height += 2;
    } while (currCol >= colNum)

    assignRegionGroups();
}

function calculateRegionCardHeight(region) {
    return region.entrances ? region.entrances.length + 1 : 0;
}




function assignRegionGroups() {
    //group by colnum
    let results = [];
    for (let r of searchResults.value) {
        if (results[r.colNum])
            results[r.colNum].push(r);
        else
            results[r.colNum] = [r];
    }

    filteredRegionGroups.value = results;
};


function getEntranceDescription(ddItem) {
    let entType = getEntranceTypeByName(ddItem.type);
    if (entType.hideRegionLabel)
        return ddItem.name;
    else if (entType.addToAndFromToDescription)
        return `${ddItem.region}, from ${ddItem.name}`;
    else
        return `${ddItem.region}, ${ddItem.name}`;
}

watch(searchResults, () => {
    assignRegionCardColumns(columnsEntrances.value);
});
watch(columns, () => {
    assignRegionCardColumns(columnsEntrances.value);
});
</script>