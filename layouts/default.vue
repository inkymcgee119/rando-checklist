<template>
    <div v-if="isTauri()" data-tauri-drag-region class="titlebar">
        <div class="float-left mx-2 mt-1" data-tauri-drag-region>
            <Icon name="game-icons:triforce" data-tauri-drag-region></Icon> Zeldo: Randomizer Checklist
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

    <div :class="{ 'border-2 border-violet-700 p-2': isTauri() }">
        <div class="container mx-auto overflow-hidden">
            <div class="mt-2 mb-2 w-full">

                <NuxtLink v-if="route.params.game && appState.selectedGame && !isLoading" :to="`/${route.params.game}/`"
                    class="btn-option block float-left">Item Checklist</NuxtLink>

                <NuxtLink v-if="route.params.game && appState.selectedGame?.hasEntranceRando && !isLoading"
                    :to="`/${route.params.game}/entrances`" class="btn-option block float-left">Entrances</NuxtLink>

                <NuxtLink v-if="route.params.game && appState.selectedGame && !isLoading" :to="`/${route.params.game}/notes`"
                    class="btn-option block float-left">Notes</NuxtLink>

                <NuxtLink
                    v-if="route.params.game && appState.selectedGame?.resources?.length > 0 && !isLoading"
                    :to="`/${route.params.game}/resources`" class="btn-option block float-left">Resources</NuxtLink>

                <dropdown class="mr-1 my-1 float-right" v-model="selectedGame" :items="gameLinks" @update="updateGame"
                    toggler-class="rounded-full py-1 px-4 hover:bg-orange-800 bg-orange-600 text-white"
                    toggler-text="Select game">
                </dropdown>

            </div>
        </div>

        <div class="container mx-auto" :class="{ 'overflow-none': !isTauri(), 'overflow-y-scroll scrollbar': isTauri() }"
            :style="{ height: `${windowHeight}px` }">
            <div class="text-white text-center text-3xl w-full m-auto" v-if="isLoading">
                <div class="lds-dual-ring"></div>
                <div>Loading</div>

            </div>
            <slot v-if="!isLoading" />
        </div>

    </div>
</template>

<script setup>
import { appWindow } from '@tauri-apps/api/window';

const appState = useAppState();
const route = useRoute();
const selectedGame = ref();
const windowHeight = ref(window.innerHeight - 100);
const isLoading = ref(true);
const gameLinks = ref([]);

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
            windowHeight.value = window.innerHeight - 100;
        });
    }

    // initial load
    await loadGameInfoData();
    gameLinks.value = [
        {
            description: "Home",
            value: "Home",
            icon: "material-symbols:home-outline",
            url: "/"
        },
        ...appState.value.games
    ];
    selectedGame.value = gameLinks.value[0];

    if (route.params.game)
        await loadGame(route.params.game);

    isLoading.value = false;
    
});

async function updateGame(data) {
    if (data.item.url) {
        navigateTo(
            {
                path: data.item.url,
            });
    }
    else {
        await loadGame(data.item.dir);
        navigateTo(
            {
                path: `/${data.item.dir}/`,
            });
    }
}

async function loadGame(game) {
    selectedGame.value = appState.value.games.find(x => x.dir == game);
    if (!selectedGame.value) {
        // invalid game
        navigateTo(
            {
                path: `/`,
            });
    }
    else {
        appState.value.regions = [];
        appState.value.selectedGame = selectedGame;

        let stored = localStorage.getItem(appState.value.selectedGame.dir); // check for existing save
        if (stored) {
            appState.value = JSON.parse(stored);
        }
        else { // otherwise load fresh from json files
            await loadGameInfoData();
            await loadGameData(appState.value.selectedGame);


        }
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

.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
}

.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>