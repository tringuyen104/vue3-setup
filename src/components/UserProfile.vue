<script setup lang="ts">
import User from '../objects/User';
import { defineComponent, h } from 'vue';
import WorkExperience from './WorkExperience.vue';
interface Props {
    data: User
}
defineProps<Props>();
</script>
<template>
    <div class="row user-profile">
        <div class="row user-details">
            <div class="col-xs-12 col-sm-12 col-md-4 user-info">
                <div class="user-avatar">
                    <img src="../assets/images/avatar.jpg" />
                </div>
                <div class="user-name">
                    <h3>{{ data.name }}</h3>
                    <p>{{ data.jobTitle }}</p>
                </div>
                <div class="user-education">
                    <!-- {{ subTitle($t('education')) }} -->
                    <span class="sub-title">{{ $t('education') }}</span>
                    <p>
                        {{ data.education }}
                    </p>
                </div>
                <!-- <div class="user-favorites">
                    {{ data.favorites }}
                </div> -->
                <div class="user-skills">
                    <span class="sub-title">{{ $t('skills') }}</span>
                    <p>{{ data.skills }}</p>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-7 user-experience">
                <div class="user-desctiption pb-4">
                    <content-header-title :title="$t('profile')" :customClass="'pb-4'"/>
                    {{ data.description }}
                </div>
                <div class="user-works">
                    <content-header-title :title="$t('experience')" :customClass="'pb-4'"/>
                    <template v-for="work in data.works">
                        <WorkExperience :work="work" />
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>