<template>

    <div class="bg-slate-200 rounded-md shadow-xl mt-2 ml-1 mr-1 pb-2">
        <div class="rounded-t-md text-xl font-sans font-semibold text-left px-2 mb-2 text-white bg-neutral-500">
            Options
        </div>
        <div class="flex flex-row">
            <div class="ml-2 my-auto">
                <label class="font-sans font-semibold">Randomizer options</label>
            </div>
            <div class="grow">
                <button class="btn-option" :class="{ 'opacity-50': !appState.options.items }"
                    @click="appState.options.items = !appState.options.items">Items<Icon :name="LocationTypes.item.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.options.skulltulas }"
                    @click="appState.options.skulltulas = !appState.options.skulltulas">Skulltulas<Icon :name="LocationTypes.gs.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.options.shops }"
                    @click="appState.options.shops = !appState.options.shops">Shops<Icon :name="LocationTypes.shop.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.options.scrubs }"
                    @click="appState.options.scrubs = !appState.options.scrubs">Scrubs<Icon :name="LocationTypes.scrub.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.options.cows }"
                    @click="appState.options.cows = !appState.options.cows">Cows<Icon :name="LocationTypes.cow.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.options.rupees }"
                    @click="appState.options.rupees = !appState.options.rupees">Rupees & Hearts<Icon :name="LocationTypes.rupee.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.options.pots }"
                    @click="appState.options.pots = !appState.options.pots">Pots<Icon :name="LocationTypes.pot.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.options.crates }"
                    @click="appState.options.crates = !appState.options.crates">Crates<Icon :name="LocationTypes.crate.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.options.beehives }"
                    @click="appState.options.beehives = !appState.options.beehives">Beehives<Icon :name="LocationTypes.beehive.icon"></Icon></button>
            </div>

            <div class="ml-2 my-auto">
                <label class="font-sans font-semibold">Filter by tag</label>
            </div>
            <div class="grow">
                <button class="btn-option" :class="{ 'opacity-50': !appState.tagFilters.child }"
                    @click="clickTagFilter('child')">Child<Icon :name="Tags.child.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.tagFilters.adult }"
                    @click="clickTagFilter('adult')">Adult<Icon :name="Tags.adult.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.tagFilters.grotto }"
                    @click="clickTagFilter('grotto')">Grotto<Icon :name="Tags.grotto.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.tagFilters.bean }"
                    @click="clickTagFilter('bean')">Bean Plants<Icon :name="Tags.bean.icon"></Icon></button>
                <button class="btn-option" :class="{ 'opacity-50': !appState.tagFilters.night }"
                    @click="clickTagFilter('night')">Night<Icon :name="Tags.night.icon"></Icon></button>
            </div>
            <div class="ml-2">
                <button class="float-right rounded-full text-white py-1 px-4 my-1 mr-2 bg-red-600"
                    @click="reset">Reset</button>
            </div>
        </div>
    </div>

</template>

<script setup>

const appState = useAppState();




function clickTagFilter(tag) {
    appState.value.tagFilters[tag] = !appState.value.tagFilters[tag];
    for (let propName of Object.getOwnPropertyNames(appState.value.tagFilters)) {
        if (propName != tag)
            appState.value.tagFilters[propName] = false;
    }

}

function reset() {
    localStorage.removeItem("ootTrackerData");
    for (let region of appState.value.regions) {
        for (let loc of region.locations) {
            loc.isChecked = false;
        }
    }
}
</script>