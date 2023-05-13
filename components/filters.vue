<template>
    <div class="bg-slate-200 rounded-md shadow-xl ml-1 mr-1 pb-2">
        <div class="rounded-t-md text-xl font-sans font-semibold text-left px-2 mb-2 text-white bg-neutral-500"
            v-collapsible-header>
            Options
        </div>

        <div class="flex flex-row">
            <div v-if="settings && Object.keys(settings).length > 0" class="ml-2 my-auto">
                <label class="font-sans font-semibold">{{ settingsDescription }}</label>
            </div>
            <div v-if="settings && Object.keys(settings).length > 0" class="grow">
                <span v-for="opt of Object.keys(settings)">
                    <button v-if="!settings[opt].filterWith && !settings[opt].isHidden" 
                        :class="{ 'btn-option': modelValue.settings[settings[opt].name], 'btn-option-inactive': !modelValue.settings[settings[opt].name] }"
                        @click="modelValue.settings[settings[opt].name] = !modelValue.settings[settings[opt].name]">
                        {{ settings[opt].description }}
                        <Icon v-if="settings[opt].icon" :name="settings[opt].icon"></Icon>
                    </button>
                </span>
            </div>

            <div v-if="tags && Object.keys(tags).length > 0" class="ml-2 my-auto">
                <label class="font-sans font-semibold">{{ tagsDescription }}</label>
            </div>
            <div v-if="tags && Object.keys(tags).length > 0" class="grow">
                <span v-for="tag of Object.keys(tags)">
                    <button v-if="!tags[tag].isHidden"
                        :class="{ 'btn-option': modelValue.tags[tags[tag].name], 'btn-option-inactive': !modelValue.tags[tags[tag].name] }"
                        @click="tagClick(tag)">
                        {{ tags[tag].description }}
                        <Icon :name="tags[tag].icon"></Icon>
                    </button>
                </span>
            </div>

            <div v-if="toggleSettings && Object.keys(toggleSettings).length > 0" class="ml-2 my-auto">
                <label class="font-sans font-semibold">{{ toggleSettingsDescription }}</label>
            </div>
            <div v-if="toggleSettings && Object.keys(toggleSettings).length > 0" class="grow my-auto basis-1/4">
                <span v-for="key of Object.keys(toggleSettings)" class="font-sans font-semibold mx-auto">
                    <span v-if="!toggleSettings[key].isHidden">{{ toggleSettings[key].description }} <toggle-switch
                            v-model="modelValue.toggleSettings[key]"></toggle-switch></span>
                </span>
            </div>

            <div v-if="toggleTags && Object.keys(toggleTags).length > 0" class="ml-2 my-auto">
                <label class="font-sans font-semibold">{{ toggleTagsDescription }}</label>
            </div>
            <div v-if="toggleTags && Object.keys(toggleTags).length > 0" class="grow my-auto basis-1/4">
                <span v-for="key of Object.keys(toggleTags)" class="font-sans font-semibold mx-auto whitespace-nowrap">
                    <span v-if="!toggleTags[key].isHidden">{{ toggleTags[key].description }}
                        <toggle-switch v-model="modelValue.toggleTags[key]" :true-color="toggleTags[key].trueColor"
                            :false-color="toggleTags[key].falseColor" :true-value="toggleTags[key].trueValue"
                            :false-value="toggleTags[key].falseValue" @updated="updateToggleTag"></toggle-switch>
                        {{ toggleTags[key].afterDescription }}
                    </span>
                </span>
            </div>

            <div class="ml-2 my-auto">
                <button class="float-right rounded-full text-white py-1 px-4 my-1 mr-2 bg-red-600"
                    @click="emit('reset')">Reset</button>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    "settings": {},
    "settingsDescription": {
        default: "Randomizer Options"
    },
    "tags": {},
    "tagsDescription": {
        default: "Filter by Tag"
    },
    "toggleSettings": {},
    "toggleSettingsDescription": {
        default: ""
    },
    "toggleTags": {},
    "toggleTagsDescription": {
        default: ""
    },
    "modelValue": {}
});
const emit = defineEmits(["update:modelValue", "reset"])

function tagClick(tagName) {
    for (let tag of Object.keys(props.tags)) {
        if (tagName != tag)
            props.modelValue.tags[tag] = false;
        else
            props.modelValue.tags[tag] = !props.modelValue.tags[tag];
    }
}

function updateToggleTag(oldVal, newVal) {
    props.modelValue.toggleTags[oldVal] = false;
    props.modelValue.toggleTags[newVal] = true;
}

</script>