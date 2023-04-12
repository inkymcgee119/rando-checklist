<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>


let bodyClass = "bg-slate-800";
if(isTauri())
  bodyClass += " overflow-y-hidden";

useHead({
  bodyAttrs: {
    class: bodyClass
  },
});


</script>