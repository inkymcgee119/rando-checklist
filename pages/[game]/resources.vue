<template>
    <div class="bg-slate-200 rounded-md shadow-xl ml-1 mr-1 pb-2">
        <div class="rounded-t-md text-xl font-sans font-semibold text-left px-2 mb-2 text-white bg-neutral-500"
            v-collapsible-header>
            Resources
        </div>
        <div class="flex flex-col">
            <div v-for="resource of appState.selectedGame.resources" class="mx-2 my-2">
                
                <a class="btn-option" :href="resource.url" target="_blank">{{ resource.description }}</a>
            </div>            
        </div>
    </div>
</template>

<script setup>

const appState = useAppState();

</script>