<script setup lang="ts">
import User from '../objects/User';
import { h } from 'vue';
interface Props {
    data: User
}
defineProps<Props>();
const subTitle = (label) => {
//    return h('h3', {class: '', key: Date.now().toString()}, label);
}
</script>
<template>
    <div class="row user-profile">
        <div class="col-sm-4 user-info">
            <div class="user-avatar">
                <img src="../assets/images/avatar.jpg" />
            </div>
            <div class="user-name">
                <h2>{{ data.name }}</h2>
                <span>{{ data.jobTitle }}</span>
            </div>
            <div class="user-education">
                {{ subTitle($t('education')) }}
                <div>
                    {{ data.education }}
                </div>
            </div>
            <div class="user-favorites">
                {{ data.favorites }}
            </div>
            <div class="user-skills">
                {{ subTitle($t('skills')) }}
                {{ data.skills?.join(',') }}
            </div>
        </div>
        <div class="col-sm-8 user-experience">
            <div class="user-desctiption">
                {{ data.desciption }}
            </div>
            <div class="user-works">
                {{ subTitle($t('experience')) }}
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../scss/user-profile.scss';
</style>