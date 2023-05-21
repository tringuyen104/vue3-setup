<script setup lang="ts">
interface Props {
    title: String
    customClass: String
}
defineProps<Props>();
</script>
<template>
   <div :class="`content-header-title pb-2 d-flex${customClass ? (' ' + customClass) : ''}`">
    <div class="col-xs-12 mr-auto sub-title">
        <h3>{{ title }}</h3>
    </div>
    <div class="col-xs-12 ml-auto sub-line"></div>
   </div>
   
</template>
<style lang="scss">
.content-header-title {
    .sub-title {
        width: fit-content;
    }
    .sub-line {
        border-bottom: 1px solid $system-black;
        width: -webkit-fill-available;
        margin-left: 20px;
        margin-top: auto;
        margin-bottom: auto;
    }
}
</style>