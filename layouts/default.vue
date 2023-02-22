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

    <div class="container mx-auto overflow-hidden">
        <div class="mt-2 mb-2 w-full">

            <NuxtLink to="/" class="btn-option block float-left">Item Checklist</NuxtLink>

            <NuxtLink to="/entrances" class="btn-option block float-left">Entrances</NuxtLink>

            <NuxtLink to="/notes" class="btn-option block float-left">Notes</NuxtLink>
            <dropdown class="mr-1 my-1 float-right" v-model="selectedGame" :items="appState.games" @update="updateGame"
                toggler-class="rounded-full py-1 px-4 hover:bg-orange-800 bg-orange-600 text-white"
                toggler-text="Select game">
            </dropdown>

        </div>
    </div>

    <div class="container mx-auto" :class="{'overflow-none': !isTauri(), 'overflow-y-scroll scrollbar': isTauri()}"
        :style="{ height: `${windowHeight}px` }">
        <slot />
    </div>
</template>

<script setup>
import { appWindow } from '@tauri-apps/api/window';

const appState = useAppState();
const selectedGame = ref();
const windowHeight = ref(window.innerHeight - 80);

await loadGameInfo();

//TODO: save previous selected game
let previousGame = localStorage.getItem("zeldoTrackdo");
if(previousGame) 
    selectedGame.value = JSON.parse(previousGame);
else
    selectedGame.value = appState.value.games[0];

appState.value.selectedGame = selectedGame.value;
let stored = localStorage.getItem(appState.value.selectedGame.dir);
if (stored) {
    appState.value = JSON.parse(stored);
}
else {
    await loadGame(appState.value.selectedGame);
}


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

async function updateGame(data) {
    save();

    appState.value.regions = [];
    appState.value.selectedGame = data.item;

    let stored = localStorage.getItem(selectedGame.value.dir);
    if (stored) {
        appState.value = JSON.parse(stored);
    }
    else {
        await loadGameInfo();
        await loadGame(selectedGame.value);
    }
}


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