<template>
    <div>
        <button class="cursor-pointer w-full" :class="props.togglerClass" @click.stop="toggle" ref="button">
            <Icon v-if="props.modelValue && props.modelValue.icon" :name="props.modelValue.icon"></Icon>
            {{ togglerText }}
            <Icon class="text-lg" name="mdi:chevron-down"></Icon>
        </button>

        <div v-if="active" class="border bg-white absolute min-w-[200px] max-w-[80%] max-h-[50%] rounded-sm overflow-y-auto"
            :style="{ width: dropWidth }">

            <!-- search -->
            <div v-show="props.includeSearch"
                class="bg-white hover:brightness-75 border-b-[1px] pl-3 py-2 px-2 align-middle font-sans"
                @click.stop="() => { }">
                <input ref="searchTextbox" v-model="searchTerm" type="text"
                    class="border-2 border-black rounded-md w-full px-2 h-8" />
            </div>

            <!-- clear value -->
            <div v-if="props.includeClear"
                class="bg-white hover:brightness-75 border-b-[1px] pl-3 py-2 align-middle font-sans cursor-pointer"
                @click.stop="select(null)">
                Clear Value
            </div>

            <!-- items -->
            <div class="bg-white hover:brightness-75 border-b-[1px] pl-3 py-2 align-middle font-sans cursor-pointer"
                @click.stop="select(item)" v-for="(item, idx) in filteredItems">
                <Icon v-if="item.icon" :name="item.icon"></Icon>
                {{ item.description }}
            </div>

            <!-- grouped items -->
            <div v-for="group in filteredGroups">
                <div class="pl-1 font-semibold">
                    {{ group.description }}
                </div>
                <div class="bg-white hover:brightness-75 border-b-[1px] px-2 py-2 align-middle font-sans cursor-pointer"
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

const searchTextbox = ref(null);
const searchTerm = useDebouncedRef("", 200);

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
    'includeClear': {
        type: Boolean
    },
    'includeSearch': {
        type: Boolean
    }

});
const emit = defineEmits(['update:modelValue', 'update']);

const togglerText = computed(() => {
    if (props.modelValue && props.modelValue.value)
        return props.modelValue.value;
    else
        return props.togglerText;
});

const filteredItems = computed(() => {
    let result = [];
    if (props.items) {
        if (searchTerm.value) 
            result = props.items.filter(x => x.description.toUpperCase().indexOf(searchTerm.value.toUpperCase()) > -1);        
        else 
            result = props.items;        
    }
    return result;
});

const filteredGroups = computed(() => {
    let result = [];
    if (searchTerm.value) {
        for (let grp of props.groups) {
            if (grp.description.toUpperCase().indexOf(searchTerm.value.toUpperCase()) > -1)
                result.push(grp);
            else {
                let newGrp = { description: grp.description, items: [] };
                for (let itm of grp.items) {
                    if (itm.description.toUpperCase().indexOf(searchTerm.value.toUpperCase()) > -1)
                        newGrp.items.push(itm);
                }

                if (newGrp.items.length > 0)
                    result.push(newGrp);
            }
        }
    }
    else {
        result = props.groups;
    }

    return result;
});

onUpdated(() => {
    // auto focus textbox when dropdown opens    
    if (active.value)
        searchTextbox.value.focus();
})

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
    emit('update', item);
    active.value = false;
}

function close(e) {
    active.value = false
    searchTerm.value = "";
}

onMounted(() => {
    document.addEventListener('click', close);    
});

onBeforeUnmount(() => {
    document.removeEventListener('click', close);
});

</script>