<script setup lang="ts">
import Work from '../objects/Work';
import { defineComponent } from 'vue'

interface Props {
    work: Work
}
defineProps<Props>();
</script>
<template>
    <div class="work-experience pb-3">
        <div class="row work-info">
            <div class="work-time col-xs-12 col-sm-12 col-md-3">
                <span>{{ work.startDate }}</span>
                <br>
                <!-- <div class="visible-xs">&emsp;</div> -->
                <div class="d-block d-md-none">&nbsp;-&nbsp;</div>
                <span>{{ work.endDate }}</span>
            </div>
            <div class="work-description col-xs-12 col-sm-12 col-md-9 pb-2">
                <div class="pb-2">
                    <h4>{{ work.jobPosition }}</h4>
                    <sub-title :title="work.company" />
                </div>
                <div class="work-details">
                    <div class="work-summary pb-2">
                        {{ work.summary }}
                    </div>
                    <div class="work-desciptions">
                        {{ work.descriptions }}
                        <!-- <ul>
                            <li v-for="desc in work.descriptions">
                                {{ desc }}
                            </li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>