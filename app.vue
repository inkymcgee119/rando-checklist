<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/api/fs';

const appState = useAppState();

onMounted(async () => {

  let stored = localStorage.getItem("ootTrackerData");
  if (stored) {
    appState.value = JSON.parse(stored);
  }
  // else if (window.__TAURI_IPC__) {
  //   const resourcePath = await resolveResource('_up_/public/regions/dekuTree.json');
  //   console.log(resourcePath);
  //   const langDe = JSON.parse(await readTextFile(resourcePath));
  //   console.log(langDe);
  // }
  // else {
  //   let result = await fetch("./regions/dekuTree.json");
  //   let resJson = await result.json();
  //   appState.value.regions = [resJson];
  // }
});


useHead({
  bodyAttrs: {
    class: 'bg-slate-800'
  },
});


</script>