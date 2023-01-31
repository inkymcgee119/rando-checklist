<template>    
    <div class="container mx-auto overflow-hidden">
        <div class="mt-5">
            <button class="btn-option" @click="nav('/')">Item Checklist</button>
            <button class="btn-option" @click="nav('/entrances')">Entrances</button>
            <button class="btn-option" @click="nav('/notes')">Notes</button>
        </div>
        <slot />
    </div>
</template>

<script setup>

async function nav(url) {
    await navigateTo(url);
}


</script>