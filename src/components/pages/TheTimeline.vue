<script setup>
import TimeLineItem from '../TimeLineItem.vue';
import { validateTimelineItems } from '/src/validators';


defineProps({
   timelineItems:{
      required:true,
      type:Array,
      validator:validateTimelineItems
   }
})
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