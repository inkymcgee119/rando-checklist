<template>

    <div class="bg-slate-200 rounded-md shadow-xl mt-2 ml-1 mr-1 pb-2">
        <div class="rounded-t-md text-xl font-sans font-semibold text-left px-2 mb-2 text-white bg-neutral-500"
            v-collapsible-header>
            Options
        </div>

        <div class="flex flex-row">
            <div v-if="props.config.options" class="ml-2 my-auto">
                <label class="font-sans font-semibold">Randomizer options</label>
            </div>
            <div v-if="props.config.options" class="grow">
                <span v-for="opt of props.config.options">
                    <button :class="{'btn-option': options[opt.name], 'btn-option-inactive': !options[opt.name] }"
                        @click="options[opt.name] = !options[opt.name]">{{ opt.description }}
                        <Icon v-if="opt.icon" :name="opt.icon"></Icon>
                    </button>
                </span>
            </div>

            <div v-if="props.config.tags" class="ml-2 my-auto">
                <label class="font-sans font-semibold">Filter by tag</label>
            </div>
            <div v-if="props.config.tags" class="grow">
                <span v-for="tag of props.config.tags">
                    <button :class="{'btn-option': tags[tag.name], 'btn-option-inactive': !tags[tag.name] }"
                        @click="clickTagFilter(tag.name)">{{ tag.description }}<Icon :name="tag.icon"></Icon></button>
                </span>
            </div>

            <div v-if="props.config.toggles" class="grow my-auto">
                <span v-for="toggle of props.config.toggles" class="font-sans font-semibold mx-2">
                    {{ toggle.description }} <toggle-switch v-model="options[toggle.name]"></toggle-switch>
                </span>
            </div>

            <div class="ml-2 my-auto">
                <button class="float-right rounded-full text-white py-1 px-4 my-1 mr-2 bg-red-600"
                    @click="reset">Reset</button>
            </div>
        </div>
    </div>

</template>

<script setup>

const appState = useAppState();
const props = defineProps(["options", "tags", "config"]);

function clickTagFilter(tagName) {
    props.tags[tagName] = !props.tags[tagName];
    for (let tag of props.config.tags) {
        if (tagName != tag.name)
            props.tags[tag.name] = false;
    }

}

</script>