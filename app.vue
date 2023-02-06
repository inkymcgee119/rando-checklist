<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const appState = useAppState();



  let stored = localStorage.getItem("ootTrackerData");
  if (stored) {
    appState.value = JSON.parse(stored);
  }
  else {
    await loadRegions();
  }



useHead({
  bodyAttrs: {
    class: 'bg-slate-800'
  },
});


</script>