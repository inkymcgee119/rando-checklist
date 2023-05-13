<template>
    <label class="switch">
        <input type="checkbox" v-model="checked" @click="clickCheckbox(!checked)">
        <span class="slider round"></span>
    </label>
</template>

<script setup>
const checked = ref(false);

const props = defineProps({
    'modelValue': {},
    'trueValue': {
        default: true
    },
    'falseValue': {
        default: false
    },
    'trueColor': {
        type: String,
        default: "#6d28d9"
    },
    'falseColor': {
        type: String,
        default: "#cccccc"
    }
});


const emit = defineEmits(['update:modelValue', 'updated']);

onMounted(() => {    
    if(props.modelValue)
        props.modelValue === props.trueValue ? clickCheckbox(true) : clickCheckbox(false);
});

function clickCheckbox(value) {
    let oldValue = checked.value;
    checked.value = value;
    emit("update:modelValue", value ? props.trueValue : props.falseValue);
    emit("updated", oldValue ? props.trueValue : props.falseValue, value ? props.trueValue : props.falseValue);
}
</script>

<style>
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: v-bind(props.falseColor);
    -webkit-transition: .1s;
    transition: .1s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .1s;
    transition: .1s;
}

input:checked+.slider {
    background-color: v-bind(props.trueColor);
}


input:checked+.slider:before {
    transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 24px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>