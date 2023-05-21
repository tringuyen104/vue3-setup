<script setup>
import { defineComponent } from 'vue'
import NavBar from "~/components/NavBar.vue";
import { useI18n } from 'vue-i18n'
// defineComponent({
//   name: 'app',
//   setup() {
//     const { t } = useI18n() // use as global scope
//     return { t }
//   }
// })
</script>

<template>
  <NavBar />
</template>
