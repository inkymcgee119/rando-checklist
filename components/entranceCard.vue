<template>
    <div class="bg-slate-200 mb-3 rounded-md shadow-xl pb-2 select-none">
        <div class="px-2 font-sans text-white rounded-t-md text-xl font-semibold text-left cursor-pointer"
            :style="{ background: props.region.bgColor }" v-collapsible-header @click="clickHeader()">
            {{ region.name }}
        </div>
        <div class="overflow-hidden" :style="regionStyle">
            <div v-for="(ent, idx) in props.region.items">
                <div class="flex flex-row justify-between px-2 my-1"
                    :class="{ 'border-b-2 border-slate-300': idx < props.region.items.length - 1, 'bg-yellow-400': ent.isStarred }"
                    @contextmenu.prevent="rightClickLocation(ent)">
                    <div class="font-semibold my-auto basis-1/2">
                        <Icon :name="getEntranceTypeByName(ent.type).icon"></Icon>
                        {{ ent.name }}
                    </div>

                    <div class="basis-1/2 my-auto">
                        <dropdown v-model="ent.destination" toggler-class="rounded-md text-white text-sm"
                            :style="{ background: props.region.dropdownColor ?? props.region.bgColor }"
                            toggler-text="Select location"
                            :groups="props.dropdownGroups[appState.entranceOptions.toggleSettings.mixedPool ? 'all' : ent.type]"
                            :include-clear="true" :include-search="true" @update="(item) => update(item, ent)">
                        </dropdown>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const appState = useAppState();
const props = defineProps<{
    region: Region;
    dropdownGroups: DropdownItemGroup[]
}>();

const emit = defineEmits(["update"]);

const regionStyle = ref('');
onMounted(() => {
    if (props.region.isCollapsed)
        regionStyle.value = "max-height: 0px";
});

function update(item, ent) {
    emit('update', { src: { region: props.region, entrance: ent }, dest: item })
}

function clickHeader() {
    let r = getEntranceRegion(props.region.name);
    r.isCollapsed = !r.isCollapsed;

    save();
}

function rightClickLocation(loc) {
    let item = getEntrance(props.region.name, loc.name, loc.type);
    if(item)
        item.isStarred = !item.isStarred;

    save();
    return false;
}

</script>