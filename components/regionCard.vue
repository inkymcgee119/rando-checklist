<template>
    <div>
        <!-- header -->
        <div class="rounded-t-md text-xl font-sans font-semibold text-left px-2 text-white"
            :style="{ background: props.region.bgColor }" v-collapsible-header @click="clickHeader(region)">

            {{ props.region.name }} <span v-if="props.region.hasMQ && props.region.showMQ">MQ</span>
            <button v-if="props.region.hasMQ" class="" @click.stop="clickMQ(region)">
                <Icon name="tabler:switch"></Icon>
            </button>
            <span class="float-right">
                <span
                    v-if="props.region.locations.reduce((acc, x) => acc + (!x.isChecked ? (x.count ? x.count : 1) : 0), 0) > 0">
                    {{ props.region.locations.reduce((acc, x) => acc + (!x.isChecked ? (x.count ? x.count : 1) : 0), 0) }}
                </span>
                <span v-if="props.region.locations.filter(x => !x.isChecked).length == 0">
                    <Icon name="ic:baseline-check">
                    </Icon>
                </span>
            </span>

        </div>

        <!-- items -->
        <div class="overflow-hidden" :style="regionStyle">
            <div v-for="(loc, idx) in props.region.locations" :key="loc.description" class="flex flex-row cursor-pointer"
                :class="{ 'border-b-2 border-slate-300': idx < props.region.locations.length - 1, 'bg-yellow-400': loc.isStarred }"
                @click="clickLocation(loc)" @contextmenu.prevent="rightClickLocation(loc)">

                <!-- description -->
                <div class="px-2 font-sans font-medium self-start grow">

                    <Icon v-if="appState.selectedGame.options.settings[loc.type].icon"
                        :name="appState.selectedGame.options.settings[loc.type].icon"></Icon>

                    {{ loc.title }} <span v-if="loc.count">({{ loc.count }})</span>
                    <span v-if="loc.description">
                        <tooltip :text="loc.description">
                            <Icon name="material-symbols:info-outline"></Icon>
                        </tooltip>
                    </span>
                </div>

                <!-- tags and fake checkbox -->
                <div class="px-2 justify-self-end whitespace-nowrap">
                    <span v-for="tag in loc.tags">
                        <Icon v-if="appState.selectedGame.options.tags[tag].icon" :name="appState.selectedGame.options.tags[tag].icon"></Icon>
                    </span>
                    <span>
                        <Icon :name="loc.isChecked ? 'fa-regular:check-square' : 'fa-regular:square'"
                            :class="{ 'text-green-700 cursor-pointer transition ease-in-out hover:scale-110 duration-100': loc.isChecked, 'cursor-pointer transition ease-in-out hover:scale-110 duration-100': !loc.isChecked }">
                        </Icon>
                    </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const appState = useAppState();
const props = defineProps(["region"]);

const regionStyle = ref('');
onMounted(() => {
    if (props.region.isCollapsed)
        regionStyle.value = "max-height: 0px";
});

function clickLocation(loc) {
    loc.isChecked = !loc.isChecked;
    save();
}

function clickHeader(region) {
    let r = appState.value.regions.find((reg) => stringCompareCaseInsensitive(reg.name, region.name));
    r.isCollapsed = !r.isCollapsed;
    save();
}

function rightClickLocation(loc) {
    loc.isStarred = !loc.isStarred;
    save();

    return false;
}
function clickMQ(region) {
    let r = appState.value.regions.find((reg) => stringCompareCaseInsensitive(reg.name, region.name));
    r.showMQ = !r.showMQ;
    save();
}


</script>