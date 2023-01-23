<template>

    <!-- option section -->
    <div class="bg-slate-200 rounded-md shadow-xl my-5 ml-1 mr-1 pb-2" :style="{ width: `${(343 * columns) - 8}px` }">
        <div class="rounded-t-md text-xl font-sans font-semibold text-left px-2 mb-2 text-white bg-neutral-500">
            Options
        </div>
        <div class="flex flex-row">
            <span class="ml-2 basis-1/2">
                <label class="font-sans font-semibold">Randomizer options</label>
                <button class="btn-option" :class="{ 'opacity-50': !filters.items }"
                    @click="filters.items = !filters.items">Items</button>
                <button class="btn-option" :class="{ 'opacity-50': !filters.skulltulas }"
                    @click="filters.skulltulas = !filters.skulltulas">Skulltulas</button>
                <button class="btn-option" :class="{ 'opacity-50': !filters.shops }"
                    @click="filters.shops = !filters.shops">Shops</button>
                <button class="btn-option" :class="{ 'opacity-50': !filters.scrubs }"
                    @click="filters.scrubs = !filters.scrubs">Scrubs</button>
                <button class="btn-option" :class="{ 'opacity-50': !filters.cows }"
                    @click="filters.cows = !filters.cows">Cows</button>
                <button class="btn-option" :class="{ 'opacity-50': !filters.rupees }"
                    @click="filters.rupees = !filters.rupees">Rupees & Hearts</button>
                <button class="btn-option" :class="{ 'opacity-50': !filters.pots }"
                    @click="filters.pots = !filters.pots">Pots</button>
                <button class="btn-option" :class="{ 'opacity-50': !filters.crates }"
                    @click="filters.crates = !filters.crates">Crates</button>
                <button class="btn-option" :class="{ 'opacity-50': !filters.beehives }"
                    @click="filters.beehives = !filters.beehives">Beehives</button>
            </span>
            <span class="ml-2 basis-2/5">
                <label class="font-sans font-semibold">Filter by tag</label>
                <button class="btn-option" :class="{ 'opacity-50': !tagFilters.child }"
                    @click="clickTagFilter('child')">Child</button>
                <button class="btn-option" :class="{ 'opacity-50': !tagFilters.adult }"
                    @click="clickTagFilter('adult')">Adult</button>
                <button class="btn-option" :class="{ 'opacity-50': !tagFilters.grotto }"
                    @click="clickTagFilter('grotto')">Grotto</button>
                <button class="btn-option" :class="{ 'opacity-50': !tagFilters.bean }"
                    @click="clickTagFilter('bean')">Bean Plants</button>
                <button class="btn-option" :class="{ 'opacity-50': !tagFilters.night }"
                    @click="clickTagFilter('night')">Night</button>
            </span>
            <span class="ml-2" style="flex-basis: 10%;">
                <button class="float-right rounded-full text-white py-1 px-4 my-1 mr-2 bg-red-600"
                    @click="reset">Reset</button>
            </span>
        </div>
    </div>

    <!-- region cards -->
    <ClientOnly>
        <div class="my-5 w-full flex flex-wrap flex-row card-container">

            <!-- no results -->
            <div v-if="filteredRegions.length == 0" class="w-full text-white text-center font-sans">
                No Results
            </div>

            <div class="flex flex-col" v-for="regionGroup in filteredRegionGroups">
                <div style="width: 335px;"
                    class="bg-slate-200 mx-1 mb-3 rounded-md shadow-xl pb-2 region-card select-none"
                    v-for="region in regionGroup">
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
                    <div style="transition: height 200ms; overflow: hidden;"
                        :style="'height:' + (region.collapsed ? 0 : region.height) + 'px'">
                        <div v-for="(loc, idx) in region.locations" class="flex flex-row cursor-pointer"
                            :class="{ 'border-b-2 border-slate-300': idx < region.locations.length - 1 }"
                            @click="clickLocation(loc)">
                            <div class="px-2 font-sans font-medium self-start grow">
                                <Icon :name="loc.type.icon"></Icon>
                                {{ loc.title }}
                                <span v-if="loc.description && !region.collapsed" class="tooltip" :data-text="loc.description">
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
    </ClientOnly>


</template>

<script setup>

const cardHeaderHeight = 28;
const cardMarginHeight = 20;
const cardRowHeight = 24;
const cardRowBorderHeight = 2;

const columns = ref(1);
const regions = useRegions();
const filters = reactive({
    items: true,
    skulltulas: false,
    shops: false,
    scrubs: false,
    cows: false,
    rupees: false,
    pots: false,
    crates: false,
    beehives: false
});

const tagFilters = reactive({
    child: false,
    adult: false,
    grotto: false,
    bean: false,
    night: false
});

const filteredRegionGroups = ref([]);



onMounted(() => {
    // load saved data
    let stored = localStorage.getItem("ootTrackerData");
    if (stored)
        regions.value = JSON.parse(stored);

    assignColumnNumber(document.querySelector("body").clientWidth);
    adjustRegionCardHeights(columns.value);

    window.addEventListener("resize", (e) => {
        assignColumnNumber(document.querySelector("body").clientWidth);
    });

});

const filteredRegions = computed(() => {
    let result = [];

    for (let region of regions.value) {
        let r = { ...region };
        let f = { ...filters }; // this is to trigger vue to recompute when the filters change
        r.locations = region.locations.filter(loc => {
            let rowVisible = true;

            switch (loc.type.name) {
                case LocationTypes.item.name:
                case LocationTypes.boss.name:
                case LocationTypes.song.name:
                    rowVisible &= f.items;
                    break;
                case LocationTypes.gs.name:
                    rowVisible &= f.skulltulas;
                    break;
                case LocationTypes.scrub.name:
                    rowVisible &= f.scrubs;
                    break;
                case LocationTypes.cow.name:
                    rowVisible &= f.cows;
                    break;
                case LocationTypes.shop.name:
                    rowVisible &= f.shops;
                    break;
                case LocationTypes.rupee.name:
                    rowVisible &= f.rupees;
                    break;
                case LocationTypes.pot.name:
                    rowVisible &= f.pots;
                    break;
                case LocationTypes.crate.name:
                    rowVisible &= f.crates;
                    break;
                case LocationTypes.beehive.name:
                    rowVisible &= f.beehives;
                    break;
                default:
                    rowVisible = false;
                    break;
            }

            if (tagFilters.child)
                rowVisible &= !!loc.tags.find(x => x.name == Tags.child.name);
            if (tagFilters.adult)
                rowVisible &= !!loc.tags.find(x => x.name == Tags.adult.name);
            if (tagFilters.grotto)
                rowVisible &= !!loc.tags.find(x => x.name == Tags.grotto.name);
            if (tagFilters.bean)
                rowVisible &= !!loc.tags.find(x => x.name == Tags.bean.name);
            if (tagFilters.night)
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


watch(filteredRegions, () => {
    adjustRegionCardHeights(columns.value);
    assignRegionGroups();
});
watch(columns, () => {
    adjustRegionCardHeights(columns.value);
    assignRegionGroups();
});

function assignColumnNumber(width) {
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
}

// resizing the card container to fit the cards into a set number of columns
function adjustRegionCardHeights(colNum) {
    if (process.server)
        return;

    let totalHeight = 0;
    for (let region of filteredRegions.value) {
        totalHeight += calculateRegionCardHeight(region);
    }

    if (colNum <= 1)
        return totalHeight;

    let height = totalHeight / colNum;

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
            region.height = calculateRegionCardRowsHeight(region);
        }

        // there was overflow, increase size and try again
        if (currCol >= colNum)
            height += 25;
    } while (currCol >= colNum)

}

function calculateRegionCardHeight(region) {
    let headerH = cardHeaderHeight + cardMarginHeight;

    return headerH + calculateRegionCardRowsHeight(region);
}

function calculateRegionCardRowsHeight(region) {
    let rowsH = cardRowHeight * region.locations.length;
    let borderH = Math.max(0, region.locations.length - 1) * cardRowBorderHeight;

    return rowsH + borderH;
}

function clickLocation(loc) {
    loc.isChecked = !loc.isChecked;
    save();
}

function clickMQ(region) {
    let r = regions.value.find((reg) => reg.name == region.name);
    r.showMQ = !r.showMQ;
}

function clickHeader(e, region) {
    let r = regions.value.find((reg) => reg.name == region.name);
    r.collapsed = !r.collapsed;

    // collapse animation without reordering region cards
    if (e.currentTarget.nextElementSibling.style.height != "0px")
        e.currentTarget.nextElementSibling.style.height = "0px";
    else
        e.currentTarget.nextElementSibling.style.height = `${region.height}px`;
}

function clickTagFilter(tag) {
    tagFilters[tag] = !tagFilters[tag];
    for (let propName of Object.getOwnPropertyNames(tagFilters)) {
        if (propName != tag)
            tagFilters[propName] = false;
    }

}

function save() {
    localStorage.setItem("ootTrackerData", JSON.stringify(regions.value));
}

function reset() {
    localStorage.removeItem("ootTrackerData");
    for (let region of regions.value) {
        for (let loc of region.locations) {
            loc.isChecked = false;
        }
    }
}


</script>


<style>
.tooltip {
    position: absolute;
    /* making the .tooltip span a container for the tooltip text */
}

.tooltip:before {
    content: attr(data-text);
    /* here's the magic */
    position: absolute;

    /* vertically center */
    left: 50%;
    transform: translateX(-50%);

    /* reset defaults */
    top: initial;
    margin: initial;

    /* set new values */
    bottom: 100%;
    margin-bottom: 5px;

    /* basic styles */
    width: 200px;
    padding: 10px;
    border-radius: 10px;
    background: #000;
    color: #fff;
    text-align: center;

    display: none;
    /* hide by default */
}

.tooltip:hover:before {
    display: block;
    position: absolute;
}

.btn-option {
    @apply rounded-sm text-white py-1 px-4 my-1 ml-1 hover:bg-violet-900 bg-violet-700;
}
</style>