<template>
    <div class="bg-slate-200 rounded-md shadow-xl mt-2 ml-1 mr-1 pb-2">
        <div class="rounded-t-md text-xl font-sans font-semibold text-left px-2 mb-2 text-white bg-neutral-500">
            Entrance Randomizer Options
        </div>
        <div class="flex flex-row">
            <div class="ml-2 my-auto">
                <label class="font-sans font-semibold">Randomizer options</label>
            </div>
            <div class="grow">
                <button class="btn-option" :class="{ 'opacity-50': !appState.entranceOptions.dungeons }"
                    @click="appState.entranceOptions.dungeons = !appState.entranceOptions.dungeons">Dungeons<Icon
                        :name="EntranceType.dungeon.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.entranceOptions.interiors }"
                    @click="appState.entranceOptions.interiors = !appState.entranceOptions.interiors">Interiors<Icon
                        :name="EntranceType.interior.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.entranceOptions.overworld }"
                    @click="appState.entranceOptions.overworld = !appState.entranceOptions.overworld">Overworld<Icon
                        :name="EntranceType.overworld.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.entranceOptions.grottos }"
                    @click="appState.entranceOptions.grottos = !appState.entranceOptions.grottos">Grottos<Icon
                        :name="EntranceType.grotto.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.entranceOptions.owls }"
                    @click="appState.entranceOptions.owls = !appState.entranceOptions.owls">Owls<Icon
                        :name="EntranceType.owl.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.entranceOptions.songs }"
                    @click="appState.entranceOptions.songs = !appState.entranceOptions.songs">Warp Songs<Icon
                        :name="EntranceType.song.icon"></Icon></button>

                <span class="font-sans font-semibold">
                    Mix entrance pools <toggle-switch v-model="appState.entranceOptions.mixedPool"></toggle-switch>
                </span>
                <span class="font-sans font-semibold">
                    Decouple entrances <toggle-switch v-model="appState.entranceOptions.decoupled"></toggle-switch>
                </span>
            </div>
        </div>

    </div>
    <div class="flex flex-row my-5">
        <!-- no results -->
        <div v-if="filteredRegions.length == 0" class="w-full text-white text-center font-sans">
            No Results, Select Your Options
        </div>

        <div class="flex flex-col mx-1 grow" v-for="regionGroup in filteredRegionGroups">
            <div class="bg-slate-200 mb-3 rounded-md shadow-xl pb-2 select-none" v-for="region in regionGroup">

                <div class="px-2 font-sans text-white bg-green-600 rounded-t-md text-xl font-semibold text-left cursor-pointer"
                    :class="region.bgColor" @click="clickHeader($event, region)">
                    {{ region.name }}
                </div>
                <div style="transition: max-height 200ms; overflow: hidden;">
                    <div v-for="(ent, idx) in region.entrances" class="flex flex-row justify-between px-2 my-1"
                        :class="{ 'border-b-2 border-slate-300': idx < region.entrances.length - 1 }">
                        <div class="font-semibold my-auto basis-1/2">
                            <Icon :name="ent.type.icon"></Icon>
                            {{ ent.name }}
                        </div>

                        <div class="basis-1/2 my-auto">
                            <custom-dropdown v-model="ent.destination" :metadata="{ region: region, entrance: ent }"
                                :toggler-class="`${region.bgColor} rounded-md text-white`"
                                toggler-text="Select location"
                                :groups="entranceListByType[appState.entranceOptions.mixedPool ? 'all' : ent.type.name]"
                                :items="[{ value: '', description: 'Clear Value' }]"
                                @update="updateDropdown"></custom-dropdown>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>

</template>

<script setup>

const appState = useAppState();

onMounted(() => {

    assignColumnNumber(window.innerWidth);
    assignRegionCardColumns(columnsEntrances.value);

    window.addEventListener("resize", (e) => {
        assignColumnNumber(window.innerWidth);
    });

});

const filteredRegionGroups = ref([]);

const filteredRegions = computed(() => {
    let result = [];

    for (let region of appState.value.regions) {
        let r = { ...region };
        if (!r.entrances)
            continue;

        r.entrances = r.entrances.filter(ent => {
            let rowVisible = true;

            switch (ent.type.name) {
                case EntranceType.dungeon.name:
                    rowVisible &= appState.value.entranceOptions.dungeons;
                    break;
                case EntranceType.interior.name:
                    rowVisible &= appState.value.entranceOptions.interiors;
                    break;
                case EntranceType.overworld.name:
                    rowVisible &= appState.value.entranceOptions.overworld;
                    break;
                case EntranceType.grotto.name:
                    rowVisible &= appState.value.entranceOptions.grottos;
                    break;
                case EntranceType.owl.name:
                    rowVisible &= appState.value.entranceOptions.owls;
                    break;
                case EntranceType.song.name:
                    rowVisible &= appState.value.entranceOptions.songs;
                    break;
                default:
                    rowVisible = false;
                    break;
            }

            return rowVisible;
        });

        if (r.entrances.length > 0)
            result.push(r);
    }


    return result;
});

function updateDropdown(meta, selectedEnt) {
    if (!selectedEnt.value)
        return;

    if (meta.entrance.type.name == EntranceType.owl.name || meta.entrance.type.name == EntranceType.song.name)
        return;
        
    // A->B becomes C->D, D->C also becomes B->A, assign the inverse if coupled entrances
    // only do this if at least one is an overworld entrance
    if (!appState.value.entranceOptions.decoupled &&
        (meta.entrance.type.name == EntranceType.overworld.name ||
            selectedEnt.entrance.type.name == EntranceType.overworld.name)) {

        let srcRegion = meta.region.name;
        let srcEnt = meta.entrance.name;
        let destRegion = selectedEnt.region.name;
        let destEnt = selectedEnt.entrance.name;

        // data is backwards for overworld entrances
        if (meta.entrance.type.name == EntranceType.overworld.name) {
            let temp = srcRegion;
            srcRegion = srcEnt;
            srcEnt = temp;
        }
        if (selectedEnt.entrance.type.name == EntranceType.overworld.name) {
            let temp = destRegion;
            destRegion = destEnt;
            destEnt = temp;
        }


        // find in entrance list
        let entListRegion = entranceList.value.find(r => r.description == srcRegion);
        let entListItem = entListRegion?.items.find(x => x.description == srcEnt);

        // assign in regions
        let reg = appState.value.regions.find(x => x.name == destRegion);
        let regEnt = reg?.entrances.find(x => x.name == destEnt);

        if (regEnt && entListItem)
            regEnt.destination = entListItem;
    }
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

watch(filteredRegions, () => {
    assignRegionCardColumns(columnsEntrances.value);
});
watch(columns, () => {
    assignRegionCardColumns(columnsEntrances.value);
});


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


const entranceList = computed(() => {
    let entrances = [];

    for (let region of appState.value.regions) {
        if (region.entrances) {
            let ents = region.entrances.filter(x => {
                if (x.type.name == EntranceType.dungeon.name && appState.value.entranceOptions.dungeons)
                    return true;
                if (x.type.name == EntranceType.interior.name && appState.value.entranceOptions.interiors)
                    return true;
                if (x.type.name == EntranceType.grotto.name && appState.value.entranceOptions.grottos)
                    return true;
                if (x.type.name == EntranceType.overworld.name && appState.value.entranceOptions.overworld)
                    return true;
                if (x.type.name == EntranceType.owl.name && appState.value.entranceOptions.owls)
                    return true;
                if (x.type.name == EntranceType.song.name && appState.value.entranceOptions.songs)
                    return true;

                return false;
            }).map(ent => ({
                value: EntranceType.overworld.name == ent.type.name ? `From ${region.name} to ${ent.name}` : `${region.name}, ${ent.name}`,
                description: ent.name,
                icon: ent.type.icon,
                region: region,
                entrance: ent
            }));

            if (ents.length > 0) {
                entrances.push({
                    description: region.name,
                    items: ents
                });
            }
        }
    }

    return entrances;
});

function getEntrancesByType(entType) {
    let entrances = [];

    for (let region of appState.value.regions) {
        if (region.entrances) {
            let ents = region.entrances.filter(x => {
                if (x.type.name == entType)
                    return true;
                if (EntranceType.owl.name == entType)
                    return true;
                if (EntranceType.song.name == entType)
                    return true;

                // mixed pool, all entrances included as long as the option is selected
                if (entType == "all" && x.type.name == EntranceType.dungeon.name && appState.value.entranceOptions.dungeons)
                    return true;
                if (entType == "all" && x.type.name == EntranceType.interior.name && appState.value.entranceOptions.interiors)
                    return true;
                if (entType == "all" && x.type.name == EntranceType.grotto.name && appState.value.entranceOptions.grottos)
                    return true;
                if (entType == "all" && x.type.name == EntranceType.overworld.name && appState.value.entranceOptions.overworld)
                    return true;
                if (entType == "all" && x.type.name == EntranceType.owl.name && appState.value.entranceOptions.owls)
                    return true;
                if (entType == "all" && x.type.name == EntranceType.song.name && appState.value.entranceOptions.songs)
                    return true;

                return false;
            }).map(ent => ({
                value: EntranceType.overworld.name == ent.type.name ? `From ${region.name} to ${ent.name}` : `${region.name}, ${ent.name}`,
                description: ent.name,
                icon: ent.type.icon,
                region: region,
                entrance: ent
            }));

            if (ents.length > 0) {
                entrances.push({
                    description: region.name,
                    items: ents
                });
            }
        }
    }

    return entrances;
}

const entranceListByType = computed(() => {
    let result = [];

    for (let entType of Object.getOwnPropertyNames(EntranceType)) {
        result[EntranceType[entType].name] = getEntrancesByType(EntranceType[entType].name);
    }
    result["all"] = getEntrancesByType("all");

    return result;
});

function clickHeader(e, region) {
    region.collapsedEnt = !region.collapsedEnt;

    if (!e.currentTarget.nextElementSibling.style.maxHeight)
        e.currentTarget.nextElementSibling.style.maxHeight = `${e.currentTarget.nextElementSibling.scrollHeight}px`;

    setTimeout(() => {
        // collapse animation without reordering region cards
        if (e.target.nextElementSibling.style.maxHeight != "0px")
            e.target.nextElementSibling.style.maxHeight = "0px";
        else
            e.target.nextElementSibling.style.maxHeight = `${e.target.nextElementSibling.scrollHeight}px`;
    }, 10);
}
</script>