<template>
    <span @mouseover="hover" @mouseout="leave">
        <slot />
    </span>
    <Teleport to="body">
        <span ref="tooltipText" v-show="showText" class="c-tooltip" :style="{ position: 'absolute', left: `${x}px`, top: `${y}px` }">{{
            text
        }}</span>
    </Teleport>
</template>

<script setup lang="ts">
const props = defineProps(["text"]);
const showText = ref(false);
const x = ref(0);
const y = ref(0);
const tooltipText = ref();

function hover(e) {
    showText.value = true;
    
    x.value = e.pageX;
    y.value = e.pageY + 30;
}

function leave(e) {
    showText.value = false;
}

</script>

<style scoped>
.c-tooltip {
    display: block;
    top: initial;
    margin: initial;
    left: 50%;
    transform: translateX(-50%);
    
    margin-bottom: 5px;

    width: 200px;
    padding: 10px;
    border-radius: 10px;
    background: #000;
    color: #fff;
    text-align: center;
}
</style>
