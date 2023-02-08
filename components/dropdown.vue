<template>
    <div>
        <button class="cursor-pointer w-full" :class="props.togglerClass" @click.stop="toggle" ref="button">
            <Icon v-if="props.modelValue && props.modelValue.icon" :name="props.modelValue.icon"></Icon>
            {{ togglerText }}
            <Icon class="text-lg" name="mdi:chevron-down"></Icon>
        </button>

        <div v-if="active"
            class="border bg-white absolute cursor-pointer min-w-[200px] max-w-[80%] max-h-[50%] rounded-sm overflow-y-auto"
            :style="{ width: dropWidth }">
            <div class="bg-white hover:brightness-75 border-b-[1px] pl-3 py-2 align-middle font-sans"
                @click.stop="select(item)" v-for="(item, idx) in props.items">
                <Icon v-if="item.icon" :name="item.icon"></Icon>
                {{ item.description }}
            </div>
            <div v-for="group in props.groups">
                <div class="pl-1 font-semibold">
                    {{ group.description }}
                </div>
                <div class="bg-white hover:brightness-75 border-b-[1px] px-2 py-2 align-middle font-sans"
                    @click.stop="select(item)" v-for="(item, idx) in group.items">
                    <Icon v-if="item.icon" :name="item.icon"></Icon>
                    {{ item.description }}
                </div>
            </div>

            
        </div>
    </div>
</template>

<script setup>

const active = ref(false);
const button = ref();
const dropWidth = ref(0);

const props = defineProps({
    'modelValue': Object,
    'groups': {
        type: Array,
        default: undefined
    },
    'items': {
        type: Array,
        default: []
    },
    'togglerClass': {
        type: String,
        default: 'dropdown'
    },
    'togglerText': {
        type: String,
        default: 'Click here'
    },
    'metadata': {
        type: Object
    }

});
const emit = defineEmits(['update:modelValue', 'update']);

const togglerText = computed(() => {
    if (props.modelValue && props.modelValue.value)
        return props.modelValue.value;
    else
        return props.togglerText;
});

function toggle(e) {
    let newActive = !active.value;

    // call click on document to close any other dropdowns
    const event = new Event('click');
    document.dispatchEvent(event);

    dropWidth.value = `${button.value.clientWidth}px`;
    active.value = newActive;
    
}

function select(item) {
    emit('update:modelValue', item);
    emit('update', { metadata: props.metadata, item: item });
    active.value = false;
}

function close(e) {
    active.value = false
}

onMounted(() => {
    document.addEventListener('click', close);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', close);
});

</script>