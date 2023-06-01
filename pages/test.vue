<template>
    <div class="bg-slate-200 rounded-md shadow-xl mb-2 h-80 p-5">
        <!-- <ToggleSwitch v-model="value" true-value="Y" false-value="N" true-color="#b91c1c" false-color="#1d4ed8"></ToggleSwitch> {{ value }} -->
        <test-component v-model="value[1]"></test-component>
        
        <div v-for="(v, i) in value">{{ v }}</div>
    </div>
</template>

<script setup>
const value = ref(["Y", "Y", "Y"]);

</script>