<template>
  <TheHeader 
  @go-to-timeline="goTo(PAGE_TIMELINE)"
  @go-to-progress="goTo(PAGE_PROGRESS)"
  />

<main class="flex flex-grow flex-col">
<TheTimeline v-show="currentPage===PAGE_TIMELINE"/>
<TheActivites v-show="currentPage=== PAGE_ACTITIVTES" />
<TheProgress v-show="currentPage===PAGE_PROGRESS" />
</main>

<TheNav :current-page="currentPage" @navigate='goTo($event)'/>

</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheActivites from './components/pages/TheActivites.vue';
import TheProgress from './components/pages/TheProgress.vue';
import TheTimeline from './components/pages/TheTimeline.vue';
import {PAGE_TIMELINE, PAGE_ACTITIVTES, PAGE_PROGRESS} from './constans'
import {ref} from 'vue'
import {normalizePageHash} from '../src/function'


function goTo(page){
  currentPage.value=page
}



const currentPage=ref(normalizePageHash())


</script>
