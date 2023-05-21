<script lang="ts">
import { defineComponent, computed } from "vue";
import User from "../objects/User";
import UserProfile from "../components/UserProfile.vue";
import Work from "../objects/Work";
import {getUserProfileById } from '../api/api.user.profile'

const getUsers = async (): Promise<User[]> => {
  const user = (await getUserProfileById('bce462e6-d3dd-456c-8924-183608c0f431'))?.data;
  return Array<User>(user);
};
export default defineComponent({
  components: {
    UserProfile,
  },
  data() {
    return {
      users: Array<User>,
    };
  },
  async created() {
    const users = await getUsers();
    console.log(users)
    this.users = users;
  },
  mounted() {
    console.log(this.users);
  },
  methods: {
    handleChange(e) {
      const { value, name } = e.target || e;
    },
  },
});
</script>
<template>
  <template v-for="item in this.users">
    <UserProfile :data="item" />
  </template>
</template>
<style lang="scss"></style>
