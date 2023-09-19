<script setup>
import {generateTimelineItems} from '/src/function'
const timelineItems=generateTimelineItems()
import TimeLineItem from '../TimeLineItem.vue';
</script>

<template>
   <div class="mt-7">
    <ul>
   <TimeLineItem 
   v-for="timelineItem in timelineItems" 
        :key="timelineItem.hour"
        :timeline-item="timelineItem"/>
    </ul>
   </div>
</template>