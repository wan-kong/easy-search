<template>
    <div class="_suggest">

    </div>
</template>
    
<script setup lang='ts' name="suggest">
import { onMounted } from 'vue';
import { Suggest } from '../../suggest/index'
const props = defineProps<{ target: string }>()
onMounted(() => {
    // setTimeout(() => {
    Suggest(props.target)
    // }, 2000);
})
</script>
    
<style lang="scss"></style>