<template>
    <div class="container">
        <div class="mx-auto text-white text-center">
            Error has occurred
        </div>
    </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-slate-800'
  },
});

const props = defineProps({  
    error: Object
});


</script>
