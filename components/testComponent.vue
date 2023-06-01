<template>
    test <button class="m-3 bg-blue-300" @click="clickButt">Butt</button> Inside  {{ modelValue }}
</template>

<script setup>

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function clickButt() {
    let newObj = {...props.modelValue};
    emit("update:modelValue", newObj);
}

</script>