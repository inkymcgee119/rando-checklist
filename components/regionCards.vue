<template>
    <div class="my-5 flex flex-row flex-nowrap card-container">

        <!-- no results -->
        <div v-if="filteredRegions.length == 0" class="w-full text-white text-center font-sans">
            No Results
        </div>

        <div class="flex flex-col mx-1 grow" v-for="regionGroup in filteredRegionGroups">
            <div class="bg-slate-200 mb-3 rounded-md shadow-xl pb-2 region-card select-none"
                v-for="region in regionGroup">

                <!-- header -->
                <div class="rounded-t-md text-xl font-sans font-semibold text-left px-2 text-white cursor-pointer"
                    :class="region.bgColor" @click="clickHeader($event, region)">
                    {{ region.name }} <span v-if="region.hasMQ && region.showMQ">MQ</span>
                    <button v-if="region.hasMQ" class="" @click.stop="clickMQ(region)">
                        <Icon name="tabler:switch"></Icon>
                    </button>
                    <span class="float-right">
                        <span v-if="region.locations.filter(x => !x.isChecked).length > 0">{{
                            region.locations.filter(x => !x.isChecked).length
                        }}</span>
                        <span v-if="region.locations.filter(x => !x.isChecked).length == 0">
                            <Icon name="ic:baseline-check">
                            </Icon>
                        </span>
                    </span>
                </div>

                <!-- items -->
                <div style="transition: max-height 200ms; overflow: hidden;">
                    <div v-for="(loc, idx) in region.locations" class="flex flex-row cursor-pointer"
                        :class="{ 'border-b-2 border-slate-300': idx < region.locations.length - 1 }"
                        @click="clickLocation(loc)">
                        <div class="px-2 font-sans font-medium self-start grow">
                            <Icon :name="loc.type.icon"></Icon>
                            {{ loc.title }}
                            <span v-if="loc.description && !region.collapsed" class="tooltip"
                                :data-text="loc.description">
                                <Icon name="material-symbols:info-outline"></Icon>
                            </span>
                        </div>
                        <div class="px-2 justify-self-end whitespace-nowrap">
                            <span v-for="tag in loc.tags">
                                <Icon v-if="tag.icon" :name="tag.icon"></Icon>
                            </span>
                            <span>
                                <Icon name="fa-regular:square"
                                    class="cursor-pointer transition ease-in-out hover:scale-110 duration-100"
                                    v-if="!loc.isChecked"></Icon>
                                <Icon name="fa-regular:check-square"
                                    class="text-green-700 cursor-pointer transition ease-in-out hover:scale-110 duration-100"
                                    v-if="loc.isChecked"></Icon>
                            </span>
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
    assignRegionCardColumns(columns.value);

    window.addEventListener("resize", (e) => {
        assignColumnNumber(window.innerWidth);
    });

});

const filteredRegions = computed(() => {
    let result = [];

    for (let region of appState.value.regions) {
        let r = { ...region };
        //let f = { ...filters }; // this is to trigger vue to recompute when the filters change
        r.locations = region.locations.filter(loc => {
            let rowVisible = true;

            switch (loc.type.name) {
                case LocationTypes.item.name:
                case LocationTypes.boss.name:
                case LocationTypes.song.name:
                    rowVisible &= appState.value.options.items;
                    break;
                case LocationTypes.gs.name:
                    rowVisible &= appState.value.options.skulltulas;
                    break;
                case LocationTypes.scrub.name:
                    rowVisible &= appState.value.options.scrubs;
                    break;
                case LocationTypes.cow.name:
                    rowVisible &= appState.value.options.cows;
                    break;
                case LocationTypes.shop.name:
                    rowVisible &= appState.value.options.shops;
                    break;
                case LocationTypes.rupee.name:
                    rowVisible &= appState.value.options.rupees;
                    break;
                case LocationTypes.pot.name:
                    rowVisible &= appState.value.options.pots;
                    break;
                case LocationTypes.crate.name:
                    rowVisible &= appState.value.options.crates;
                    break;
                case LocationTypes.beehive.name:
                    rowVisible &= appState.value.options.beehives;
                    break;
                default:
                    rowVisible = false;
                    break;
            }

            if (appState.value.tagFilters.child)
                rowVisible &= !!loc.tags.find(x => x.name == Tags.child.name);
            if (appState.value.tagFilters.adult)
                rowVisible &= !!loc.tags.find(x => x.name == Tags.adult.name);
            if (appState.value.tagFilters.grotto)
                rowVisible &= !!loc.tags.find(x => x.name == Tags.grotto.name);
            if (appState.value.tagFilters.bean)
                rowVisible &= !!loc.tags.find(x => x.name == Tags.bean.name);
            if (appState.value.tagFilters.night)
                rowVisible &= !!loc.tags.find(x => x.name == Tags.night.name);

            if (r.hasMQ) {
                if (!r.showMQ)
                    rowVisible &= !!loc.tags.find(({ name }) => name == Tags.vanilla.name);
                else
                    rowVisible &= !!loc.tags.find(({ name }) => name == Tags.mq.name);
            }

            return rowVisible;
        });

        if (r.locations.length > 0)
            result.push(r);
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

    if(!filteredRegions.value || filteredRegions.value.length == 0) {
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
    return region.locations.length + 1;
}


function clickLocation(loc) {
    loc.isChecked = !loc.isChecked;
    save(appState.value);
}

function clickMQ(region) {
    let r = appState.value.regions.find((reg) => reg.name == region.name);
    r.showMQ = !r.showMQ;
}

function clickHeader(e, region) {
    let r = appState.value.regions.find((reg) => reg.name == region.name);
    r.collapsed = !r.collapsed;

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