<template>
    <filters :options="appState.entranceOptions" :config="appState.gameInfo.games[0].entranceOptions"></filters>

    <div class="flex flex-row my-5">
        <!-- no results -->
        <div v-if="filteredRegions.length == 0" class="w-full text-white text-center font-sans">
            No Results, Select Your Options
        </div>

        <div class="flex flex-col mx-1 grow" v-for="regionGroup in filteredRegionGroups">
            <div class="bg-slate-200 mb-3 rounded-md shadow-xl pb-2 select-none" v-for="region in regionGroup">

                <div class="px-2 font-sans text-white rounded-t-md text-xl font-semibold text-left cursor-pointer"
                    :style="{ background: region.bgColor }" v-collapsible-header>
                    {{ region.name }}
                </div>
                <div>
                    <div v-for="(ent, idx) in region.entrances" class="flex flex-row justify-between px-2 my-1"
                        :class="{ 'border-b-2 border-slate-300': idx < region.entrances.length - 1 }">
                        <div class="font-semibold my-auto basis-1/2">
                            <Icon :name="getEntranceIcon(ent.type)"></Icon>
                            <span v-if="stringCompareCaseInsensitive(ent.type, 'overworld')">To </span>{{ ent.name }}
                        </div>

                        <div class="basis-1/2 my-auto">
                            <dropdown v-model="ent.destination" :metadata="{ region: region, entrance: ent }"
                                toggler-class="rounded-md text-white" :style="{ background: region.bgColor }"
                                toggler-text="Select location"
                                :groups="dropdownGroupsByType[appState.entranceOptions.mixedPool ? 'all' : ent.type]"
                                :items="[{ value: '', description: 'Clear Value' }]" @update="updateDropdown">
                            </dropdown>
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

onMounted(() => {

    assignColumnNumber(window.innerWidth);
    assignRegionCardColumns(columnsEntrances.value);

    window.addEventListener("resize", (e) => {
        assignColumnNumber(window.innerWidth);
    });

});

const filteredRegions = computed(() => {
    let result = [];

    for (let region of appState.value.regions) {
        let r = { ...region };
        if (!r.entrances)
            continue;

        r.entrances = r.entrances.filter(ent => {
            let rowVisible = true;

            if (appState.value.entranceTypes[ent.type])
                rowVisible &= appState.value.entranceOptions[ent.type];
            else
                rowVisible = false;

            return rowVisible;
        });

        if (r.entrances.length > 0)
            result.push(r);
    }


    return result;
});

// full entrance list
const filteredRegionEntranceList = computed(() => {
    let entrances = [];

    for (let region of appState.value.regions) {
        if (region.entrances) {
            let ents = region.entrances.filter(x => appState.value.entranceOptions[x.type]);
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

    for (let entType of Object.getOwnPropertyNames(appState.value.entranceTypes)) {
        result[entType] = getDropdownGroupsByType(entType);
    }
    result["all"] = getDropdownGroupsByType("all");

    return result;
});


function getDropdownGroupsByType(entType) {
    let groups = [];

    //    for (let region of appState.value.regions) {
    for (let region of filteredRegionEntranceList.value) {
        if (region.entrances) {
            let ents = region.entrances.filter(x => {
                if (stringCompareCaseInsensitive(x.type, entType))
                    return true;
                if (stringCompareCaseInsensitive(entType, "owl"))
                    return true;
                if (stringCompareCaseInsensitive(entType, "song"))
                    return true;

                // mixed pool, all entrances included as long as the option is selected
                if (stringCompareCaseInsensitive(entType, "all") && appState.value.entranceOptions[x.type])
                    return true;

                return false;
            }).map(x => ({
                value: getEntranceDescription(x.type, region.name, x.name),
                description: stringCompareCaseInsensitive(x.type, "overworld") ? `To ${x.name}` : x.name,
                icon: getEntranceIcon(x.type),
                region: region.name,
                name: x.name,
                type: x.type
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


function updateDropdown(meta, selectedEnt) {
    if (!selectedEnt.value)
        return;

    // one way
    if (stringCompareCaseInsensitive(meta.entrance.type, "owl") || stringCompareCaseInsensitive(meta.entrance.type, "song"))
        return;

    // A->B becomes C->D, D->C also becomes B->A, assign the inverse if coupled entrances
    // only do this if at least one is an overworld entrance
    if (!appState.value.entranceOptions.decoupled &&
        (stringCompareCaseInsensitive(meta.entrance.type, "overworld") ||
            stringCompareCaseInsensitive(selectedEnt.type, "overworld"))) {

        let srcRegion = meta.region.name;
        let srcEnt = meta.entrance.name;
        let destRegion = selectedEnt.region;
        let destEnt = selectedEnt.name;

        // data is backwards for overworld entrances
        if (stringCompareCaseInsensitive(meta.entrance.type, "overworld")) {
            let temp = srcRegion;
            srcRegion = srcEnt;
            srcEnt = temp;
        }
        if (stringCompareCaseInsensitive(selectedEnt.type, "overworld")) {
            let temp = destRegion;
            destRegion = destEnt;
            destEnt = temp;
        }


        // find in entrance list
        let entListRegion = filteredRegionEntranceList.value.find(r => stringCompareCaseInsensitive(r.name, srcRegion));
        let entListItem = entListRegion?.entrances.find(x => stringCompareCaseInsensitive(x.name, srcEnt));

        // assign in regions
        let reg = appState.value.regions.find(x => stringCompareCaseInsensitive(x.name, destRegion));
        let regEnt = reg?.entrances.find(x => stringCompareCaseInsensitive(x.name, destEnt));

        if (regEnt && entListItem)
            regEnt.destination = getEntranceDescription(entListItem.type, srcRegion, srcEnt);
    }

    save(appState.value);
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
    for (let r of filteredRegions.value) {
        if (results[r.colNum])
            results[r.colNum].push(r);
        else
            results[r.colNum] = [r];
    }

    filteredRegionGroups.value = results;
};


function getEntranceDescription(type, regionDesc, entDesc) {
    return stringCompareCaseInsensitive(type, "overworld") ? `${entDesc}, from ${regionDesc}` : stringCompareCaseInsensitive(type, "dungeon") ? entDesc : `${regionDesc}, ${entDesc}`;
}

watch(filteredRegions, () => {
    assignRegionCardColumns(columnsEntrances.value);
});
watch(columns, () => {
    assignRegionCardColumns(columnsEntrances.value);
});
</script>