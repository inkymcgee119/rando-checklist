<template>
  <NuxtLayout>      
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

// load saved data
const appState = useAppState();
let stored = localStorage.getItem("ootTrackerData");
    if (stored)
        appState.value = JSON.parse(stored);

useHead({
  bodyAttrs: {    
    class: 'bg-slate-800'  
  },
})

</script>