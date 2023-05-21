<script setup lang="ts">
interface Props {
    title: String
}
defineProps<Props>();
</script>
<template>
    <span class="sub-title">
        {{ title }}
    </span>
</template>