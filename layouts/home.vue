<template>
    <div v-if="isTauri()" data-tauri-drag-region class="titlebar">
        <div class="float-left mx-2 mt-1" data-tauri-drag-region>
            <Icon name="game-icons:ocarina" data-tauri-drag-region></Icon> Zeldo Rando Trackdo
        </div>
        <div class="titlebar-button float-right" id="titlebar-close">
            <Icon name="mdi:close" />
        </div>
        <div class="titlebar-button float-right" id="titlebar-maximize">
            <Icon name="mdi:window-maximize" />
        </div>
        <div class="titlebar-button float-right" id="titlebar-minimize">
            <Icon name="mdi:window-minimize" />
        </div>
    </div>

    <div class="container mx-auto" :class="{ 'overflow-none': !isTauri(), 'overflow-y-scroll scrollbar': isTauri() }"
        :style="{ height: `${windowHeight}px` }">
        <slot />
    </div>
</template>

<script setup>
import { appWindow } from '@tauri-apps/api/window';

const appState = useAppState();
const route = useRoute();
const windowHeight = ref(window.innerHeight - 80);


onMounted(async () => {
    if (isTauri()) {
        document
            .getElementById('titlebar-minimize')
            .addEventListener('click', () => appWindow.minimize());
        document
            .getElementById('titlebar-maximize')
            .addEventListener('click', () => appWindow.toggleMaximize());
        document
            .getElementById('titlebar-close')
            .addEventListener('click', () => appWindow.close());
        window.addEventListener("resize", (e) => {
            windowHeight.value = window.innerHeight - 80;
        });
    }
});


</script>

<style>
/* width */
.scrollbar::-webkit-scrollbar {
    width: 5px;
}

/* Track */
.scrollbar::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

/* Handle */
.scrollbar::-webkit-scrollbar-thumb {
    background: rgb(109 40 217);
    border-radius: 10px;
}
</style>