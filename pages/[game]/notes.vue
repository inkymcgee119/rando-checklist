<template>

    <div class="bg-slate-200 rounded-md shadow-xl mb-2">
        <div class="rounded-t-md text-xl font-sans font-semibold text-left px-2 mb-2 text-white bg-neutral-500">
            Notes
        </div>
        <div class="flex flex-row p-2">
            <textarea class="w-full h-96" v-model="appState.notes" @input="update"></textarea>
        </div>
    </div>
</template>

<script setup>

const appState = useAppState();

function update() {
    save(appState.value.selectedGame.dir, appState.value);
}

</script>