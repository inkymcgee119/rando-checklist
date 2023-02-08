<template>
    <div class="container mx-auto overflow-hidden">
        <div class="mt-5 pb-2 w-full">

            <NuxtLink to="/" class="btn-option">Item Checklist</NuxtLink>

            <NuxtLink to="/entrances" class="btn-option">Entrances</NuxtLink>

            <NuxtLink to="/notes" class="btn-option">Notes</NuxtLink>
            <dropdown class="rounded-sm py-1 px-4 mb-2 ml-1 hover:bg-violet-900 bg-violet-700 float-right"
                v-model="selectedGame" :items="appState.games" @update="updateGame" toggler-class="rounded-md text-white"
                toggler-text="Select game">
            </dropdown>

        </div>
    </div>

    <div class="container mx-auto overflow-hidden">
        <slot />
    </div>
</template>

<script setup>
const appState = useAppState();
const selectedGame = ref();


await loadGameInfo();

selectedGame.value = appState.value.games[0];
let stored = localStorage.getItem("ootTrackerData");
if (stored) {
    appState.value = JSON.parse(stored);
}
else {
    await loadRegions(selectedGame.value);
}

async function updateGame(data) {
    selectedGame.value = data.item;
    await loadRegions(selectedGame.value);
}


</script>