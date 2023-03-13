<script lang="ts">
import { defineComponent, computed } from "vue";
import User from "../objects/User";
import UserProfile from "../components/UserProfile.vue";

const getUsers = (): User[] => {
  return new Array<User>({
    age: 27,
    name: "Tri Nguyen",
    jobTitle: "Supppp",
    address: "asb address P12",
    desciption: "My description",
    education: "KHTN",
    email: "email@gmail.com",
    phone: "129999",
    skills: new Array<string>("1", "2", "3", "4", "5"),
  });
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
  mounted() {
    this.users = getUsers();
  },
  methods: {
    handleChange(e) {
      const { value, name } = e.target || e;
      console.log(value);
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
