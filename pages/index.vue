<template>
    <div class="rounded-md font-sans font-semibold p-2 my-1 bg-slate-200 text-black text-center">

        <h1 class="text-5xl mb-5">
            Rando Checklist
        </h1>        

        
        <p>A simple checklist for randomizers</p>
        <p v-if="!isTauri()">Customizable desktop app available <a class="underline text-blue-700" href="https://github.com/inkymcgee119/zeldo-checklist/releases" target="_blank">here</a></p>


        <p class="mt-4">Select a game</p>

        <div class="my-2" v-for="game in appState.games">
            <a class="text-xl" :href="`/${game.dir}`">
                <Icon :name="game.icon"></Icon> {{ game.description }}
            </a>
        </div>
    </div>
</template>

<script setup>


const appState = useAppState();
await loadGameInfoData();

</script>